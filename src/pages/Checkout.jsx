import React from 'react'
import './Checkout.css'
import { useState } from 'react'
import { handleOrder } from '../productapi';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart';

const Checkout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const { emptyCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();



  const { items, cartTotal, totalItems } = location.state || {};
  if (!items || items.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value })
  }
  const [paymentMethod, setPaymentMethod] = useState("COD")
  const [loading, setLoading] = useState(false)
  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      const orderData = {
        userId,
        items: items.map(item => ({ productId: item.id || item._id, quantity: item.quantity || 1 })),
        cartTotal,
        shippingInfo,
        paymentMethod,
        status: paymentMethod === "COD" ? "Pending" : "Processing",
        createdAt: new Date()
      }
      const res = await handleOrder(orderData
        // orderData.userId,
        // orderData.items,
        // orderData.cartTotal,
        // orderData.shippingInfo,
        // orderData.paymentMethod,
        // orderData.status,
        // orderData.createdAt
      )
      if (res.success) {
        console.log(res.message)
        toast.success("Order placed successfully")
        setTimeout(() => {
          emptyCart();
          navigate('/');
        }, 1500);
      } else {
        alert(res.message || "Something went wrong")
      }
    } catch (error) {
      console.error(error);
      alert("Order placed failed")
    } finally {
      setLoading(false)
    }

  }
  return (
    <div className='checkout-container'>
      <h2>CHECKOUT</h2>
      <div className='checkout-section'>
        <h3>SHIPPING DETAILS</h3>
        <input type="text" name='name' placeholder='Full Name' onChange={handleChange} />
        <input type="text" name='address' placeholder='Address' onChange={handleChange} />
        <input type="text" name='city' placeholder='City' onChange={handleChange} />
        <input type="text" name='pincode' placeholder='PinCode' onChange={handleChange} />
        <input type="text" name='phone' placeholder='Phone' onChange={handleChange} />
      </div>

      <div className='checkout-summary'>
        <select value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="COD" >Cash On Delivery</option>
          <option value="Card" >Credit Card</option>
        </select>
      </div>
      <div className='checkout-total'>
        <h3>Total Price: ${cartTotal}</h3>
        <button onClick={handlePlaceOrder} disabled={loading}>{loading ? "Placing order..." : "Place Order"}</button>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  )
}
export default Checkout