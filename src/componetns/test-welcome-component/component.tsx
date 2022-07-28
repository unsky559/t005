import * as React from 'react';
import styles from './style.module.scss';

const TestWelcomeComponent = () => {
  const welcomeTexts = [
    'TypeScriptReactStarter wish you good coding time ^-^',
    'Anything is ready for your new app',
    'React Scss and Typescript on line 😉',
    'Hello, World!',
    'Brand new and fresh',
    'Another one',
  ];

  const randomIndex = ():number => {
    const rnd = Math.random() * (welcomeTexts.length - 1);
    return +rnd.toFixed(0);
  };

  return (
    <h1 className={styles.welcomeText}>{welcomeTexts[randomIndex()]}</h1>
  );
};

export default TestWelcomeComponent;
