import * as React from 'react';
import styles from './button.module.scss';

type propType = {
  children: string,
  disabled?: boolean
}

const Button = (props: propType) => {
  return (
    <button className={styles.btn} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
