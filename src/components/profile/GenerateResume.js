import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { PostApi } from '../../services/commonServices';
import { Styles } from './education';

import { toast } from 'react-toastify';
import './resumeStyles.css';
//
function GenerateResume() {
    const [modal, setModal] = useState(false)
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
        }  else if (resumeType == 8) {
            action = 'GENERATERESUME8'
        } 
        


        setModal(false)
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);
        if (sessiondetails != null) {
            const ReqData = {
                userid: userdata.id
            }

            // const reqRespnse = await PostApi(ReqData, action);
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME7");
            if (reqRespnse.status === 'success') {
                setModal(true)
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




    const updateItem = () => {
        setModal(false)
    }
    const itemCancel = () => {
        setModal(false)
    }
    return (
        <Styles>
            {console.log(resumeFormatData, "Check resume formats")}
            <Container className="main-div">
                <h3 className="tab-title text-center">Resume</h3>

                <br />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        resumeFormatData?.map((ele, ind) => {
                            return (
                                <div className='resume-box'>
                                    <div className='row' style={{ boxShadow: '0px 0px 10px gray', margin: '5px' }}>
                                        <div className='col-6' >
                                            <img src={ele.image} style={{ width: '100%', height: '250px', borderRight: '2px solid #F6F6F6' }} />
                                        </div>
                                        <div className='col-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center' }}>
                                            <h5 style={{ textAlign: 'center', }}>{ele.title} </h5>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <button className='btn btn-primary' style={{ marginTop: '70px' }}onClick={()=>createResume(ele.resumetype)}>Get resume</button>

                                            </div>
                                            <div >

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>






            </Container>

            {modal && (<Modal show={modal}>
                <Modal.Body>
                    <p className='text-dark'>Resume has been generated and mailed to your email id</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={updateItem}>Ok</Button>
                    <Button onClick={itemCancel}>Close</Button>
                </Modal.Footer>

            </Modal>)}

        </Styles>
    )
}

export default GenerateResume