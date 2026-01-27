   import React, { useEffect, useState } from "react";
import Item from '../items/Item';
import { getPopularProducts } from "../../productapi";
import './Popular.css'
const Popular = () => {
      const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await getPopularProducts("women");
      setProducts(data);
    };
    fetchPopular();
  }, []);
    return (
        <div className='popular-container'>
            <div className='popular'>
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className='popular-items'>
                    {products.map((item, i) => {
                        return <Item key={i} id={item._id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular