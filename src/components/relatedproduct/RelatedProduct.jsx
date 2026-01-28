
import { useEffect, useState } from 'react'
import './RelatedProduct.css'
import { useParams } from 'react-router-dom'
import Item from '../items/Item'
import axios from 'axios'
import Loader from '../loader/Loader'

const RelatedProduct = () => {
  const { _id } = useParams();
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${_id}/related`)
        setRelated(res.data)
      } catch (error) {
        console.error(error.message)
        setRelated([])
      }finally{
        setLoading(false)
      }
    }
    fetchRelated();
  }, [_id])

  return (
    <div className='related-products'>
      <div className='related-title'>
        <h2>RELATED PRODUCTS</h2>
        <hr />
           {loading ? (
        <Loader text="Loading related products..." />
      ) : (
        <div className="related-products-list">
          {related.length > 0 ? (
            related.map((item, i) => (
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
            <p>No related products found</p>
          )}
        </div>
      )}
      </div>
    </div>
  )
}

export default RelatedProduct