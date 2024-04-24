import React from 'react'
import checkmark from "../assests/img/icons/check.png";
import cv from "../assests/img/core-img/cv.png"


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

            

           

        </>
    )
}

export default ThirdComponent