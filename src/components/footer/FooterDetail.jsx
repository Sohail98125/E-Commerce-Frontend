import React from 'react'
import './FooterDetail.css'
import { useNavigate } from 'react-router-dom'

const FooterDetail = () => {
  const navigate = useNavigate()
       
  return (
    <div className="footer-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        HOME
      </button>

      <h1>Our Services</h1>

      <div className="detail-section">
        <img src="/img/policy1.png" alt="Free Shipping" />
        <h2>Free Shipping</h2>
        <p>
          Enjoy free shipping on all orders over <strong>$49.00</strong>.
          We deliver quickly and safely to your doorstep.
        </p>
      </div>

      <div className="detail-section">
        <img src="/img/policy2.png" alt="Money Guarantee" />
        <h2>Money Guarantee</h2>
        <p>
          Not satisfied with your purchase? You can request an exchange
          within <strong>30 days</strong> of delivery.
        </p>
      </div>

      <div className="detail-section">
        <img src="/img/policy3.png" alt="Online Support" />
        <h2>Online Support</h2>
        <p>
          Our support team is available <strong>24/7</strong> to help you
          with orders, payments, and product queries.
        </p>
      </div>

      <div className="detail-section">
        <img src="/img/policy4.png" alt="Flexible Payment" />
        <h2>Flexible Payment</h2>
        <p>
          Pay easily using multiple payment methods including
          debit cards, credit cards, and online wallets.
        </p>
      </div>
    </div>
  )
}

export default FooterDetail
