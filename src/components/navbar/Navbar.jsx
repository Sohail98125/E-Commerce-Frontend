import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import { useCart } from 'react-use-cart'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  const { totalItems, emptyCart } = useCart();
  const handleLogout = () => {
    localStorage.removeItem("user");
    emptyCart();
    alert("Logged Out ")
    setUser(null);
    navigate("/login")
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (!savedUser) emptyCart()
      setUser(savedUser);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SOHAIL</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}> <Link style={{ textDecoration: "none" }} to='/'>Home</Link>{menu === "home" ? <hr /> : ""}</li>
        <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: "none" }} to='/men'>Men</Link> {menu === "mens" ? <hr /> : ""}</li>
        <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : ""}</li>
        <li onClick={() => setMenu("women")}><Link style={{ textDecoration: "none" }} to='/women'>Women</Link>{menu === "women" ? <hr /> : ""}</li>
      </ul>
      <div className='nav-login-cart'>
        {user ? (
        <div className="nav-user">
            <button onClick={handleLogout}>Logout</button>
            </div>

          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}


        <Link to='/cart'><img src={cart} alt="Cart" /></Link>
        <div className="nav-cart-count">{totalItems}</div>
      </div>
    </div>
  )
}

export default Navbar