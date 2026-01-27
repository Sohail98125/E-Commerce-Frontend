import React from 'react'
import './Shop.css'
import Hero2 from '../components/hero2/Hero2'
import Popular from '../components/popular/Popular'
import Popularmen from '../components/popular/Popularmen'
import Footer from '../components/footer/Footer'
import SearchPage from '../components/SearchProduct/SearchPage'
import PopularKid from '../components/popular/PopularKid'

const Shop = () => {
  return (
    <div>
      <SearchPage/>
      <Hero2/>
      <Popular/>
      <Popularmen/>
      <PopularKid/>
      <Footer/>
    </div>
  )
}

export default Shop