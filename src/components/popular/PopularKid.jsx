import React, { useEffect, useState } from "react";
import { getPopularProducts } from "../../productapi";
import Item from '../items/Item';
import Loader from "../loader/Loader";
import './Popularmen.css'
const PopularKid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopular = async () => {
       try {
              setLoading(true);
              const data = await getPopularProducts("kids");
              setProducts(data || []);
            } catch (error) {
              console.error("Popular products error:", error);
              setProducts([]);
            } finally {
              setLoading(false);
            }
          };
        fetchPopular();
    }, []);

    return (
        <div className='populars-container'>

            <div className='populars'>
                <h1>POPULAR IN KIDS</h1>
                <hr />
                                   {loading ? (
          <Loader text="Loading popular products..." />
        ) : (
          <div className="populars-items">
            {products.length > 0 ? (
              products.map((item, i) => (
                <Item
                  key={i}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              ))
            ) : (
              <p>No popular products found</p>
            )}
          </div>
        )}

            </div>
        </div>
    )
}

export default PopularKid