import * as React from 'react';
import styles from './heading.module.scss';

type propsType = {
  children: string,
  white?: boolean,
  className?: string,
}

const Heading = (props: propsType) => {
  return (
    <h1 className={`${styles.h1} ${props.white && styles.white} ${props?.className}`}>
      {props.children}
    </h1>
  );
};

export default Heading;
