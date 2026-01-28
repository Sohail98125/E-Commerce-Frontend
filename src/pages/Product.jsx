import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import axios from 'axios'
import RelatedProduct from '../components/relatedproduct/RelatedProduct'
import Loader from '../components/loader/Loader'
import './Product.css'


const Product = () => {

  const { addItem } = useCart()
  // var{id} = useParams();
  // var {id} = Number(id);

  const { _id } = useParams();

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/product/${_id}`)
        setProduct(res.data.product)
      } catch (error) {
        console.error("Error fetching product", error);
        // setProduct(null)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct();
  }, [_id])

  if (loading) {
    return <Loader text="Loading product..." /> 
  }

  if (!product) {
    return (
      <div>
        <h2>PRODUCT NOT FOUND</h2>
        <Link to='/'>GO TO SHOP </Link>
      </div>
    )
  }
  return (
    <>
      <div className='product-page'>
        {/* <div className='product-detailer'> */}
          <div className='product-image-mini'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className='product-image' >
            <img src={product.image} alt={product.name} />
          </div>
          <div className='product-details'>
            <h1>{product.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aperiam eius, repudiandae nulla illo aliquid possimus! Corrupti, accusantium odit sunt quas neque architecto error velit, ad a ipsum repudiandae porro.</p>
            <p className='price'>${product.new_price} <span className='old'>${product.old_price}</span></p>
            <p className='category'>Category:{product.category}</p>
            <hr />
            <div className='action'>
              <button className='add-to-cart' onClick={() => addItem({
                id: product._id || product.id,
                price: product.new_price,
                name: product.name,
                image: product.image,
              })}>ADD TO CART</button>
              <Link to='/' className='back'> Continue Shopping</Link>
            </div>
          </div>
        {/* </div> */}
      </div>
      <RelatedProduct />
    </>
  )
}

export default Product