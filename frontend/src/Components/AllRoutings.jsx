import React from 'react';
import {Route,Routes} from "react-router-dom";
import Products from './Products';
import Login from './Login';
import Signup from './signup'
import AddProduct from './AddProduct';

const AllRoutings = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>} />
    </Routes>
  )
}

export default AllRoutings
