import React from 'react'
import useAuth from './../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const {logout}=useAuth();
    const navigate = useNavigate()
    const handleLogout = ()=>{
       logout().then(navigate('/'))
    }
  return (
    <div>
        <h2>THis is a protected route</h2>
        <button onClick={handleLogout} className='bg-red-500 text-white rounded  px-3 py-2'>Logout</button>
    </div>
  )
}

export default Profile