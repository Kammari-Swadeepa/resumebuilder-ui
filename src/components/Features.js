import React from 'react'
import f1 from "../assests/img/icons/f1.png"
import f2 from "../assests/img/icons/f2.png"
import f3 from "../assests/img/icons/f3.png"
import f4 from "../assests/img/icons/f4.png"
import f5 from "../assests/img/icons/f5.png"
import f6 from "../assests/img/icons/f6.png"



function Features() {
  return (
    <>
     <section class="our_services_area section-padding-100-70" id="services">
        <div class="container">
            
            <div class="section-heading text-center">
                <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our Main Features</h2>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
                

            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="service_icon">
                            <img src={f1} alt=""/>
                        </div>
                        <h6>Proven CV Templates to increase Hiring Chance</h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="service_single_content text-center mb-100 wow wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service_icon">
                            <img src={f2} alt=""/>
                        </div>
                        <h6>Creative, Modern and Clean Templates Design</h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="service_icon">
                            <img src={f3} alt=""/>
                        </div>
                        <h6>Easy and Intuitive Online CV and Resume Builder </h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service_icon">
                            <img src={f4} alt=""/>
                        </div>
                        <h6>Free to use. Developed by hiring professionals.</h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="service_icon">
                            <img src={f5} alt=""/>
                        </div>
                        <h6>Recruiter Approved Phrases with Module Notification</h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service_icon">
                            <img src={f6} alt=""/>
                        </div>
                        <h6>Fast Easy CV and Resume Formatting</h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features