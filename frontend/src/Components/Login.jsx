import React, { useState } from 'react'

const Login = () => {
    const[loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    function handelInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    function handelLogin(event){
        event.presentDefault()
        if(!loginData.email){
            alert("Please enter email...");
            return;
        }

        if(loginData.password==""){
            alert("Please enter password...");
            return;
        }

        alert("You are successfully loged in");
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
