import * as React from 'react';
import styles from './button.module.scss';

type propType = {
  children: string,
  disabled?: boolean,
  className?: string,
}

const Button = (props: propType) => {
  return (
    <button className={`${styles.btn} ${props?.className}`} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
