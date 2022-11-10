import React from 'react'
import './index.css'
const ItemCardLayout = ({data}) => {
  return (
    <div className='itemcardlayout-wrapper'>
        <div className='itemcard-img'>
            <img src={data.profileURL}></img>
        </div>
        <div className='itemcard-content'>
            <div className='itemcard-name'>
                <span className='card-name pink'>{data.name}</span>
                <span className='card-name'>{data.location}</span>
                <span className='card-name'>{data.age} yo</span>
                <span className='card-name'>{data.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ItemCardLayout