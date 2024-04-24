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
                            <h3><a href="#">Easy Online Resume Builder</a></h3>
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
                            
                        </div>
                    </div>
                    <div class="services-block-four">
                        <div class="inner-box">
                            <div class="icon-img-box">
                                <img src={d2} alt=""/>
                            </div>
                            <h3><a href="#">Step by Step Expert Tips</a></h3>
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</div>
                            
                        </div>
                    </div>
                    <div class="services-block-four" style={{marginBottom:"0"}}>
                        <div class="inner-box">
                            <div class="icon-img-box">
                                <img src={d3} alt=""/>
                            </div>
                            <h3><a href="#">Recruiter Approved Phrases</a></h3>
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi.</div>
                            
                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-6">
                    <div class="who-we-contant mt-s">
                        <div class="dream-dots">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h4>Why Choose Our Platform?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
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