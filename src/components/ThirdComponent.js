import React from 'react'
import checkmark from "../assests/img/icons/check.png";
import cv from "../assests/img/core-img/cv.png"
import customimg from "../assests/img/core-img/custom.png"

function ThirdComponent() {
    return (
        <>

            <section class="about-us-area section-padding-100 clearfix">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-12 col-lg-6">
                            <div class="who-we-contant">
                                <div class="dream-dots">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h4 class="bold">We Deliver The Best</h4>
                                <div class="list-wrap align-items-center">
                                    <div class="row">

                                        <div class="col-md-12">
                                            <div class="side-feature-list-item">
                                                <img src={checkmark} class="check-mark-icon" alt="" />
                                                <div class="foot-c-info">Proven CV Templates to increase Hiring Chance</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="side-feature-list-item">
                                                <img src={checkmark} class="check-mark-icon" alt="" />
                                                <div class="foot-c-info">Creative and Clean Templates Design</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="side-feature-list-item">
                                                <img src={checkmark} class="check-mark-icon" alt="" />
                                                <div class="foot-c-info">Easy and Intuitive Online CV Builder</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="side-feature-list-item">
                                                <img src={checkmark} class="check-mark-icon" alt="" />
                                                <div class="foot-c-info">Free to use. Developed by hiring professionals.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="side-feature-list-item">
                                                <img src={checkmark} class="check-mark-icon" alt="" />
                                                <div class="foot-c-info">Fast Easy CV and Resume Formatting</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="side-feature-list-item">
                                                <img src={checkmark} class="check-mark-icon" alt="" />
                                                <div class="foot-c-info">Recruiter Approved Phrases.</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-6">
                            <div class="welcome-meter wow fadeInUp mt-s" data-wow-delay="0.3s">
                                <img src={cv} class="center-block" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="clearfix"></div>

            <section class="container section-padding-0-100">
                <div class="subscribe">
                    <div class="row align-items-center relative">
                        <img src={customimg} alt="" class="custom" />
                        <div class="col-lg-5 col-lg-offset-3 col-md-9 col-xs-12">
                            <h2 class="bold mb-0">Do you Need a Complete Custom CV Template?</h2>
                        </div>
                        <div class="col-lg-3 col-lg-offset-1 col-md-3 col-sm-12 text-center">
                            <a href="contact-us.html" class="button mt-s">Send a Request</a>
                        </div>

                    </div>
                </div>
            </section>

            <section class="pricing section-padding-0-70">
        
        <div class="container">
            
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="who-we-contant mt-s">
                        <div class="dream-dots">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h4>Our Pricing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>

                        <div class="free-7">
                            <span>Lets Build CV</span>
                            <p> with 7days of Free Trial</p>
                        </div>
                        <div class="terms mt-30">
                            <a href="#">Terms & Conditions </a>
                            <p>subject to change with perior notice</p>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_price_table_content wow fadeInUp" data-wow-delay="0.2s">
                        <div class="price_table_text">
                            <h1>$9.99</h1>
                            <h5 class="gradient-text cyan">/ month</h5>
                        </div>
                        <div class="table_text_details">
                            <h3>Monthly Pack</h3>
                            <p>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>

                            <a href="contact-us.html" class="button mt-s">Get Started</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_price_table_content wow fadeInUp" data-wow-delay="0.3s">
                        <div class="price_table_text">
                            <h1>$7.99</h1>
                            <h5 class="gradient-text cyan">/ month</h5>
                        </div>
                        <div class="table_text_details">
                            <h3>Yearly Pack <span> save 20%</span></h3>
                            <p>You will be billed per Year, and get unlimited access to all resume Templates and new added ones</p>

                            <a href="contact-us.html" class="button mt-s">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

        </>
    )
}

export default ThirdComponent