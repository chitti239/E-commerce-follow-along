import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/signup'
import Products from './Components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/>
      <Signup/> */}
      <Products/>
    </>
  )
}

export default App
