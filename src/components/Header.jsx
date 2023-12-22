import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
 
  return (
    <>
    <Link to="/" className= 'home' style={{textDecoration:"none", color:"black"}}><img className='kalvium' src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="LOGO" /></Link>
    <Link to="/Registration" className= 'Register' >Registration</Link>

      
    </>
  )
}

export default Header
