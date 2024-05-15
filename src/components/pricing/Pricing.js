import React, { useEffect,useState } from 'react'
import Header from '../header/Header'
import PricingComponent from './PricingComponent'
import Features from '../Features'
import Footer from '../footer/Footer'
import banner from "../banner/images/banner-new-2.jpg"
function Pricing() {
    const [pageLoad,setPageLoad]=useState(false)
    useEffect(()=>{
        handlePageLoad()
        window.scroll(0,0)
       
    },[])
    const handlePageLoad =()=>{
        setPageLoad(true)
        setTimeout(() => {
            setPageLoad(false)
        }, 400);
    }
  return (
    <>
    <Header/>
    {pageLoad ?  <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div>:""}

    <div class="breadcumb-area clearfix dzsparallaxer auto-init" data-options='{direction: "normal"}'>
        <div class="divimage dzsparallaxer--target"  style={{width:"101%",height:"130%"}}></div>
        <div class="breadcumb-content">
            <div class=" h-100">
                <div class="row h-100">
                    <div class="col-12" style={{background: `url(${banner}) no-repeat center`}}>
                        {/* <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Our Pricing</h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                            <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item active" aria-current="page">Pricing</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>
    <br/>
    <br/>
    <PricingComponent/>
    <Features/>
    <Footer/>
    </>
  )
}

export default Pricing