import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import logo from '../../assets/image/logo.png'
import {logout} from '../../reducers/userReducer'

import s from './navbar.module.scss'

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
      <div className={s.navbar}>

        <NavLink to="/" 
          className={s.navbar__logo}>
          <img
              src={logo}
              alt="logo"
              className={s.navbar__logo__img}
          />
          <h3 className={s.navbar__title}>Cloud disk</h3>
        </NavLink>


        {!isAuth && <div className={s.navbar__login}>
          <NavLink to="/login">Вход</NavLink>
        </div>}
        {!isAuth && <div className={s.navbar__registration}>
          <NavLink to="/registration">Регистрация</NavLink></div>}

        {isAuth && <div 
            className={s.navbar__registration}
            onClick={() => dispatch(logout())}
            >Выход</div>}

      </div>
  )
}

export default Navbar