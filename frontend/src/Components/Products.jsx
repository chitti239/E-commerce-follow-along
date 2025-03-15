import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';



const Products = () => {

    const [products,setProducts] = useState([]);
    function getData(){
        axios.get("https://fakestoreapi.com/products")
        .then((data)=>{
            console.log(data);
            setProducts(data.data);
        }).catch((err)=>{
            console.log(console.error(err));
        })
    }

    
    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
      {
        products.map((ele)=>{
            return <Card key={ele.id} product={ele}/>
        })
      }
    </div>
  )
}

export default Products
