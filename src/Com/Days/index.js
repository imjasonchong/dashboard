import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link }from 'react-router-dom'
import './index.css'

const ShowDays = () => {
    const days = [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ]
  return (
    <React.Fragment>
        {
            days.map((x) => {
                return (
                    <Button secondary className='blacks' content={x}/>
                )
            })
        }
    </React.Fragment>
  )
}

export default ShowDays