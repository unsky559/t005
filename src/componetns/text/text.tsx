import * as React from 'react';
import styles from './text.module.scss';

type propsType = {
  children: string
}

const Text = (props: propsType) => {
  return (
    <p className={styles.text}>
      {props.children}
    </p>
  );
};

export default Text;
