import * as React from 'react';
import { useState } from 'react';
import Input from '../inputs/input';
import styles from './form.module.scss';
import Button from '../button/button';
import Radio from '../inputs/radio/radio';
import Upload from '../inputs/upload';
import useInput from '../../hooks/useInput';

type propType = {
  className?: string
}

const Form = (props:propType) => {
  const name = useInput('', { required: true, minLength: 2, maxLength: 60 });
  const email = useInput('', {
    required: true, email: true, minLength: 2, maxLength: 100,
  });
  const number = useInput('', {
    required: true, number: true,
  });
  const [positionId, selectPositionId] = useState('');
  const [isFileUploadValid, fileUpload] = useState(false);

  const [file, updateFile] = useState(null);

  const radioPositions = [
    {
      text: 'Frontend developer',
      value: '1',
      defaultSelected: true,
    },
    {
      text: 'Backend developer',
      value: '2',
    },
    {
      text: 'Designer',
      value: '3',
    },
    {
      text: 'QA',
      value: '4',
    },
  ];

  const onSubmit = () => {
    console.log('SYBMInT');
  };

  return (
    <div className={`${props?.className} ${styles.formSpacing}`}>
      <div className={styles.form}>
        <Input type="text" error={name.error} onChange={name.onChange} onBlur={name.onBlur} value={name.value} name="name" label="Your name" />
        <Input type="email" error={email.error} onChange={email.onChange} onBlur={email.onBlur} value={email.value} className={styles.spacingVertical} name="email" label="Email" />
        <Input type="text" error={number.error} onChange={number.onChange} onBlur={number.onBlur} value={number.value} className={styles.bottomSpacing} name="phone" label="Phone" helperText="+38 (XXX) XXX - XX - XX" />
        <Radio name="position" select={selectPositionId} radios={radioPositions}/>
        <Upload file={updateFile} isValid={fileUpload} />
      </div>
      <Button
        onClick={onSubmit}
        disabled={!name.valid || !email.valid || !number.valid || !isFileUploadValid}>
        Sing up
      </Button>
    </div>
  );
};

export default Form;
