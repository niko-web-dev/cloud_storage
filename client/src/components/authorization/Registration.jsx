import React from 'react';
import Input from '../../utils/input/Input'

import s from './authorization.module.scss'
import { registration } from '../../actions/user';

const Registration = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
      <div className={s.registration}>
        <h2>Регистрация</h2>
        <div className={s.registration__header}>
          <Input 
            value={email} 
            setValue={setEmail} 
            type='text' 
            placeholder='Email'/>
          <Input 
            value={password} 
            setValue={setPassword} 
            type='Password' 
            placeholder='Password'/>
          <button 
            className={s.registration__btn}
            onClick={() => registration(email, password)}
          >
            Регистрация
          </button>
        </div>
      </div>
  );
};

export default Registration;