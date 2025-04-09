import './App.css'
 
import AllRoutings from './Components/AllRoutings'
import {BrowserRouter} from "react-router-dom";
import Navbar from './Components/Navbar'


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
