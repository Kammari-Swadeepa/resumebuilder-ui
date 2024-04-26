import React, { Component, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";
import AddMarks from './profile/AddMarks.js';
import MyDetails from './profile/MyDetails.js';
import MyEducation from './profile/MyEducation.js';
import MyProjects from './profile/MyProjects.js';
import Marks from './profile/Marks.js';
import AddAboutMe from './profile/AddAboutMe.js';
import Reference from './profile/Reference.js';
import { ToastContainer } from 'react-toastify';
import MyCertifications from './profile/MyCertifications.js';
import MyHobbies from './profile/MyHobbies.js';
import MySkills from './profile/MySkills.js';
import 'react-toastify/dist/ReactToastify.css';
import GenerateResume from './profile/GenerateResume.js';
import MyPurchases from './profile/MyPurchases.js';
import { FaArrowRight } from "react-icons/fa";
import Header from './header/Header.js';


function TabBox () {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
        return (
            <Styles>
<Header  />
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="MyDetails">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link  eventKey="MyDetails"><FaArrowRight /> <span style={{fontSize:"16px",marginLeft:"4px"}}>My Details</span></Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="education"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Education</span></Nav.Link>
                                        </Nav.Item>

                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="Marks"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Marks</span></Nav.Link>
                                        </Nav.Item> */}

                                        <Nav.Item>
                                            <Nav.Link eventKey="About-Me"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>About Me</span></Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="MySkills"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Skills</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="projects"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Projects</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="certifications"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Certifications</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="MyHobbies"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}> Hobbies</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="references"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>References</span></Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="mypurchases"><FaArrowRight />My Purchases</Nav.Link>
                                        </Nav.Item> */}
                                        <Nav.Item>
                                            <Nav.Link eventKey="resume"><FaArrowRight /><span style={{fontSize:"16px",marginLeft:"4px"}}>Generate Resume</span></Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                    
                                        <Tab.Pane eventKey="education">
                                            <MyEducation />
                                            </Tab.Pane>

                                        <Tab.Pane eventKey="Marks">
                                            <Marks />
                                        </Tab.Pane>

                                        
                                        <Tab.Pane eventKey="About-Me">
                                            <AddAboutMe />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="MyDetails">
                                            <MyDetails/>

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="MyHobbies">

                                            <MyHobbies />

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="MySkills">

                                            <MySkills/>

                                        
                                
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
                                            <GenerateResume/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
                {/* <ToastContainer /> */}

            </Styles>
        )
    }


export default TabBox
