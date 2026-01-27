import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero2.css'
import { Link, useNavigate } from 'react-router-dom';


const Hero2= () => {
    const settings = {
    dots: true,         
    infinite:true,      
    speed: 400,       
    slidesToShow: 1,    
    slidesToScroll: 1,  
    // autoplay: true,      
    autoplaySpeed: 1500,
}
const navigate = useNavigate();

  return (
    <div className='heroine'>
      <div className='hero'>
        <Slider {...settings}>
            <div className='hero2'>
              <h2>ALL NEW ARRIVALS</h2>
              <div id='new2'>
              <p>NEW</p>
              <p>COLLECTIONS</p>
              <p>FOR EVERYONE</p>
              </div>
             <div className= "hero2-explore" onClick={() => navigate("/women")}>EXPLORE MORE</div> 
                
            </div>
            <div className='hero1'>
              <h2>ALL NEW ARRIVALS</h2>
              <div id='new1'>
               <p>NEW</p>
              <p>COLLECTIONS</p>
              <p>FOR EVERYONE</p>
              </div>
             <div className= "hero1-explore" onClick={() => navigate("/women")}>EXPLORE MORE</div>    
            </div>
            <div className='hero3'>
              <h2>ALL NEW ARRIVALS</h2>
              <div id='new3'>     
               <p>NEW</p>
              <p>COLLECTIONS</p>
              <p>FOR EVERYONE</p>
              </div>
             <div className= "hero3-explore" onClick={() => navigate("/women")}>EXPLORE MORE</div> 
            </div>
            <div className='hero4'>
              <h2>ALL NEW ARRIVALS</h2>
              <div id='new4'>     
               <p>NEW</p>
              <p>COLLECTIONS</p>
              <p>FOR EVERYONE</p>
              </div>
                 <div className= "hero4-explore" onClick={() => navigate("/women")}>EXPLORE MORE</div> 
            </div>
        </Slider>
      </div>
    </div>
  )
}
export default Hero2