import React, { useState } from 'react';
import "./signup.css";
const signup = () => {
    const[userDeatails,setUserDetails]=useState({
        name:"",
        email:"",
        password:""
    });
    function handelInput(event){
        console.log(event.target.value);
        setUserDetails({...userDeatails,[event.target.name]:event.target.value})
    }


    async function handelSubmit() {
        if(userDeatails.name == ""){
            alert("Please enter your name")
        }
        if(userDeatails.email == ""){
            alert("Please enter your email")
        }
        if(userDeatails.password == ""){
            alert("Please enter your password")
        }
        try {
            const data=await axios.post("http://localhost:8080/user/signup")
            console.log(data);
            alert("Signup Successfully")
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
        
    }
  return (
    <div className='regis-box'>
      <form action="">
        <label htmlFor="">Nmae</label>
        <input type="text" name='name'placeholder='Name...' onChange={handelInput}/>
        <label htmlFor="">Email</label>
        <input type="email" name='email'placeholder='Email...' onChange={handelInput}/>
        <label htmlFor="">Password</label>
        <input type="password" name='password'placeholder='Password...' onChange={handelInput}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default signup
