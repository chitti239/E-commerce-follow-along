import React, { useState } from 'react'
import axios from "axios";
import styles from "./AddProduct.module,css"

const AddProduct = () => {
    const[noOfImages,setNoOfImages] = useState(new Array(1).fill(1));
    const [productDetails,setProductDetails] = useState({
      name:"",
      email:"",
      password:""
    });
    const[productImages,setProductImages] = useState([]);

    async function handelSubmit(e){
      try {
        const {name,email,password} = productDetails;
        if(!name || !email || !password || productImages.length == 0){
          alert("All fields are required...")
          return;
        }
        const token = JSON.parse(localStorage.getItem("follow-along-auth-token-user-name-id"));
        if(!token){
          alert("Please login first.....");
          return;
        }
        const data = new formData();
        formData.append("name",name)
        formData.append("email",email)
        formData.append("password",password)
        for(let i=0;i<productImages.length();i++){
          formData.append("image",productImages[i]);
        }
        await axios.post("http://localhost:8080/products/addProducts",formData,{
          headers:{
            "authorization":token.token
          }
        })
      } catch (error) {
        console.log(error);
        alert("Something went wrong while sending data...")
      }
    }
  return (
    <div>
      <form action="" className={styles.formbox}>
        <input type='text' name={"title"} placeholder='Enter title...' onChange={(event)=>{
          setProductDetails({...productDetails,[event.target.value]:event.target.value})
        }}/>
        <input type='text' name={"description"} placeholder='Enter product description...' onChange={(event)=>{
          setProductDetails({...productDetails,[event.target.value]:event.target.value})
        }} />
        <input type='number' name='price' placeholder='Enter price...' onChange={(e)=>{
          setProductDetails({...productDetails,[e.target.value]:e.target.value})
        }}/>
        <select name='' id=''onChange={(event)=>{
            console.log(event.target.value,noOfImages);
            setNoOfImages(new Array(parseInt(event.target.value)).fill(1));
        }} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <label htmlFor=''>Add Images</label>
        {
            noOfImages.map((ele)=>(
                <input type="file" accept='image/*' onChange={(event)=>{
                  console.log(event.target.files[0])
                  setProductImages([...productImages,event.target.files[0]])
                }} />
            ))
        }
      </form>
    </div>
  )
}

export default AddProduct
