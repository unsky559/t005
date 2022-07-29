import * as React from 'react';
import style from './preloader.module.scss';

const Preloader = () => (
    <svg className={style.circular} height="48" width="48">
      <circle className={style.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"
              stroke-miterlimit="10"/>
    </svg>
);

export default Preloader;
