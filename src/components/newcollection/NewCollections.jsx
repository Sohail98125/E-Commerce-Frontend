import React from 'react'
import './NewCollections.css'
import Item from '../items/Item'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useState } from 'react'
import { getProductsByCategory } from '../../productapi';
import Loader from '../loader/Loader';

const NewCollections = () => {
  const { category } = useParams(); // "men" | "women" | "kids"
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductsByCategory(category);
        setProducts(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className='new-collections'>
      <div className='new-collections-title'></div>
        <h1>NEW COLLECTIONS</h1>
        <hr />
       {loading ? (
        <Loader text="Loading new collections..." />
      ) : (
        <div className="new-collections-items">
          {products.length > 0 ? (
            products.map((item, i) => (
              <Item
                key={i}
                id={item._id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default NewCollections