import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/Layout'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Cart from '../pages/Cart/Cart'
import ChackOut from '../pages/CheckOut/CheckOut'

const PagesRouter = () => {
  return (
    <>
      <Routes>
        <Router>
          <Route path='/' exact element={<Layout />}>
            <Route path='/' exact  element={<Home />} />
            <Route path='/detail/:id' exact  element={<Detail />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/checkout" exact element={<ChackOut />} />
          </Route>
        </Router>
      </Routes>
    </>
  )
}

export default PagesRouter