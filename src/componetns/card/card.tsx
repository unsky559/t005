import * as React from 'react';
import styles from './card.module.scss';

type propType = {
  title: string,
  description: Array<string>,
  imageURL: string
}

const Card = (props: propType) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={props.imageURL} alt=""/>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description[0]}</p>
      <p className={styles.description}>{props.description[1]}</p>
      <p className={styles.description}>{props.description[2]}</p>
    </article>
  );
};

export default Card;
