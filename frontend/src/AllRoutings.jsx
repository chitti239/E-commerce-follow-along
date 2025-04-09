import React from 'react';
import {Route,Routes} from "react-router-dom";
import Products from './Components/Products';
import Login from './Components/Login';
import Signup from './Components/signup'
import AddProduct from './Components/AddProduct';
import MyProducts from './Components/MyProducts';
import CartCard from './Components/CartCard';

const AllRoutings = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>} />
        <Route path='/myproducts' element={<MyProducts/>} />
        <Route path='/cart' element={<CartCard/>} />
    </Routes>
  )
}

export default AllRoutings
