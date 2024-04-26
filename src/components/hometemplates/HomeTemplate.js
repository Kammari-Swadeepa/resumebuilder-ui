import React from 'react'
import demo1 from "../../assests/img/demos/demo-1.png"
import demo2 from "../../assests/img/demos/demo-2.png"
import demo3 from "../../assests/img/demos/demo-3.png"
import { Link } from 'react-router-dom'

function HomeTemplate() {
    return (
        <>
            <section class="demo section-padding-100 ring-bg">
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
                                    {/* <a href="template-preview.html" class="preview-demo">See template <i class="fa fa-long-arrow-right"></i></a> */}
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                    {/* <a href="template-edit.html" class="preview-demo v2">Use template <i class="fa fa-long-arrow-right"></i></a> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo2} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo3} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTemplate