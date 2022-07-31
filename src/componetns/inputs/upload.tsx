import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import styles from './style.module.scss';

type propType = {
  isValid: React.Dispatch<React.SetStateAction<boolean>>,
  file: Dispatch<any>,
  errorState: [string, React.Dispatch<React.SetStateAction<string>>],
}

const Upload = (props: propType) => {
  const [uploadText, updateUploadText] = useState('');
  const [errorText, updateError] = props.errorState;

  const onClick = () => {
    const form = document.createElement('input');
    form.type = 'file';
    form.click();

    const onChange = (e: Event) => {
      form.removeEventListener('change', onChange);
      const file = (e.target as HTMLInputElement).files[0];
      updateUploadText(file.name);
      if (file.type !== 'image/jpeg') {
        updateError('The photo format must be jpeg/jpg type');
        props.isValid(false);
      } else if (file.size > (5 * 1024 ** 2)) { // 5Mb
        updateError('The photo size must not be greater than 5 Mb');
        props.isValid(false);
      } else {
        props.file(file);
        updateError('');
        props.isValid(true);
      }
    };
    form.addEventListener('change', onChange);
  };

  useEffect(() => {
    props.file(null);
    props.isValid(false);
  }, []);

  return (
    <div>
      <div onClick={onClick} className={`${styles.uploadComponent} ${errorText && styles.error}`}>
        <button className={styles.uploadBtn}>Upload</button>
        <div className={`${styles.uploadFill} `}>
          <span className={`${styles.uploadedFile} ${uploadText && styles.fileSelected}`}>{uploadText || 'Upload your photo'}</span>
        </div>

      </div>
      {errorText && <span className={styles.errorLabel}>{errorText}</span>}
    </div>
  );
};

export default Upload;
