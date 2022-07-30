import * as React from 'react';
import { useEffect } from 'react';
import styles from './radio.module.scss';
import Text from '../../text/text';

type radioList = {
  text: string,
  value: string
  defaultSelected?: boolean
}

type propType = {
  name: string,
  select: React.Dispatch<string>,
  radios: radioList[],
}

const Radio = (props: propType) => {
  const updateSelect = (value: string) => {
    console.log(value);
    props.select(value);
  };

  useEffect(() => {
    props.radios.map((radio: radioList) => {
      if (radio.defaultSelected) {
        updateSelect(radio.value);
      }
      return false;
    });
  }, []);

  return (
    <div className={styles.formPart}>
      <Text className={styles.title}>Select your position</Text>
      {props.radios.map((radio: radioList) => (
          <label key={radio.value} className={styles.container}>{radio.text}
            <input onClick={updateSelect.bind(null, radio.value)} type="radio" name={props.name}
                   value={radio.value} defaultChecked={radio.defaultSelected}/>
            <span className={styles.checkmark}></span>
          </label>
      ))}
    </div>
  );
};

export default Radio;
