import React from 'react'
import './index.css'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Hero = () => {
    const title = 'Join Niseko VIP now, enjoy instant discount and earn free points.'
    const buttonsLinks = [
        {
            id: 0,
            name: 'Roster ｜ 班表',
            to: 'roster'
        },
        {
            id: 1,
            name: 'All Girls ｜ 全部女生',
            to: 'girls'
        }
    ]
  return (
    <div className='hero-wrapper'>
        <div className='hero-title'>
            <h1>{title}</h1>
        </div>
        <div className='hero-nav'>
            <div className='norm-links-wrapper'>
                {
                    buttonsLinks.map(({id,name,to}) => {
                        return (
                            <React.Fragment key={id}>
                                <Button secondary>
                                    <Link to={to}>{name}</Link>
                                </Button>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Hero