import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
                <Link to={`/product/${props.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src={props.image} alt={props.name}/>
                    <p>{props.name}</p>
                </Link>
                <div className='item-prices'>
                        <div className='item-price-new'>
                                ${props.new_price}
                        </div>
                        <div className='item-price-old'>
                                ${props.old_price}
                        </div>
                </div>  
        </div>
    )
}

export default Item