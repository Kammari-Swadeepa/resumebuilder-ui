import React from 'react'

import banner1 from "../images/IMG-2.jpg"
import dollarimg from "../../assests/img/svg/img-dollar.svg"
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <>
            <section class="welcome_area demo2 flex align-items-center">

                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-lg-6 col-md-12">
                            <div class="welcome-content v2">
                                <div class="promo-section">
                                    <div class="integration-link light">
                                        <span class="integration-icon">
                                            {/* <img src={dollarimg} width="24" height="24" alt="" /> */}
                                        </span>
                                        <span class="integration-text">Discover The Easiest ways to Build Your CV!</span>
                                    </div>
                                </div>
                                <h1 class="wow fadeInUp" data-wow-delay="0.2s">Online CV Builder With Creative Templates.</h1>
                                <p class="wow fadeInUp" data-wow-delay="0.3s">Crafting your resume has never been easier with our intuitive Resume 
Builder. Choose from a range of templates and follow simple prompts to create a polished resume ready for the job market.
</p>
                                <div class="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                                    <Link to="/templates" class="btn dream-btn green-btn mr-3">Choose Template</Link>
                                    <Link to="/contact" class="btn dream-btn green-btn"> contact us</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-md-12">
                            <div class="banner-box ">
                                <img src={banner1} className='mt-3' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div class="clearfix"></div>
        </>
    )
}

export default Banner