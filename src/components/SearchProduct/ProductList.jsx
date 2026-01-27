import React from 'react'
import './ProductList.css'
import { useNavigate } from 'react-router-dom'

const ProductList = ({products}) => {
    const navigate = useNavigate();
    return (
        <div className='product-list'>
            {products.length === 0 ? ("") : (
                products.map((p) => (
                    <div key={p._id} className='product-card' onClick={() => navigate(`/product/${p._id}`)}>
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                    </div>
                ))
            )}
        </div>
    )
}
export default ProductList;