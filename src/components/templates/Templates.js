import React, { useEffect } from 'react'
import Header from '../header/Header'
import HomeTemplate from '../hometemplates/HomeTemplate'
import demo1 from "../../assests/img/demos/demo-1.png"
import demo2 from "../../assests/img/demos/demo-2.png"
import demo3 from "../../assests/img/demos/demo-3.png"
import Features from '../Features'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

function Templates() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>

            <Header />

            <div class="breadcumb-area clearfix">
                <div class="breadcumb-content">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12">
                                <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                                    <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Our Templates</h2>
                                    <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                        <li class="breadcrumb-item">Home</li>
                                        <li class="breadcrumb-item active" aria-current="page">Our Templates</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="demo section-padding-100-0">
                <div class="container">
                    <div class="section-heading text-center">
                        <div class="dream-dots justify-content-center">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h2 class="bold">Our Creative Templates</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div class="row">

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo1} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/edittemplate"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo2} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/edittemplate"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo3} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/edittemplate"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Features />

            <Footer />


        </>
    )
}

export default Templates