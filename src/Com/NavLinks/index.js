import React from 'react'
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    id: 0,
    to: '/',
    name: 'Home'
  },
  {
    id: 1,
    to: 'girls',
    name: 'Girls'
  },
  {
    id: 2,
    to: 'roster',
    name: 'Roster'
  },
  {
    id: 3,
    to: 'employment',
    name: 'Employment'
  },
  {
    id: 4,
    to: 'contact',
    name: 'Contact us'
  },
]

const NavLinks = () => {
  return (
    navlinks.map(({id,to,name}) => {
        return (
            <React.Fragment key={id}>
                <NavLink to={to}>{name}</NavLink>
            </React.Fragment>
        )
    })
  )
}

export default NavLinks