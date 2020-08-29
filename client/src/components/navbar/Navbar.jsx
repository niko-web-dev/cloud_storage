import React from 'react'
import logo from '../../assets/image/logo.png'

import s from './navbar.module.scss'

const Navbar = () => {
  return (
      <div className={s.navbar}>

        <div className={s.navbar__logo}>
          <img
              src={logo}
              alt="logo"
              className={s.navbar__logo__img}
          />
          <h3 className={s.navbar__title}>Cloud disk</h3>
        </div>


        <div className={s.navbar__login}>Вход</div>
        <div className={s.navbar__registration}>Регистрация</div>

      </div>
  )
}

export default Navbar