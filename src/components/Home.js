import React, { useEffect } from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import HomeTemplate from './hometemplates/HomeTemplate'
import Features from './Features'
import Testimonials from './testimonials/Testimonials'
import Footer from './footer/Footer'
import PricingComponent from './pricing/PricingComponent'
import CustomTemplate from './customtemplate/CustomTemplate'

function Home() {
  useEffect(()=>{
    window.scroll(0,0)
},[])
  return (
    <>

      <Header />

      <Banner />

      <SecondComponent />

      <ThirdComponent />

      <CustomTemplate/>
      
      <PricingComponent/>

      <HomeTemplate />

      <Features />

      <Testimonials />

      <Footer />
    </>
  )
}

export default Home