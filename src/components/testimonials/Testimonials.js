import React from 'react'
import testimg1 from "../../assests/img/test-img/1.jpg"
import testimg2 from "../../assests/img/test-img/2.jpg"
import testimg3 from "../../assests/img/test-img/3.jpg"
import male1 from "../../components/banner/images/male-1.png"
import male2 from "../../components/banner/images/male-2.png"
import male3 from "../../components/banner/images/male-3.png"
import female1 from "../../components/banner/images/female-1.png"
import female2 from "../../components/banner/images/female-2.png"
import female3 from "../../components/banner/images/female-3.png"
import "../../assests/css/style.css";
import "../../assests/css/responsive.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
                        <p>Real stories, real success: Hear from our satisfied users and discover how our platform transforms careers. Unlock inspiration and insights from those who've found their dream jobs with us. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cotainer-fluid ">
           
                    
                    <Slider {...settings} class="client_slides row ">
                        <div class="single-testimonial text-center   col-lg-11 col-md-11 col-sm-12 ">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right" ></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={male1} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p style={{height:"150px"}}>I needed a resume that showcased my skills effectively. This platform's flexibility and guidance helped me craft a compelling resume that impressed potential employers. I highly recommend it.</p>
                                </div>

                                <div class="admin_text">
                                    <h5>Rakesh Varma</h5>
                                </div>
                            </div>
                        </div>

                        <div class="single-testimonial text-center  col-lg-11 col-md-11 col-sm-12">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={male2} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p style={{height:"150px"}}>I can't thank this resume builder enough for simplifying the job application process. The templates are not only visually appealing but also strategically designed to highlight my strengths.</p>
                                </div>

                                <div class="admin_text">
                                    <h5>Ajay kumar</h5>
                                </div>
                            </div>
                        </div>

                        <div class="single-testimonial text-center    col-lg-11 col-md-11 col-sm-12 ">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={male3} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p style={{height:"150px"}}>This resume builder transformed my job search. With its sleek templates and user-friendly interface, I crafted a standout resume that landed me interviews within days. It's a must-have tool for anyone serious about their career advancement.</p>
                                </div>
                                <div class="admin_text">
                                    <h5>Bhanu kiran</h5>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial text-center    col-lg-11 col-md-11 col-sm-12 ">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={female1} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p style={{height:"150px"}}>I was amazed by the ease of use and variety of templates offered by this resume builder. It helped me create a polished and professional resume in no time, which undoubtedly played a key role in landing me my dream job!</p>
                                </div>
                                <div class="admin_text">
                                    <h5>Madhuri</h5>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial text-center    col-lg-11 col-md-11 col-sm-12 ">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={female2} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p style={{height:"150px"}}>At first, I was hesitant about using a resume builder, but trying this one changed everything. The endless customization options allowed me to tailor my resume to highlight my unique skills and experiences.</p>
                                </div>
                                <div class="admin_text">
                                    <h5>Swapna</h5>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial text-center    col-lg-11 col-md-11 col-sm-12 ">
                            <div class="icon_wrapper">
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="testimonial_image">
                                <img src={female3} alt=""/>
                            </div>
                            <div class="testimonial-description">
                                <div class="testimonial_text">
                                    <p style={{height:"150px"}}>As a recent graduate entering the job market,This resume builder made the process stress-free with its easy-to-follow format and comprehensive templates. Thanks to this platform, I landed my first job out of college within weeks.</p>
                                </div>
                                <div class="admin_text">
                                    <h5>Priyanka</h5>
                                </div>
                            </div>
                        </div>
                        </Slider>
             
        </div>
    </section>
   
    </>
  )
}

export default Testimonials