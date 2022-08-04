import * as React from 'react';
import styles from './card.module.scss';
import coverImage from '../../assets/images/photo-cover.svg';
import Tooltip from '../tooltip/tooltip';

type propType = {
  title: string,
  description: Array<string>,
  imageURL: string
}

const imageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = coverImage;
};

const Card = (props: propType) => (
    <article className={styles.card}>
      <img onError={imageError} className={styles.image} src={props.imageURL} alt=""/>
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

export default Card;
