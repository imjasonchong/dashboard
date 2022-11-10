import React, { Children } from 'react'
import Days from '../../Com/Days/index.js'
import TableExampleCelledStriped from '../../Com/Table/index.js'
import { Outlet } from 'react-router-dom'
import './index.css'

const Roster = () => {
  return (
    <div className='roster-wrapper'>
      <div className='roster-sidebar'>
        <Days/>
      </div>
      <div className='roster-content'>
          <TableExampleCelledStriped/>
      </div>
    </div>
  )
}

export default Roster