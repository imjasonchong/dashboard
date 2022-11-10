import React from 'react'
import Segment from '../../Com/Segment'
import ItemCard from '../../Layout/ItemCard/index'
import { girls as girlsData } from '../../Data/girls'
import './index.css'

const Girls = () => {
  return (
    <div className='girls-wrapper'>
        {
            girlsData.map((item) => {
                return (
                    <Segment>
                        <ItemCard
                            data={item}
                        />
                    </Segment>
                )
            })
        }
    </div>
  )
}

export default Girls