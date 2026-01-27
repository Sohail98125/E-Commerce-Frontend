
import { useEffect, useState } from 'react'
import './RelatedProduct.css'
import { useParams } from 'react-router-dom'
import Item from '../items/Item'
import axios from 'axios'


const RelatedProduct = () => {
  const { _id } = useParams();
  const [related, setRelated] = useState([])
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products/${_id}/related`)
        setRelated(res.data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchRelated();
  }, [_id])

  return (
    <div className='related-products'>
      <div className='related-title'>
        <h2>RELATED PRODUCTS</h2>
        <hr />
        <div className='related-products-list'>
          {related.map((item, i) => {
            return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedProduct