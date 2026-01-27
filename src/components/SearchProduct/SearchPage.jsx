import React from 'react'
import SearchProduct from './SearchProduct';
import ProductList from './ProductList';
import { useState } from 'react';

const SearchPage = () => {
    const [products,setProducts]= useState([]);
    const [showResult,setShowResult]= useState(false);
  return (
    <div className='search-page'>
        <SearchProduct setProducts= {(data)=>{setProducts(data);setShowResult(true)}}
            onclear={()=>setShowResult(false)} />
        <ProductList products={products} showResult={showResult}/>
    </div>
  )
}

export default SearchPage