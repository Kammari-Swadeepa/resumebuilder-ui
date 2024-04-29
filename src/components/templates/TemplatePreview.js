import React, { useEffect } from 'react'
import Header from '../header/Header';
import demo1 from "../../assests/img/demos/demo-1.png"
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';

function TemplatePreview() {
    const location = useLocation();

    useEffect(()=>{
        window.scroll(0,0)
        // console.log("location",location);
    },[])
  return (
    <>
    <Header/>
    {console.log("location",location)}

    <div class="breadcumb-area clearfix dzsparallaxer auto-init" data-options='{direction: "normal"}'>
        <div class="divimage dzsparallaxer--target"  style={{width:"101%",height:"130%"}}></div>
        <div class="breadcumb-content">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Template Preview</h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Template Preview</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Template Preview</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="blog-area section-padding-100-0">
        <div class="container">

            <div class="row">
                <div class="col-12 col-md-8">
                    <div >
                        <div class="blog_thumbnail">
                            <img src={demo1} class="temp-img" alt=""/>
                        </div>
                    </div>

                </div>

                <div class="col-12 col-md-4">
                    <div class="sidebar-area">
                        <div class="temp-summary">
                            <p className='text-dark'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                            tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                            <a class="btn dream-btn width-100" href="template-edit.html">Try This Template</a>
                        </div>   
                        

                        <div class="subscribe-widget mt-50">
                            <div class="widget-title">
                                <h5>subscribe</h5>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="email" name="email" id="subs_email" placeholder="Your Email"/>
                                    <button type="submit dream-btn" class="btn">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default TemplatePreview