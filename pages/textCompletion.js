import React, { useState } from 'react';

import Spinner from '../components/spinner/Spinner';

import styles from '../styles/textCompletion.module.css';

const textCompletion = () => {
  const [openaiAnswer, setOpenAiAnswer] = useState('');
  const [inputError, setInputError] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    setOpenAiAnswer('');
    setInputError('');
    setErrorMsg('');

    const prompt = e.target[0].value;

    if (prompt === '') {
      setInputError('Question required');
      return;
    }

    generateTextRequest(prompt);
  };

  const generateTextRequest = async (prompt) => {
    try {
      revealSpinner();

      const response = await fetch('api/textcompletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        removeSpinner();
        throw new Error('Could not answer query');
      }

      const data = await response.json();
      const text = data.text;

      setOpenAiAnswer(text);
      removeSpinner();
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const revealSpinner = () => {
    setShowSpinner('show');
  };

  const removeSpinner = () => {
    setShowSpinner('');
  };

  return (
    <div>
      <main>
        <section className={styles.showcase}>
          <form id={styles.form} onSubmit={onSubmit}>
            <h1>Talk to OpenAI</h1>
            <p className={styles.errorMsg}>{inputError && inputError}</p>
            <input id={styles.prompt} type='text' placeholder='Enter text' />
            <button type='submit' className={styles.btn}>
              Ask OpenAI
            </button>
          </form>
        </section>

        <section className={styles.openaiResponse}>
          {errorMsg && errorMsg}

          {openaiAnswer && (
            <div className={styles.response}>
              <h2 className={styles.subheader}>OpenAIs Response</h2>
              <p>{openaiAnswer}</p>
            </div>
          )}
        </section>
      </main>
      <Spinner spinner={showSpinner}></Spinner>
    </div>
  );
};

export default textCompletion;
