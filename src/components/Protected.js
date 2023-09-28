import React from 'react'
import useAuth from './../hooks/useAuth'

function Protected({children}) {
    const {authed} =useAuth()
  return (

    <div className='border border-blue-600'>

        { authed ? children: <p>Not logged in </p>}
        </div>
  )
}

export default Protected