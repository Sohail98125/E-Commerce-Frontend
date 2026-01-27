import React, { useState, useEffect } from 'react'
import './ShopCategories.css'
import axios from 'axios'
import Item from '../components/items/Item'
import Footer from '../components/footer/Footer'
import { getProductsByCategory } from "../productapi";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const ShopCategories = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(category);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);
  const [bannerUrl, setBannerUrl] = useState(null)

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/${category}`);
        setBannerUrl(res.data.image);
      } catch (err) {
        console.error("Error fetching banner:", err);
        setBannerUrl(null);
      }
    };
    fetchBanner();
  }, [category]);



  // const filteredproducts = all_products.filter((item) => item.category === category)
  return (
    <div className='collection_container'>
      <div className='shop-banner'>
        < img className='shopcategory-banner' src={bannerUrl} alt="" onClick={() => {
          if (category === "men") { navigate("/kids") } else if (category === "kids") {
            navigate("/women")
          } else {
            navigate('/men')
          }
        }} />
      </div>
      <div className='new-collections-container'>
        <div className='new_collections_title'>
          <h1>NEW COLLECTIONS</h1>
          <hr />
        </div>
        <div className='new_collections'>
          {products.map((item, i) => {
            return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
        <div className='shopcategory-loadmore'>
          <button onClick={() => {
            if (category === "men") { navigate("/kids") } else if (category === "kids") {
              navigate("/women")
            } else {
              navigate('/men')
            }
          }}> EXPLORE MORE </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ShopCategories