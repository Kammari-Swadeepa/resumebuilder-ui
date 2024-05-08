import React from 'react';
import d1 from "../assests/img/icons/d1.png"
import d2 from "../assests/img/icons/d2.png"
import d3 from "../assests/img/icons/d3.png"
import { Link } from 'react-router-dom';

function SecondComponent() {
  return (
    <>
      <section class="demo-video feat section-padding-100 bub-left">
        <div class="container">
            
            <div class="row align-items-center">
                
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="services-block-four">
                        <div class="inner-box">
                            <div class="icon-img-box">
                                <img src={d1} alt=""/>
                            </div>
                            <h3><a href="#"> Tailored Templates:</a></h3>
                            <div class="text">Access a diverse array of professionally designed
 templates crafted to suit various industries and career levels, ensuring your
 resume reflects your unique style and expertise.</div>
                            
                        </div>
                    </div>
                    <div class="services-block-four">
                        <div class="inner-box">
                            <div class="icon-img-box">
                                <img src={d2} alt=""/>
                            </div>
                            <h3><a href="#">Intuitive Interface: </a></h3>
                            <div class="text">Enjoy a seamless user experience with our
 easy-to-navigate platform, guiding you effortlessly through the resume
 building process from start to finish.</div>
                            
                        </div>
                    </div>
                    <div class="services-block-four" style={{marginBottom:"0"}}>
                        <div class="inner-box">
                            <div class="icon-img-box">
                                <img src={d3} alt=""/>
                            </div>
                            <h3><a href="#">Time Efficiency:</a></h3>
                            <div class="text">Save valuable time with our streamlined solutions,
 enabling you to create a polished, job-ready resume in minutes, leaving
 behind the hassle of traditional resume writing.</div>
                            
                        </div>
                    </div>
                  
                </div>
                <div class="col-12 col-lg-6">
                    <div class="who-we-contant mt-s">
                        <div class="dream-dots">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h4>Why Choose Our Platform?</h4>
                        <p> Choosing our platform for resume building ensures a seamless and effective
 process from start to finish. Our platform offers a comprehensive selection of
 professionally designed templates tailored to various industries and career
 stages, ensuring your resume reflects your unique style and expertise. With
 an intuitive interface, even those new to resume writing will find the
 experience effortless, guiding you through each step with ease. </p>
                        <p> Choose our platform and unlock the tools and support you need to make
 your resume shine in today's competitive job market.</p>
                        {/* <a class="btn dream-btn mt-30" href="templates.html">lets build your cv</a> */}
                        <Link class="btn dream-btn mt-30" to={'/templates'}>lets build your cv</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SecondComponent