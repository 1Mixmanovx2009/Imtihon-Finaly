import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/Layout'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Cart from '../pages/Cart/Cart'
import ChackOut from '../pages/CheckOut/CheckOut'

const PagesRouter = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<ChackOut />} />
          </Route>
      </Routes>
    </>
  )
}

export default PagesRouter