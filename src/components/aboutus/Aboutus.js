import React, { useEffect,useState } from 'react'
import Header from '../header/Header'
import bg2 from "../../assests/img/bg-img/ring-bg.png"
import ThirdComponent from '../ThirdComponent'
import Footer from '../footer/Footer'
import SecondComponent from '../SecondComponent'
import CustomTemplate from '../customtemplate/CustomTemplate'
import banner from "../banner/images/banner-new-1.jpg"
function Aboutus() {
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
    <Header/>

    <div class="breadcumb-area clearfix dzsparallaxer auto-init" data-options='{direction: "normal"}'>
        <div class="divimage dzsparallaxer--target" 
        style={{width:"101%",height:"130%"}}
       ></div>
        <div class="breadcumb-content">
            <div class="h-100">
                <div class="row h-100 ">
                    <div class="col-12" style={{background: `url(${banner}) no-repeat center`}} >
                        {/* <img src={banner} width="1603px" height="600px" /> */}
                        {/* <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">About us</h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item active" aria-current="page">About us</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ThirdComponent/>
    <SecondComponent/>
    <CustomTemplate/>

    <Footer/>



    </>
  )
}

export default Aboutus