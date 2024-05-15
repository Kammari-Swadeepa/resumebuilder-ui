import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import banner from "../banner/images/banner-new-5.jpg"
function Privacy() {
    const [pageLoad,setPageLoad]=useState(false)
    useEffect(()=>{
        handlePageLoad()
        window.scroll(0,0)
    },[])
    const handlePageLoad =()=>{
        setPageLoad(true)
        setTimeout(() => {
            setPageLoad(false)
        }, 400);
    }
  return (
    <>
       {pageLoad ?  <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div>:""}
    <Header/>
    <div class="breadcumb-area clearfix">
        
        <div class="breadcumb-content">
            <div class=" h-100">
                <div class="row h-100 ">
                    <div class="col-12" style={{background: `url(${banner}) no-repeat center`}} >
                        {/* <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Privacy Policy</h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                            <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
<h2 className='mt-1'>Privacy Policy Statement</h2>
<p className='text-dark'>Welcome to Visualpath CV Builder. This Privacy Policy Statement outlines how we collect, use, and share information about our users through various online interfaces. We encourage you to carefully read this notice to understand the terms and conditions governing your use of our CV building platform.
</p>
<h5 className='mt-1' style={{textDecoration:"underline"}}>How We Use Your Information</h5>
<p className='text-dark'>At Visualpath CV Builder, we collect and store individual, anonymous, or aggregated information about users who visit our site or use our CV building services. We utilize this information for various purposes including :-
</p>
<ul>
    <li><span style={{display:"inline-block",wodth:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",marginRight:"5px"}}></span>Enhancing the efficiency and content of our CV building platform.</li>
    <li><span style={{display:"inline-block",wodth:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",marginRight:"5px"}}></span>Analyzing trends and improving performance.</li>
    <li><span style={{display:"inline-block",wodth:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",marginRight:"5px"}}></span>Processing specific requests for CV creation or editing.</li>
    <li><span style={{display:"inline-block",wodth:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",marginRight:"5px"}}></span>Improving our marketing efforts and gathering broad demographic information.</li>
    <li><span style={{display:"inline-block",wodth:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",marginRight:"5px"}}></span>Enhancing client services and conducting email marketing campaigns if applicable.
Consent
</li>
</ul>
<div className='mt-2'>By using our CV building platform and providing any personally identifiable information, you consent to this Privacy Policy Statement. Visualpath CV Builder reserves the right to update and change its Privacy Policy at its sole discretion without prior notice. We may ask for your personal information for marketing, promotion of our services, feedback, or other purposes, either by directly seeking your consent or providing you with an opportunity to opt out.
</div>
<h5 className='mt-3' style={{textDecoration:"underline"}}>Security</h5>
<div>Users are advised to carefully consider whether to submit sensitive information that they would not want to make public. The use of Visualpath CV Builder’s platform is solely at the user's own risk. For more information, please refer to our Terms and Conditions.
</div>
<h5 className='mt-3' style={{textDecoration:"underline"}}>Information Collection, Use, and Sharing
</h5>
<div>Visualpath CV Builder is the sole owner of the information collected on this platform. We only have access to and collect information that users voluntarily provide via our CV building interface. We do not sell or rent this information to anyone. Information shared with us is used to create or edit CVs and respond to inquiries. We may contact you in the future to inform you about our services or changes to this privacy policy, unless specified otherwise.
</div>
<h5 className='mt-3' style={{textDecoration:"underline"}}>Access and Control of Your Information
</h5>
<p className='text-dark'>Users can opt out of future contacts, access, correct, or delete their data by contacting us via email or phone. You have the freedom to express any concerns about our use of your data.
</p>
<h5 className='mt-3' style={{textDecoration:"underline"}}>Security Measures
</h5>
<p className='text-dark'>We employ various security measures to protect your privacy. Sensitive information is encrypted during transmission and stored securely. Access to personally identifiable information is restricted to authorized personnel only.
</p>
<h5 className='mt-3' style={{textDecoration:"underline"}}>Changes to Our Privacy Policy
</h5>
<p className='text-dark'>Any changes to our privacy policy will be posted on our website and other appropriate locations to keep users informed. Users are encouraged to contact us if they believe we are not abiding by this privacy policy.
</p>
<p className='text-dark'> <b>If you have any questions or concerns about our Privacy Policy, please contact us at [contact@visualpathcvbuilder.com].</b></p>

        </div>
    <Footer/>
    </>
  )
}

export default Privacy