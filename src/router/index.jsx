import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/Layout'
import Home from '../pages/Home/Home'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
            </Route>
        </Routes>   
    </>
  )
}

export default Router