import React from 'react'
import './index.css'

const NavBar = ({logo, links, mobile}) => {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-logo-wrapper'>
            {logo}
        </div>
        <div className='navbar-links-wrapper'>
            {links}
        </div>
        <div className='navbar-mobile-wrapper'>
            {mobile}
        </div>
    </div>
  )
}

export default NavBar