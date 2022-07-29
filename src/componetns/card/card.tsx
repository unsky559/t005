import * as React from 'react';
import styles from './card.module.scss';
import Tooltip from '../tooltip/tooltip';

type propType = {
  title: string,
  description: Array<string>,
  imageURL: string
}

const Card = (props: propType) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={props.imageURL} alt=""/>
      <Tooltip text={props.title}>
        <p className={styles.title}>{props.title}</p>
      </Tooltip>
      <Tooltip text={props.description[0]}>
        <p className={styles.description}>{props.description[0]}</p>
      </Tooltip>
      <Tooltip text={props.description[1]}>
        <p className={styles.description}>{props.description[1]}</p>
      </Tooltip>
      <Tooltip text={props.description[2]}>
        <p className={styles.description}>{props.description[2]}</p>
      </Tooltip>
    </article>
  );
};

export default Card;
