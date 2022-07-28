import * as React from 'react';
import styles from './heading.module.scss';

type propsType = {
  children: string
}

const Heading = (props: propsType) => {
  return (
    <h1 className={styles.h1}>
      {props.children}
    </h1>
  );
};

export default Heading;
