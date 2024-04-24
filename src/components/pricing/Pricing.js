import React, { useEffect } from 'react'
import Header from '../header/Header'
import PricingComponent from './PricingComponent'
import Features from '../Features'
import Footer from '../footer/Footer'

function Pricing() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <>
    <Header/>


    <div class="breadcumb-area clearfix dzsparallaxer auto-init" data-options='{direction: "normal"}'>
        <div class="divimage dzsparallaxer--target"  style={{width:"101%",height:"130%"}}></div>
        <div class="breadcumb-content">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Our Pricing</h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                            <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item active" aria-current="page">Pricing</li>
                            </ol>
                        </nav>
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