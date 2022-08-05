import React from 'react'
import {Link} from 'react-router-dom'
const Layout = () => {
  return (
    <>
<nav>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/register'>Register</Link>
        </li>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        <li>
            <Link to='/forgotpassword'>Forgot Password</Link>
        </li>
    </ul>
</nav>
    
    
    </>
  )
}

export default Layout