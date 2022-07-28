import * as React from 'react';
import styles from './container.module.scss';

type propsType = {
  children: string | React.ReactNode,
  className?: string
}

const Container = (props: propsType) => (
  <div className={`${styles.container} ${props.className}`}>
    {props.children}
  </div>
);

export default Container;
