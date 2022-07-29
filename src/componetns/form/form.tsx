import * as React from 'react';
import Input from '../inputs/input';
import styles from './form.module.scss';
import Button from '../button/button';
import Radio from '../inputs/radio/radio';
import Upload from '../inputs/upload';

type propType = {
  className?: string
}

const Form = (props:propType) => {
  return (
    <div className={`${props?.className} ${styles.formSpacing}`}>
      <div className={styles.form}>
        <Input name="name" label="Your name" />
        <Input className={styles.spacingVertical} name="email" label="Email" />
        <Input name="phone" label="Phone" helperText="+38 (XXX) XXX - XX - XX" />
        <Radio>
          <>Frontend developer</>
          <>Backend developer</>
          <>Designer</>
          <>QA</>
        </Radio>
        <Upload/>
      </div>
      <Button>Sing up</Button>
    </div>
  );
};

export default Form;
