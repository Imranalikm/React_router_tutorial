import React from 'react'
import useAuth from './../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
function Login() {
    const {login} =useAuth();
    const navigate=useNavigate();
    const handleLogin =()=>{
        login().then(navigate('/profile'));
    }
  return (
    <div>
        <h2>login Page</h2>
        <button className='bg-teal-500 text-white rounded px-3 py-2 'onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login