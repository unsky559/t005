import * as React from 'react';
import { useState, Suspense } from 'react';
import Heading from '../../componetns/heading/heading';
import Text from '../../componetns/text/text';
import Button from '../../componetns/button/button';
import Header from '../../componetns/header/header';
import Container from '../../componetns/container/container';
import styles from './homePage.module.scss';
import bg from '../../assets/images/banner-bg.jpeg';

const Form = React.lazy(() => import('../../componetns/form/form'));
const CardTable = React.lazy(() => import('../../componetns/card-table/card-table'));

const HomePage = () => {
  const formSuccess = useState(false);
  return (
    <div>
      <Header/>
      <Container>
        <div className={styles.banner} style={{ backgroundImage: `url(${bg})` }}>

          <div className={styles.bannerOverlay}>
            <div className={styles.bannerContent}>
              <Heading white>Test assignment for front-end developer</Heading>
              <Text className={styles.bannerP} white>What defines a good front-end developer is one
                that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design
                thinking as they'll be building web interfaces with accessibility in mind. They should
                also be excited to learn, as the world of Front-End Development keeps evolving.</Text>
              <Button onClick={() => {
                document.getElementById('form').scrollIntoView();
              }}>Sing up</Button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <section className={`${styles.section} ${styles.cardSection}`}>
          <Heading id="users" className={styles.heading}>Working with GET request</Heading>

          <Suspense>
            <CardTable formSuccess={formSuccess}/>
          </Suspense>

        </section>

        <section className={`${styles.section} ${styles.formSection}`}>

          <Suspense>
            <Form id="form" formSuccess={formSuccess} className={styles.form}/>
          </Suspense>

        </section>
      </Container>

    </div>
  );
};

export default HomePage;
