import React from 'react'
import './index.css'

const MainLayout= ({header, body, footer}) => {
  return (
    <div className='mainlayout-wrapper'>
        <div className='nav-container'>
            {header}
        </div>
        <div className='content-container'>
            {body}
        </div>
        <div className='footer-container'>
            {footer}
        </div>
    </div>
  )
}

export default MainLayout