import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Product= () => {
  return (
    <>
    <div> 
        <input placeholder='search items' type='search '/>
    </div>
    <nav>
      <Link to='featured'>Featured</Link>
      <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
