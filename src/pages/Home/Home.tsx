import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import ProductListArrive from '../../components/ProductListArrivals/ProductListArrivals'
import ProductListSelling from '../../components/ProductListSelling/ProductListSelling'
import Dress from '../../components/Dress/Dress'
import Commits from '../../components/Commits/Commits'

function Home() {
  return (
    <div>
        <Hero/>
        <ProductListArrive/>
        <ProductListSelling/>
        <Dress/>
        <Commits/>
    </div>
  )
}

export default Home