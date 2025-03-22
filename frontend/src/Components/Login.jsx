import axios from 'axios'
import { json } from 'express'
import React, { useState } from 'react'

const Login = () => {
    const[loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    function handelInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    async function handelLogin(event){
        event.presentDefault()
        if(!loginData.email){
            alert("Please enter email...");
            return;
        }

        if(loginData.password==""){
            alert("Please enter password...");
            return;
        }

        try {
          const checkUser = await axios.post("http://localhost:8080/user/login",loginData);
          console.log(checkUser);
          localStorage.setItem("Follow-along-auth-token",json.stringify(checkUser.data.token));
          alert("You are successfully loged in");
        } catch (error) {
          console.log(error);
          alert("Something went wrong while logging...")
        }

    }
  return (
    <div>
      <form style={{display:"flex"}}>
        <label htmlFor="">Email</label>
        <input type="email" name='email' onChange={handelInput} placeholder='Email....' />
        <label htmlFor="">Password</label>
        <input type="password" name='password' onChange={handelInput} placeholder='Password' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
