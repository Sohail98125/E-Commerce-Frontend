import React, { useState } from 'react'
import axios from 'axios'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/footer/Footer'
import Loader from '../components/loader/Loader'

const LoginSignup = () => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!register.name || !register.email || !register.password) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, register)
      toast.success("Registration successfull")
      setTimeout(() => {
        navigate("/login")
      }, 1500);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token)
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='login-signup'>
      {/* <div className='loginsignup-container'> */}
      <h2>REGISTER NOW</h2>
       {loading ? (
        <Loader text="Creating your account..." />
      ) : (
      <div className='loginsignup-input'>
        <form onSubmit={handleSubmit}>
          <input name='name' value={register.name} onChange={handleChange} type="text" placeholder='Name' />
          <input name='email' value={register.email} onChange={handleChange} type="email" placeholder='Email' />
          <input name='password' value={register.password} onChange={handleChange} type="password" placeholder='Password' />
           <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
        </form>
      </div>
      )}
      <div className='loginsignup-checkbox'>
        <input type="checkbox" name="" id="" />
        I agree to the privacy policy
      </div>
      <p>By creating an account ,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></p>
      <hr />
      <div className='login-line'>
        Already Registered ? <button onClick={() => navigate("/login")}>Login here</button>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
      {/* <Footer/> */}
    </div>
    // </div> 
  )
}

export default LoginSignup