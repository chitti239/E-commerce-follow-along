import React from 'react'
import {Route,Routes} from "react-router-dom";
import Products from './Components/Products';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AddProduct from './Components/AddProduct';
import MyProducts from './Components/MyProducts';
import Cart from './Components/Cart';
import User from './Components/User';
import UserAddress from './Components/UserAddress';
const AllRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/myproducts' element={<MyProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/user-address' element={<UserAddress/>}/>
    </Routes>
  )
}

export default AllRouting