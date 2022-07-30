import { useState } from 'react';
import * as React from 'react';

// eslint-disable-next-line no-control-regex
const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const numberRegex = /^[\+]{0,1}380([0-9]{9})$/;

type validatorType = {
  minLength?: number,
  required?: boolean,
  maxLength?: number,
  email?: boolean,
  number?: boolean
}

const useInput = (initValue: string, validators: validatorType) => {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState('This field is required');
  const [out, updateOut] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    updateOut(false);

    const errors = [];
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const validator in validators) {
      switch (validator) {
        case 'required':
          (val.length === 0 && validators[validator]) && errors.push('This field is required');
          break;
        case 'minLength':
          (val.length < validators[validator] && val.length !== 0) && errors.push(`Min length is ${validators[validator]}`);
          break;
        case 'maxLength':
          (val.length >= validators[validator]) && errors.push(`Max length is ${validators[validator]}`);
          break;
        case 'email':
          // eslint-disable-next-line no-control-regex
          (!emailRegex.test(val) && validators[validator]) && errors.push('Wrong email format');
          break;
        case 'number':
          (!numberRegex.test(val) && validators[validator]) && errors.push('Wrong number format');
          break;
        default: break;
      }
    }

    (errors.length) ? setError(errors[0]) : setError('');
  };

  const onBlur = () => {
    updateOut(true);
  };

  return {
    value,
    error: (out && error),
    onChange,
    onBlur,
    valid: (!error),
  };
};

export default useInput;
