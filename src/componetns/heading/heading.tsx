import * as React from 'react';
import styles from './heading.module.scss';

type propsType = {
  id?: string,
  children: string,
  white?: boolean,
  className?: string,
}

const Heading = (props: propsType) => {
  return (
    <h1 id={props.id} className={`${styles.h1} ${props.white && styles.white} ${props?.className}`}>
      {props.children}
    </h1>
  );
};

export default Heading;
