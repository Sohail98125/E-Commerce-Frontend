
import React from 'react';
import { useCart } from 'react-use-cart';
import { addToCart } from '../productapi';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;


  // 🛒 Sync with backend when quantity changes
  const handleBackendAdd = async (productId, delta) => {
    try {
      if (delta <= 0) return;
      const result = await addToCart(userId, productId,delta);
      console.log("Synced with backend:", result.message);
    } catch (error) {
      console.error("Failed to sync with backend:", error);
    }
  };

  if (isEmpty) return <div><h2>Your Cart is Empty</h2></div>;

  return (
    <div className='cart-page'>
      <h2>Shopping Cart ({totalItems} Item{totalItems > 1 ? 's' : ''})</h2>
      <hr />
      {items.map((cartItem) => (
        <div className='cart-item' key={cartItem.id || cartItem._id}>
          <img src={cartItem.image} alt={cartItem.name} />
          <div className='item-details'>
            <p>{cartItem.name}</p>
            <p>${(cartItem.price ?? cartItem.new_price ?? 0).toFixed(2)}</p>
            <div className='cart-control'>
              <button
                onClick={() => {
                  const newQty = (cartItem.quantity || 1) - 1;
                  updateItemQuantity(cartItem.id || cartItem._id, newQty);
                  handleBackendAdd(cartItem.id || cartItem._id, newQty);
                }}
              >-</button>

              <span>{cartItem.quantity || 1}</span>

              <button
                onClick={() => {
                  const newQty = (cartItem.quantity || 1) + 1;
                  updateItemQuantity(cartItem.id || cartItem._id, newQty);
                  handleBackendAdd(cartItem.id || cartItem._id, newQty);
                }}
              >+</button>

              <button onClick={() => {
                removeItem(cartItem.id || cartItem._id);
                handleBackendAdd(cartItem.id || cartItem._id, 0);
              }}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className='cart-summary'>
        <h3>Total Price = ${cartTotal}</h3>
        <button onClick={() => emptyCart()}>Clear</button>
        <button className='cart-checkout' onClick={() => navigate("/checkout", { state: { items, cartTotal, totalItems } })}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;

