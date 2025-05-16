import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'
import { BrowserRouter } from 'react-router-dom'
import AllRouting from './AllRouting'
import Navbar from './components/Navbar'
import {Provider} from "react-redux";
import axios from 'axios'
import Store from '../redux/store'
axios.defaults.withCredentials = true
function App() {

  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>
      <Navbar/>
      <AllRouting/>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App