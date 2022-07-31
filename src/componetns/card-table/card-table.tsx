import * as React from 'react';
import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import axios from 'axios';
import { Simulate } from 'react-dom/test-utils';
import Card from '../card/card';
import Button from '../button/button';
import styles from './card-table.module.scss';
import load = Simulate.load;
import Preloader from '../preloader/preloader';

type cardType = {
  title: string,
  position: string,
  email: string,
  phone: string,
  imageURL: string,
  id: string,
}

type propType = {
  formSuccess: [boolean, Dispatch<SetStateAction<boolean>>],
}

let page = 1;

const CardTable = (props: propType) => {
  const [loadingState, setLoadingState] = useState(false);
  const [cards, updateCards] = useState([]);
  const [canLoadNext, updateLoadNext] = useState(true);

  const loadMore = () => {
    setLoadingState(true);
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`).then((result) => {
      const cardsArray: cardType[] = [];
      for (let i = 0; i < result.data.users.length; i += 1) {
        const user = result.data.users[i];
        const cardObject = {
          title: user.name,
          position: user.position,
          email: user.email,
          phone: user.phone,
          imageURL: user.photo,
          id: user.id,
        };
        cardsArray.push(cardObject);
      }
      page += 1;
      const newState = [...cards];
      newState.push(...cardsArray);
      updateCards(newState);

      setLoadingState(false);

      console.log(result.data.links);
      if (result.data.links.next_url === null) {
        updateLoadNext(false);
      }
    }).catch((result) => {
      updateLoadNext(false);
    });
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    page = 1;
    updateCards([]);
  }, [props.formSuccess[0]]);

  useEffect(() => {
    if (!cards.length) {
      loadMore();
    }
  }, [cards]);

  return (
    <>
      <div className={styles.cardTable}>
        {cards.map((card) => <Card
            key={card.id}
            title={card.title}
            imageURL={card.imageURL}
            description={[
              card.position,
              card.email,
              card.phone,
            ]}/>)}
      </div>
      {canLoadNext && (
        loadingState ? (
          <div className="loaderCenter">
            <Preloader/>
          </div>) : (
          <Button onClick={loadMore} className={styles.buttonCards}>Show more</Button>
        )
      )
      }
    </>
  );
};

export default CardTable;
