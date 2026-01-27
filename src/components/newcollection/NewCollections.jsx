import React from 'react'
import './NewCollections.css'
import Item from '../items/Item'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useState } from 'react'
import { getProductsByCategory } from '../../productapi';
const NewCollections = () => {
  const { category } = useParams(); // "men" | "women" | "kids"
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(category);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);
    
  return (
    <div className='new-collections'>
      <div className='new-collections-title'></div>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='new-collections-items'>
            {products.map((item,i)=>{
                return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default NewCollections