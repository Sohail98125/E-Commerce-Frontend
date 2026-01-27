import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-left'>
           <div className='service-info'>
            <div className='service-icon' onClick={()=>navigate('/footerDetail')}>
                <img src="/img/policy1.png" alt="policy1" />
            </div>
            <h4>Free Shipping</h4>
            <p className='desc'>On order over $49.00</p>
           </div>

           <div className='service-info'>
            <div className='service-icon' onClick={()=>navigate('/footerDetail')}>
                <img src="/img/policy2.png" alt="policy2" />
            </div>
            <h4>Money Guarantee</h4>
            <p className='desc'>Within 30 days for an exchange</p>
           </div>

        <div className='service-info'>
            <div className='service-icon' onClick={()=>navigate('/footerDetail')}>
                <img src="/img/policy3.png" alt="policy3" />
            </div>
            <h4>Online Support</h4>
             <p className='desc'>24 hour a day ,7 days a week</p>
        </div>

        <div className='service-info'>
            <div className='service-icon' onClick={()=>navigate('/footerDetail')}>
                <img src="/img/policy4.png" alt="policy4" />
            </div>
            <h4>Flexible Payment</h4>
            <p className='desc'> Pay with multiple cards</p>
        </div>
        </div>
    </div>
  )
}

export default Footer