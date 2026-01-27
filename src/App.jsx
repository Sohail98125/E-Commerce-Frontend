
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
import Shop from './pages/Shop'
import ShopCategories from './pages/ShopCategories'
import LoginSignup from './pages/LoginSignup'
import Login from './pages/Login'
import FooterDetail from './components/footer/FooterDetail'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kids_banner from '/img/banner_kids.png'
import mens_banner from '/img/banner_mens.png'
import women_banner from '/img/banner_women.png'
import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/register' element={<LoginSignup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path="/footerDetail" element={<FooterDetail />} />
          <Route path='/:category' element={<ShopCategories banner={mens_banner} category="men" />}></Route>
          <Route path='/:category' element={<ShopCategories banner={women_banner} category="women" />}></Route>
          <Route path='/:category' element={<ShopCategories banner={kids_banner} category="kids" />}></Route>
          {/* single route that accepts a productId param */}
          <Route path='/product/:_id' element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
