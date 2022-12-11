import React, { useState, useEffect, Fragment } from 'react';

import Spinner from '../components/spinner/Spinner';

const imageGenerator = () => {
  const [inputError, setInputError] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    setInputError('');
    setErrorMsg('');
    setImgSrc('');

    const prompt = e.target[0].value;
    const size = e.target[1].value.toLowerCase();

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
    <Fragment>
      <main className='container'>
        <section>
          <h2>Image Generator</h2>
          <form onSubmit={onSubmit}>
            <p className='input-error'>{inputError && inputError}</p>
            <div className='row'>
              <div className='input-field'>
                <input
                  placeholder='Enter image description'
                  id='prompt'
                  type='text'
                  className='validate'
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-field'>
                <select defaultValue='medium'>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                </select>
                <label>Image Size</label>
              </div>
            </div>
            <div className='row'>
              <button type='submit' className='btn  blue lighten-1'>
                Generate
              </button>
            </div>
          </form>
        </section>

        <section>
          <h2 className='error-message'>{errorMsg}</h2>
          <picture>
            <img src={imgSrc} alt='' id='image' />
          </picture>
        </section>
      </main>
      <Spinner spinner={showSpinner}></Spinner>
    </Fragment>
  );
};

export default imageGenerator;
