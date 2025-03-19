import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'

import Products from './Components/Products'
import AllRoutings from './Components/AllRoutings'
import {BrowserRouter} from "react-router-dom";
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AllRoutings/>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
