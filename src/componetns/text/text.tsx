import * as React from 'react';
import styles from './text.module.scss';

type propsType = {
  children: string,
  white?: boolean,
  className?: string
}

const Text = (props: propsType) => {
  return (
    <p className={`${styles.text} ${props.white && styles.white} ${props?.className}`}>
      {props.children}
    </p>
  );
};

export default Text;
