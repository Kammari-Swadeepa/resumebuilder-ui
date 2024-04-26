import React, { Component } from 'react';
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


class TabBox extends Component {

    render() {
        return (
            <Styles>

                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="MyDetails">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="MyDetails"><i className="las la-arrow-right"></i> My Details</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="education"><i className="las la-arrow-right"></i>Education</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="Marks"><i className="las la-arrow-right"></i>Marks</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="About-Me"><i className="las la-arrow-right"></i>About Me</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="MySkills"><i className="las la-arrow-right"></i>Skills</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="projects"><i className="las la-arrow-right"></i>Projects</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="certifications"><i className="las la-arrow-right"></i>Certifications</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="MyHobbies"><i className="las la-arrow-right"></i>Hobbies</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="references"><i className="las la-arrow-right"></i>References</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mypurchases"><i className="las la-arrow-right"></i>My Purchases</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="resume"><i className="las la-arrow-right"></i>Generate Resume</Nav.Link>
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

                                            <MySkills></MySkills>

                                        
                                
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
                                        <Tab.Pane eventKey='mypurchases'>
                                            <MyPurchases/>
                                        </Tab.Pane>

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
}

export default TabBox
