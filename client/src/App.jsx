import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'

import Navbar from "./components/navbar/Navbar"

import Registration from "./components/authorization/Registration"
import Login from './components/authorization/Login'
import {auth} from './actions/user'

import 'normalize-css'
import './App.scss'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

React.useEffect(() => {
  dispatch(auth())
  return () => {
    
  }
}, [])

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>

          {!isAuth && 
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/registration" component={Registration}/>
            </Switch>
          }
          
        </div>
    </BrowserRouter>
  )
}

export default App
