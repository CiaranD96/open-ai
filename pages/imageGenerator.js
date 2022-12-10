import React, { useState } from 'react';

import Spinner from '../components/spinner/Spinner';

import styles from '../styles/ImageGenerator.module.css';

const imageGenerator = () => {
  const [inputError, setInputError] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setInputError('');
    setErrorMsg('');
    setImgSrc('');

    const prompt = e.target[0].value;
    const size = e.target[1].value;

    if (prompt === '') {
      setInputError('Image description required');
      return;
    }

    generateImageRequest(prompt, size);
  };

  const generateImageRequest = async (prompt, size) => {
    try {
      revealSpinner();

      const response = await fetch('api/generateimage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      });

      if (!response.ok) {
        removeSpinner();
        throw new Error('Could not generate image');
      }

      const data = await response.json();
      const imageUrl = data.image;

      setImgSrc(imageUrl);
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
          <form id={styles.imageForm} onSubmit={onSubmit}>
            <h1>Describe An Image</h1>
            <div className={styles.formControl}>
              <p className={styles.errorMsg}>{inputError && inputError}</p>
              <input type='text' id={styles.prompt} placeholder='Enter Text' />
            </div>

            <div className={styles.formControl}>
              <select name='size' id={styles.size} defaultValue='medium'>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
            </div>
            <button type='submit' className={styles.btn}>
              Generate
            </button>
          </form>
        </section>

        <section className={styles.image}>
          <div className={styles.imageContainer}>
            <h2 className={styles.msg}>{errorMsg}</h2>
            <picture>
              <img src={imgSrc} alt='' id={styles.image} />
            </picture>
          </div>
        </section>
      </main>
      <Spinner spinner={showSpinner}></Spinner>
    </div>
  );
};

export default imageGenerator;
