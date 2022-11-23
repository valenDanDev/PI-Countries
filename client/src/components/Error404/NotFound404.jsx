import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navigation/Navbar'

function NotFound404() {
  return (
    <div>
        <Navbar/>
        <div >
            <h1 >404</h1>
            <h2>Page not found</h2>
            <p>The page you are looking for does not exist</p>
            <p>Go back to</p>
            <Link to="/home">
                <button >Home</button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound404