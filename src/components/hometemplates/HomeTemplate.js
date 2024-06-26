import React, { useEffect, useState } from 'react'
import demo1 from "../../assests/img/demos/demo-1.png"
import demo2 from "../../assests/img/demos/demo-2.png"
import demo3 from "../../assests/img/demos/demo-3.png"
import { Link, useNavigate } from 'react-router-dom'
import { PostApi } from '../../services/commonServices'
import { toast } from 'react-toastify'

function HomeTemplate() {

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
    const navigate = useNavigate()

    const SeeTemplate = (ele) => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
        if (userdata != null) {
        navigate('/templatepreview', { state: ele });
        }else{
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
        navigate('/tabbox',{state:ele.resumetype})
    }else{
        toast.error("Please Login to Proceed", {
            position: "top-right",
            autoClose: 5000

        })

    }
}


    return (
        <>
            <section class="demo section-padding-100 ring-bg">
                <div class="container">
                    <div class="section-heading text-center">
                        <div class="dream-dots justify-content-center">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h2 class="bold">Our Creative Templates</h2>
                        <p>Explore a diverse collection of professionally crafted resume templates tailored to various industries and career levels. Choose from a range of visually appealing designs to create a standout resume that perfectly reflects your unique skills and experiences.</p>
                    </div>
                    <div class="row">
                        {resumeFormatData?.map((ele, ind) => {
                            return (
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    {ind < 3 ? <div class="demo-item">
                                        <img src={ele.image} alt="demo" class="img-responsive" />
                                        <div class="preview-btn-wrapper text-center">
                                            <button class="preview-demo" onClick={() => SeeTemplate(ele)}>
                                                See template<i class="fa fa-long-arrow-right"></i>

                                            </button>
                                            <button class="preview-demo v2" onClick={()=>EditTemplate(ele)}>Use template  <i class="fa fa-long-arrow-right"></i></button>

                                            {/* <Link class="preview-demo" to={{pathname:"/templatepreview",state:ele}} 
                                            >See template </Link> */}
                                            {/* <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link> */}

                                        </div>
                                    </div> : ""}
                                </div>

                            )

                        })}

                        {/* <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="demo-item">
                                <a href="template-preview.html"><img src={demo1} alt="demo" class="img-responsive" /></a>
                                <div class="preview-btn-wrapper text-center">
                                   
                                    <Link class="preview-demo" to={"/templatepreview"}>See template <i class="fa fa-long-arrow-right"></i></Link>
                                    <Link class="preview-demo v2" to={"/tabbox"}>Use template  <i class="fa fa-long-arrow-right"></i></Link>
                                   
                                </div>
                            </div>
                        </div>

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
        </>
    )
}

export default HomeTemplate