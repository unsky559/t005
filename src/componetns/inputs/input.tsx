import * as React from 'react';
import styles from './style.module.scss';

type propType = {
  name: string,
  label: string,
  helperText?: string,
  className?: string,
  error?: string,
  onChange?: (e:any) => any,
  onBlur?: (e:any) => any,
  value: string,
  type: string
}

const Input = (props: propType) => (
    <div className={`${props?.className} ${styles.inputWrap}`}>
      <div className={`${styles.inputComponent} ${props?.error && styles.inputComponentError}`}>
        <label className={`${styles.label} ${props.value && styles?.labelActive}`} htmlFor={props.name}>{props.label}</label>
        <input
          className={styles.input}
          type={props.type}
          name={props.name}
          onChange={props?.onChange}
          onBlur={props?.onBlur}
          value={props.value}
        />
      </div>
      { props.helperText
        && !props?.error
        && <span className={styles.helperText}>{props.helperText}</span> }
      {props?.error && <span className={styles.errorLabel}>{props?.error}</span>}
    </div>
);

export default Input;
