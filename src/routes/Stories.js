import React from 'react'
import {Outlet} from "react-router-dom"

function Stories() {
  return (
    <div>
        <h1>
            
             <Outlet />
        </h1>
    </div>
  )
}

export default Stories