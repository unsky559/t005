import * as React from 'react';
import styles from './header.module.scss';
import logoImage from '../../assets/images/Logo.svg';
import Container from '../container/container';
import Button from '../button/button';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <img src={logoImage} className={styles.logo} alt="TestTask logo"/>
        <div className={styles.controls}>
          <Button onClick={() => {
            document.getElementById('users').scrollIntoView();
          }}>Users</Button>
          <Button onClick={() => {
            document.getElementById('form').scrollIntoView();
          }}>Sign up</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
