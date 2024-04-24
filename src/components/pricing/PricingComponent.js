import React from 'react'

function PricingComponent() {
  return (
    <>
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

export default PricingComponent