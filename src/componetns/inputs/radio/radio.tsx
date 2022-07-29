import * as React from 'react';
import { ReactNode } from 'react';
import styles from './radio.module.scss';
import Text from '../../text/text';

type propType = {
  children: React.ReactNode[]
}

const Radio = (props: propType) => (
    <div className={styles.formPart}>
      <Text className={styles.title}>Select your position</Text>
      { props.children.map((childNode: ReactNode) => (
          <label className={styles.container}>{childNode}
            <input type="radio" name="radio" defaultChecked={true}/>
            <span className={styles.checkmark}></span>
          </label>
      )) }
    </div>
);

export default Radio;
