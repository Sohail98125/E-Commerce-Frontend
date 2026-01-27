import axios from 'axios'
import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const { addItem, emptyCart } = useCart();
    const navigate = useNavigate();
    const handleLoginChange = (e) => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', login)
            console.log(response.data)
            toast.success("Login successfull")
            setTimeout(() => {
                const user = response.data.user;
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);
                window.dispatchEvent(new Event("storage"));
                emptyCart();
                const savedCart = localStorage.getItem(`cart_${user.id}`)
                if (savedCart) {
                    const parsedCart = JSON.parse(savedCart)
                    parsedCart.forEach(item => addItem(item))
                }
                navigate("/")
            }, 1500);
        } catch (error) {
            console.error(error.response.data.message)
            alert("Login failed")
        }
    }
    return (
        <div className='login-page'>
            <h2>LOGIN</h2>
            <div className='login-input'>
                <form onSubmit={handleLoginSubmit}>
                    <input name="email" value={login.email} onChange={handleLoginChange} type="email" placeholder='Email'></input>
                    <input name="password" value={login.password} onChange={handleLoginChange} type='password' placeholder='Password'></input>
                    <button type='submit'>Login</button>
                </form>
                <p className="login-register">
                    Don't have an account?
                    <button onClick={() => navigate("/register")}>Register</button>
                </p>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            </div>
        </div>
    )
}
export default Login 
