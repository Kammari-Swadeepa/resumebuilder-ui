import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Nav, Row, Tab } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Header from './header/Header.js';
import AddAboutMe from './profile/AddAboutMe.js';
import GenerateResume from './profile/GenerateResume.js';
import Marks from './profile/Marks.js';
import MyCertifications from './profile/MyCertifications.js';
import MyDetails from './profile/MyDetails.js';
import MyEducation from './profile/MyEducation.js';
import MyHobbies from './profile/MyHobbies.js';
import MyProjects from './profile/MyProjects.js';
import MySkills from './profile/MySkills.js';
import Reference from './profile/Reference.js';
import { Styles } from "./styles/tabBox.js";
import { PostApi } from '../services/commonServices.js';
import { toast } from 'react-toastify';
// import Modal from 'react-bootstrap/Modal';
import Format5 from './preview-templates/Format5.js';
import Format6 from './preview-templates/Format6.js';
import Format3 from './preview-templates/Format3.js';
import Format2 from './preview-templates/Format2.js';
import Format1 from './preview-templates/Format1.js';
import Format4 from './preview-templates/Format4.js';
import Fromat7 from './preview-templates/Fromat7.jsx';
import AddDeclaration from './profile/AddDeclaration.js';
import { useLocation } from 'react-router-dom';

function TabBox() {
    const location = useLocation();
    const [pageLoad,setPageLoad]=useState(false)
    useEffect(() => {
        handlePageLoad()
        window.scroll(0, 0)
       
    }, [])
    const handlePageLoad =()=>{
        setPageLoad(true)
        setTimeout(() => {
            setPageLoad(false)
        }, 400);
      }
    const [isLoading, setIsLoading] = useState(true)
    const [openPopUp,setOpenPopUp]=useState(false)
   
    setTimeout(() => {
        setIsLoading(false)
    }, 400)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const renderTemplate=()=>{
 
        if(location.state =='1'){
            return <Format1 />
        }
        if(location.state =='2'){
            return <Format2 />
        }
        if(location.state =='3'){
            return <Format3 />
        }
        if(location.state =='4'){
            return <Format4 />
        }
        if(location.state =='5'){
            return <Format5 />
        }
        if(location.state =='6'){
            return <Format6 />
        }
    }
const handleOpenPopUp = ()=>{
    setOpenPopUp(true)
}
    const handleGenerateResume =async()=>{
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);
        if (sessiondetails != null) {
            const ReqData = {
                userid: userdata.id
            }
        if(location.state =='1'){
           
                const reqRespnse = await PostApi(ReqData, "GENERATERESUME3");
                if (reqRespnse.status === 'success') {
                 
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
        if(location.state =='2'){
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME");
            if (reqRespnse.status === 'success') {
             
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
        if(location.state =='3'){
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME2");
                if (reqRespnse.status === 'success') {
                 
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
        if(location.state =='4'){
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME4");
                if (reqRespnse.status === 'success') {
                 
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
        if(location.state =='5'){
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME5");
            if (reqRespnse.status === 'success') {
             
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
        if(location.state =='6'){
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME7");
                if (reqRespnse.status === 'success') {
                 
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
    }}
   
        return (
            <>
            {pageLoad ?  <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div>:""}
               <Styles>
<Header  />
                {/* Tab Box Area */}
                <section className="tab-section">
                <div className='d-flex justfy-content-center '>
                                 
                                    </div>
                        <Tab.Container defaultActiveKey="MyDetails">
                            <Row>
                                <Col lg="6" md="12" className='resume-mobile-view' style={{marginLeft:'30px'}}>
                                    
                                   {/* {renderTemplate()} */}
                                   {/* <Fromat7 /> */}
                                   {<Format4 />}
                                </Col>
                                

                                <Col lg="5" md="12" className='mt-5'>

                                <Nav className="row p-0 m-0" style={{ boxShadow: "0px 0px 7px gray" }}>
                                        <Nav.Item className='col-lg-6 col-md-12' >
                                        <Nav.Link eventKey="MyDetails" ><FaArrowRight /> <span style={{ fontSize: "16px", marginLeft: "4px" }}>My Details</span></Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="education"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>Education</span></Nav.Link>
                                        </Nav.Item>

                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="Marks"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Marks</span></Nav.Link>
                                        </Nav.Item> */}

                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="About-Me"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>About Me</span></Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="MySkills"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>Skills</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="projects"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>Projects</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="certifications"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>Certifications</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="MyHobbies"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}> Hobbies</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="references"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>References</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='col-lg-6'>
                                        <Nav.Link eventKey="declaration"><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>Declaration</span></Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="mypurchases"><FaArrowRight />My Purchases</Nav.Link>
                                        </Nav.Item> */}
                                    <Nav.Item className='col-lg-6 generateButtoninTab'>
                                        <Nav.Link onClick={handleOpenPopUp}><FaArrowRight /><span style={{ fontSize: "16px", marginLeft: "4px" }}>Generate Resume</span></Nav.Link>
                                    </Nav.Item>

                                    </Nav>
                                




                                    <Tab.Content className='mt-2'>
                                    
                                        <Tab.Pane eventKey="education">
                                            <MyEducation />
                                            </Tab.Pane>

                                        <Tab.Pane eventKey="Marks">
                                            <Marks />
                                        </Tab.Pane>

                                        
                                        <Tab.Pane eventKey="About-Me">
                                            <AddAboutMe />
                                        </Tab.Pane>
                                    <Tab.Pane eventKey="declaration">
                                        <AddDeclaration />
                                    </Tab.Pane>

                                        <Tab.Pane eventKey="MyDetails">
                                        <MyDetails />

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="MyHobbies">

                                            <MyHobbies />

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="MySkills">

                                        <MySkills />

                                        
                                
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='projects'>
                                            <MyProjects />

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="references">
                                            <Reference />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='certifications'>
                                            <MyCertifications />

                                        </Tab.Pane>
                                        {/* <Tab.Pane eventKey='mypurchases'>
                                            <MyPurchases/>
                                        </Tab.Pane> */}

                                        <Tab.Pane eventKey='resume'>
                                        <GenerateResume />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                </section>
                {/* <ToastContainer /> */}
           

            </Styles>
            <Modal show={openPopUp} onHide={()=>setOpenPopUp(false)} animation={false} size='lg'>
        
        <Modal.Body>
           <div className='text-center pt-4 bt-4'>
           <h5>Are you sure want to create resume?</h5>
           <div>Please add your data before create</div>
           <div className='d-flex justify-content-between w-75  m-5'>
            <button className='btn btn-danger w-25' onClick={()=>setOpenPopUp(false)}>No</button>
            <button className='btn btn-success w-25' onClick={handleGenerateResume}>Yes</button>
           </div>
           </div>
           

        </Modal.Body>
      
      </Modal>
            </>
         
        )
    }


export default TabBox
