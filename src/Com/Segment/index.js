import React from 'react'
import './index.css'

const Segment = ({children}) => {
  return (
    <div className='segment-wrapper'>
        {children}
    </div>
  )
}

export default Segment