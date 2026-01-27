import React, { useEffect, useState } from "react";
import { getPopularProducts } from "../../productapi";
import Item from '../items/Item';
import './Popularmen.css'
const PopularKid= () => {
      const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await getPopularProducts("kids");
      setProducts(data);
    };
    fetchPopular();
  }, []);
  
 return (
        <div className='populars-container'>

            <div className='populars'>
                <h1>POPULAR IN KIDS</h1>
                <hr />
                <div className='populars-items'>
                    {products.map((item, i) => {
                        return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default PopularKid