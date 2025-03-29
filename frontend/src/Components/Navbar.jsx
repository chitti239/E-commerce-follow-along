import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div
      onClick={()=>{
        navigate("/");
      }}
      >
        <h1>Home</h1>
      </div>

      <div>
        <p onClick={()=>{
          navigate("/addproducts");
        }} >Add products</p>
      </div>

      <div>
        <div onClick={()=>{
          navigate("/myproducts")
        }}>Myproducts</div>
      </div>
      <div >

        <div
        onClick={()=>{
            navigate("/login")
        }}
        >Login</div>

        <div
        onClick={()=>{
            navigate("/signup")
        }}
        >Signup</div> 
        </div>
     
    </div>
  )
}

export default Navbar
