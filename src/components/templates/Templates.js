import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import HomeTemplate from '../hometemplates/HomeTemplate'
import demo1 from "../../assests/img/demos/demo-1.png"
import demo2 from "../../assests/img/demos/demo-2.png"
import demo3 from "../../assests/img/demos/demo-3.png"
import Features from '../Features'
import Footer from '../footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { PostApi } from '../../services/commonServices'
import { toast } from 'react-toastify'
import banner from "../banner/images/banner-new-3.jpg"
function Templates() {
    const [pageLoad,setPageLoad]=useState(false)
    useEffect(() => {
        window.scroll(0, 0)
        handlePageLoad()
    }, [])

    const [resumeFormatData, setResumeFormatData] = useState([])
    useEffect(() => {
        getResumeDataFunc()
    }, [])
    const getResumeDataFunc = async () => {
        const reqPrams = {
            pageno: '-1',
            query: { status: 'Active' }
        }
        const reqRespnse = await PostApi(reqPrams, 'RESUMEFORMAT');

        setResumeFormatData(reqRespnse?.data)

    }

    const navigate = useNavigate()

    const SeeTemplate = (ele) => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
        if (userdata != null) {
            
        navigate('/templatepreview', { state: ele });
        } else {
            toast.error("Please Login to Proceed", {
                position: "top-right",
                autoClose: 5000

            })
        }
    };

    const EditTemplate = (ele) => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
        if (userdata != null) {
        navigate('/tabbox',{ state: ele.resumetype })
        } else {
            toast.error("Please Login to Proceed", {
                position: "top-right",
                autoClose: 5000

            })
        }

    }
    const handlePageLoad =()=>{
        setPageLoad(true)
        setTimeout(() => {
            setPageLoad(false)
        }, 400);
    }

    const createResume = async (resumeType) => {
        let action = '';
        if (resumeType == 5) {
            action = 'GENERATERESUME';
        } else if (resumeType == 4) {
            action = 'GENERATERESUME2'
        } else if (resumeType == 2) {
            action = 'GENERATERESUME3'
        } else if (resumeType == 3) {
            action = 'GENERATERESUME4'
        } else if (resumeType == 1) {
            action = 'GENERATERESUME5'
        } else if (resumeType == 6) {
            action = 'GENERATERESUME6'
        } else if (resumeType == 7) {
            action = 'GENERATERESUME7'
        } else if (resumeType == 8) {
            action = 'GENERATERESUME8'
        }



        // setModal(false)
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);
        if (sessiondetails != null) {
            const ReqData = {
                userid: userdata.id
            }

            const reqRespnse = await PostApi(ReqData, action);
            // const reqRespnse = await PostApi(ReqData, "GENERATERESUME5");
            console.log("reqRespnse", reqRespnse);
            if (reqRespnse.status === 'success') {
                // setModal(true)
                toast.success("Resume has been generated and mailed to your email id", {
                    autoClose: 5000
                })


            }
            else {
                toast.error(reqRespnse.status, {
                    position: "top-center",
                    autoClose: 5000

                })
            }
        }
    }

    return (
        <>
   {pageLoad ?  <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div>:""}
            <Header />

            <div class="breadcumb-area clearfix">
                <div class="breadcumb-content">
                    <div class=" h-100">
                        <div class="row h-100 ">
                            <div class="col-12" style={{background: `url(${banner}) no-repeat center`}} >
                                {/* <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                                    <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">Our Templates</h2>
                                    <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                        <li class="breadcrumb-item">Home</li>
                                        <li class="breadcrumb-item active" aria-current="page">Our Templates</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="demo section-padding-100-0">
                <div class="container">
                    <div class="section-heading text-center">
                        <div class="dream-dots justify-content-center">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h2 class="bold">Our Creative Templates</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div class="row">

                        {resumeFormatData?.map((ele, ind) => {
                            return (
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="demo-item">
                                        <img src={ele.image} alt="demo" class="img-responsive" />
                                        <div class="preview-btn-wrapper text-center">

                                            <button class="preview-demo" onClick={() => SeeTemplate(ele)}>
                                                See template<i class="fa fa-long-arrow-right"></i>
                                            </button>
                                            <button class="preview-demo v2" onClick={()=>EditTemplate(ele)}>Use template  <i class="fa fa-long-arrow-right"></i></button>

                                        </div>
                                    </div>
                                </div>

                            )

                        })}
                        {/* 
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo2} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo3} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <Features />

            <Footer />


        </>
    )
}

export default Templates