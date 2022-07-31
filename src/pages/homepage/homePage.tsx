import * as React from 'react';
import Heading from '../../componetns/heading/heading';
import Text from '../../componetns/text/text';
import Button from '../../componetns/button/button';
import Card from '../../componetns/card/card';
import Header from '../../componetns/header/header';
import Container from '../../componetns/container/container';
import Form from '../../componetns/form/form';
import styles from './homePage.module.scss';
import bg from '../../assets/images/banner-bg.jpeg';
import CardTable from '../../componetns/card-table/card-table';

const HomePage = () => (
    <div>
      <Header/>
      <Container>
        <div className={styles.banner} style={{ backgroundImage: `url(${bg})` }}>
          <div className={styles.bannerContent}>
            <Heading white>Test assignment for front-end developer</Heading>
            <Text className={styles.bannerP} white>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</Text>
            <Button>Sing up</Button>
          </div>
          <div className={styles.bannerOverlay}></div>
        </div>
      </Container>

      <Container>
        <section className={`${styles.section} ${styles.cardSection}`}>
          <Heading className={styles.heading}>Working with GET request</Heading>
          <CardTable/>

        </section>

        <section className={`${styles.section} ${styles.formSection}`}>

          <Heading className={styles.headingPost}>Working with POST request</Heading>

          <Form className={styles.form}/>

        </section>
      </Container>

    </div>
);

export default HomePage;
