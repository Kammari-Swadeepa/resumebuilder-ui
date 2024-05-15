import React, { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Format1 from '../preview-templates/Format1';
import Format2 from '../preview-templates/Format2';
import Format3 from '../preview-templates/Format3';
import Format4 from '../preview-templates/Format4';
import Format5 from '../preview-templates/Format5';
import Format6 from '../preview-templates/Format6';
import banner from "../banner/images/banner-new-5.jpg"
import { toast } from 'react-toastify'
function TemplatePreview() {
    const location = useLocation();
    const [pageLoad,setPageLoad]=useState(false)
        
    useEffect(()=>{
        handlePageLoad()
        window.scroll(0,0)
        console.log("location",location);
    },[])
    const handlePageLoad =()=>{
        setPageLoad(true)
        setTimeout(() => {
            setPageLoad(false)
        }, 400);
    }
const renderTemplate=()=>{
    if(location.state.resumetype=="1"){
        return <Format1 />
    }else if(location.state.resumetype=="2"){
        return <Format2 />
    }else if(location.state.resumetype=="3"){
        return <Format3 />
    }else if(location.state.resumetype=="4"){
        return <Format5 />
    }
}

const navigate = useNavigate()

const handleTabBox = (ele) => {
    var tntId = JSON.parse(localStorage.getItem('tID'))

    const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
    if (userdata != null) {
    navigate('/tabbox', { state: ele });
    }else{
        toast.error("Please Login to Proceed", {
            position: "top-right",
            autoClose: 5000

        })
    }
};
  return (
    <>
        {pageLoad ?  <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div>:""}
    <Header/>
   

    <div class="breadcumb-area clearfix dzsparallaxer auto-init" data-options='{direction: "normal"}'>
        <div class="divimage dzsparallaxer--target"  style={{width:"101%",height:"130%"}}></div>
        <div class="breadcumb-content">
            <div class=" h-100">
                <div class="row h-100 ">
                    <div class="col-12" style={{background: `url(${banner}) no-repeat center`}} >
                        {/* <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Template Preview</h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Template Preview</li>
                                <li class="breadcrumb-item active" aria-current="page">Template Preview</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="blog-area section-padding-100-0">
        <div class="container">

            <div class="row">
                <div class="col-12 col-md-8">
                    <div >
                        <div  >
                            <img src={location?.state?.image} class="temp-img" alt=""/>
                            {/* {renderTemplate()} */}
                        </div>
                    </div>

                </div>

                <div class="col-12 col-md-4">
                    <div class="sidebar-area">
                        <div class="temp-summary">
                            <p className='text-dark'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                            tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                            <button class="btn dream-btn width-100" onClick={()=>handleTabBox(location?.state?.resumetype)}>Try This Template</button>
                        </div>   
                        

                        {/* <div class="subscribe-widget mt-50">
                            <div class="widget-title">
                                <h5>subscribe</h5>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="email" name="email" id="subs_email" placeholder="Your Email"/>
                                    <button type="submit dream-btn" class="btn">subscribe</button>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default TemplatePreview