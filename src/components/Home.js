import React, { useEffect,useState } from 'react'
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
  const [pageLoad,setPageLoad]=useState(false)
  useEffect(()=>{
    window.scroll(0,0)
    handlePageLoad()
},[])
const handlePageLoad =()=>{
  setPageLoad(true)
  setTimeout(() => {
      setPageLoad(false)
  }, 400);
}
  return (
    <>
        {pageLoad ?  <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div>:""}

      <Header />

      <Banner />

      <SecondComponent />

      <ThirdComponent />

      {/* <CustomTemplate/> */}
      
      {/* <PricingComponent/> */}

      <HomeTemplate />

      <Features />

      <Testimonials />

      <Footer />
    </>
  )
}

export default Home