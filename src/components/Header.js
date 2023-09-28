import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
function Header() {

    
    return (
        <div className='bg-white p-6 text-slate-600 flex items-center justify-between' >
            <h1 className='text-2xl font-bold'>
             <Link to='/'>Imran Ali</Link>   
                </h1>

            <nav className='flex gap-6'>
                <NavLink className={({isActive})=> isActive ? "text-red-500":""} to='/'> Home</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500":""}to='about'>About</NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
            </nav>
        </div>
    )
}

export default Header