import React from 'react'
import testimg1 from "../../assests/img/test-img/1.jpg"
import testimg2 from "../../assests/img/test-img/2.jpg"
import testimg3 from "../../assests/img/test-img/3.jpg"
import "../../assests/css/style.css";
import "../../assests/css/responsive.css"
function Testimonials() {
  return (
    <>
      <section class="clients_testimonials_area section-padding-0-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center">
                        <div class="dream-dots justify-content-center">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h2>Your Success, Our Inspiration</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cotainer-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-xs-10 offset-xs-1">
                    <div class="client_slides owl-carousel">

                        <div class="single-testimonial text-center">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={testimg1} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.</p>
                                </div>

                                <div class="admin_text">
                                    <h5>Sunny Khan</h5>
                                    <p>One of our Clients</p>
                                </div>
                            </div>
                        </div>

                        <div class="single-testimonial text-center">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={testimg2} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.</p>
                                </div>

                                <div class="admin_text">
                                    <h5>Ajoy Das</h5>
                                    <p>One of our Clients</p>
                                </div>
                            </div>
                        </div>

                        <div class="single-testimonial text-center">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={testimg3} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.</p>
                                </div>
                                <div class="admin_text">
                                    <h5>Jebin Khan</h5>
                                    <p>One of our Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Testimonials