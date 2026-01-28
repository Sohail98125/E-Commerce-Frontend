import React, { useState } from 'react'
import "./SearchProduct.css"
import axios from "axios";
import { Navigate } from 'react-router-dom';
const SearchProduct = ({setProducts}) => {
    const [keywords,setKewords]= useState("")
    
    const handleSearch = async(e)=>{
        e.preventDefault()
    try{
        const{data}= await axios.get(`${import.meta.env.VITE_API_URL}/api/products/search/${keywords}`);
        setProducts(data);
    }catch(error){
        console.log(error);
    }
    }
  return (

<form className='form-text' onSubmit={handleSearch}>
    <input className=" form-control"type="text" placeholder='Search Products ...' onChange={(e)=>setKewords(e.target.value)}  />
    <button  className='btn-primary' type= "submit"> Search</button>

</form>
  )
}

export default SearchProduct