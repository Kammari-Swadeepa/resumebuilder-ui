import { Styles } from "./education";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from 'react';
import { PostApi } from '../../services/commonServices';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSkills = ({ skillsMasterData, userId,getSkills, data,closemodal }) => {
    

    const [skill, setSkill] = useState('')


    const saveSkill = async (e) => {
        e.preventDefault();

        if (skill === '') {

            toast.info(
                'Add skill',
                {
                    position: "top-center",
                    autoClose: 1500
                }
            )
        }


        else {

            let skillsmasterda = skillsMasterData.filter((x) => x.key === skill);

            let name =skillsmasterda[0].value;

            let addedskills = data.filter((x) => x.skillid === skill);



            if (addedskills.length > 0) {
              
                toast.error('You have already added the skill ', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            }
            else {

                const reqdata = {
                    ptype: 'USERSKILLS',
                    name: name,
                    userid: userId,
                    skillid:skill
                }

                const SkillResponse = await PostApi(reqdata, 'SAVESKILLS');

                // console.log("save skills", SkillResponse.data);
                if (SkillResponse.data.id) {
                  

                    toast.success('Skill saved successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });

                        getSkills()


                 
                } else {
                  
                    toast.error('Failed to  save skills ', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                closemodal()
            }
          

        }
        
    }


   const submitSkill = async (val) => {

        setSkill(val)

    }

    
    return (
        <Styles>
            <Container className="form-area">
                <Row>
                    <Col md="12">
                        <div className="form-box">

                            <form className="form">
                                <p className="form-control">

                                    <label htmlFor="Title">Select Skill</label>
                                        <select
                                             onChange={(e) => submitSkill(e.target.value)}>
                                            <option>Skills</option>
                                            {skillsMasterData.map((item) => (
                                                <option key={item.key} value={item.key}>
                                                    {item.value}
                                                </option>
                                            ))}
                                        </select>

                                </p>

                                <button onClick={saveSkill}>Save</button>

                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Styles>

    )
}
export default AddSkills;