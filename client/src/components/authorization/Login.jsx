import React from 'react';
import Input from '../../utils/input/Input'
import {useDispatch} from 'react-redux'

import s from './authorization.module.scss'
import { login } from '../../actions/user'

const Login = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch('')

  return (
      <div className={s.registration}>
        <h2>Авторизация</h2>
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
            onClick={() => dispatch(login(email, password))}
          >
            Войти
          </button>
        </div>
      </div>
  );
};

export default Login;