import * as React from 'react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import Input from '../inputs/input';
import styles from './form.module.scss';
import Button from '../button/button';
import Radio from '../inputs/radio/radio';
import Upload from '../inputs/upload';
import useInput from '../../hooks/useInput';
import radioList from '../inputs/radio/radioList';
import Preloader from '../preloader/preloader';
import successImage from '../../assets/images/success-image.svg';
import Heading from '../heading/heading';

type propType = {
  id?: string,
  className?: string,
  formSuccess: [boolean, Dispatch<SetStateAction<boolean>>],
}

const Form = (props:propType) => {
  const name = useInput('', { required: true, minLength: 2, maxLength: 60 });
  const email = useInput('', {
    required: true, email: true, minLength: 2, maxLength: 100,
  });
  const number = useInput('', {
    required: true, number: true,
  });

  const [radioPositions, updateRadioPositions] = useState([]);
  const [positionId, selectPositionId] = useState('1');
  const [isFileUploadValid, fileUpload] = useState(false);

  const [file, updateFile] = useState(null);

  const uploadError = useState('');

  const [loadingState, updateLoadingState] = useState(false);
  const [isSucces, setSuccess] = props.formSuccess;

  useEffect(() => {
    const radios: React.SetStateAction<any[]> = [];
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions').then((result) => {
      for (let i = 0; i < result.data.positions.length; i += 1) {
        const radio:radioList = {
          text: result.data.positions[i].name,
          value: result.data.positions[i].id,
        };
        if (i === 0) {
          radio.defaultSelected = true;
        }
        radios.push(radio);
      }
      updateRadioPositions(radios);
    });
  }, []);

  const onSubmit = async () => {
    updateLoadingState(true);
    const tokenReq = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
    const { token } = tokenReq.data;

    const config = {
      headers: {
        Token: token,
      },
    };

    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', number.value);
    formData.append('position_id', positionId);
    formData.append('photo', file, 'photo.jpg');

    const postReq = axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, config);

    postReq
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          email.setError(err.response.data.message);
          number.setError(err.response.data.message);
        }
        if (err.response.status === 422) {
          Object.keys(err.response.data.fails).map((key) => {
            switch (key) {
              case 'name':
                name.setError(err.response.data.fails[key][0]);
                break;
              case 'email':
                email.setError(err.response.data.fails[key][0]);
                break;
              case 'number':
                number.setError(err.response.data.fails[key][0]);
                break;
              case 'photo':
                uploadError[1](err.response.data.fails[key][0]);
                break;
              default: break;
            }
          });
        }
        updateLoadingState(false);
      });
  };

  return (
    <>
      <Heading id={props.id} className={styles.headingPost}>{isSucces ? 'User successfully registered' : 'Working with POST request'}</Heading>
      <div className={`${props?.className} ${styles.formSpacing}`}>
        {
          !isSucces && <>
            <div className={styles.form}>
              <Input type="text" error={name.error} onChange={name.onChange} onBlur={name.onBlur} value={name.value} name="name" label="Your name" />
              <Input type="email" error={email.error} onChange={email.onChange} onBlur={email.onBlur} value={email.value} className={styles.spacingVertical} name="email" label="Email" />
              <Input type="text" error={number.error} onChange={number.onChange} onBlur={number.onBlur} value={number.value} className={styles.bottomSpacing} name="phone" label="Phone" helperText="+38 (XXX) XXX - XX - XX" />
              <Radio name="position" select={selectPositionId} radios={radioPositions}/>
              <Upload errorState={uploadError} file={updateFile} isValid={fileUpload} />
            </div>
            {loadingState ? <div className={styles.preloaderCenter}>
              <Preloader/>
            </div> : <Button
              onClick={onSubmit}
              disabled={!name.valid || !email.valid || !number.valid || !isFileUploadValid}
            >
              Sing up
            </Button>
            }
          </>
        }
        {
          isSucces && <>
            <img className={styles.successImage} src={successImage} alt="Susses"/>
          </>
        }
      </div>
    </>
  );
};

export default Form;
