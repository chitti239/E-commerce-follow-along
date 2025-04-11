import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRouting from './AllRouting'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <AllRouting/>
    </BrowserRouter>

    </>
  )
}

export default App


