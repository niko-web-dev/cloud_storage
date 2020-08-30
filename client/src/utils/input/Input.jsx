import React from 'react';

import s from './input.module.scss'

const Input = (props) => {
  return (
    <div>
      <input 
        onChange={(event) => props.setValue(event.target.value)}
        value={props.value}
        type={props.type} 
        placeholder={props.placeholder}
        className={s.input}
      />
    </div>
  );
};

export default Input;