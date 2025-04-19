import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutings from './AllRoutings'
import Navbar from './Components/Navbar';


function App() {

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


