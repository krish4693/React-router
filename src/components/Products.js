import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Product= () => {
  return (
    <>
    <div> 
        <input placeholder='search items' type='search '/>
    </div>
    <nav>
      <NavLink to='featured'>Featured</NavLink>
      <NavLink to='new'>New</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}
