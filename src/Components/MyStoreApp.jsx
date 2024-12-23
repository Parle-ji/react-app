import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StoreHome from '../pages/StoreHome'
import StoreCart from '../pages/StoreCart'
import { NavLink } from 'react-router-dom'
import CartNavbar from './CartNavbar'
const MyStoreApp = () => {
  return (
    <div className="w-11/12   mx-auto  min-h-screen select-none relative">
        <div>
          <CartNavbar/>
        </div>
        <Routes>
            <Route path='/' element={<StoreHome/>}/>
            <Route path='/cart' element={<StoreCart/>}/>
        </Routes>
    </div>
  )
}

export default MyStoreApp