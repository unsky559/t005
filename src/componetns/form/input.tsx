import * as React from 'react';
import { useState } from 'react';
import styles from './style.module.scss';

type propType = {
  name: string,
  label: string,
  helperText?: string
}

const Input = (props: propType) => {
  const [inputState, updateInputState] = useState("");
  const [errorText, updateError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputState(e.target.value);
  }

  return (
    <>
      <div className={`${styles.inputComponent} ${errorText && styles.inputComponentError}`}>
        <label className={`${styles.label} ${inputState ? styles.labelActive : null}`} htmlFor={props.name}>{props.label}</label>
        <input className={styles.input} type="text" name={props.name} onChange={onChange}/>
      </div>
      { props.helperText
        && !errorText
        && <span className={styles.helperText}>{props.helperText}</span> }
      {errorText && <span className={styles.errorLabel}>{errorText}</span>}
    </>
  );
};

export default Input;
