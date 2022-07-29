import * as React from 'react';
import { useState } from 'react';
import styles from './style.module.scss';

const Upload = () => {
  const [uploadText, updateUploadText] = useState('Upload your photo');
  const [errorText, updateError] = useState('');

  return (
    <div>
      <div className={`${styles.uploadComponent} ${errorText ? styles.error : null}`}>
        <button className={styles.uploadBtn}>Upload</button>
        <div className={styles.uploadFill}>{uploadText}</div>

      </div>
      {errorText && <span className={styles.errorLabel}>{errorText}</span>}
    </div>
  );
};

export default Upload;
