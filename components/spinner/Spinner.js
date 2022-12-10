import React from 'react';

import styles from './Spinner.module.css';

const Spinner = ({ spinner }) => {
  return <div className={`${styles.spinner} ${spinner && styles.show}`}></div>;
};

export default Spinner;
