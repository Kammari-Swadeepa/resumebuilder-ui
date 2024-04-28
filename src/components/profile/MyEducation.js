import { Col, Container, Modal, Row } from "react-bootstrap";
import { Styles } from "./education";
import React, { useEffect, useRef, useState } from 'react';
import AddEduction from "./AddEducation";
import { PostApi } from '../../services/commonServices';
import { RxCross1 } from "react-icons/rx";

import { ToastContainer, toast } from "react-toastify";



const MyEducation = () => {
    const [postModal, setPostModal] = useState(false)
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState({})
    const [noData, setNoData] = useState('')
    useEffect(() => {
        getEducation()
    }, [])


    const getEducation = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USEREDUCATION'
            }

            const response = await PostApi(reqparam, 'GETUSEEDUCATION');
            setData(response.data)

            // console.log("get education", response.data);

            if (response.data == '') {
                // console.log("no data");
                setNoData('Data Not Found')

            }
            else {
                setNoData('')
            }
        }





    }

    const addModal = async () => {
        setPostModal(true)
        setUpdateData({})

    }


    const openModal = async (item) => {
        setPostModal(true)
        setUpdateData(item)

    }
    const closemodal = async () => {
        setPostModal(false)
        getEducation()
    }
    const deleteItem = async (item) => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                ...item,
                query: { userid: userdata.id },
                ptype: 'USEREDUCATION'
            }

            const Response = await PostApi(reqparam, "DELETEUSEREDUCATION")
            if (Response.data.id) {
                toast.info("data deleted successfully", {
                    position: "top-center",
                    autoClose: 5000
                })
                getEducation();
            }

        }

    }


    return (
        <>
            <Styles>
                <Container className="main-div">
                    <h3 className="tab-title text-center">Education</h3>

                    {data.map((item, ind) => {
                        return <div key={ind}>
                            <div className="card" >
                                <Row>
                                    <Col md='10'>
                                        <div className="card-body" >
                                            <h5 className="card-title" >Education:{item.education}-{item.course}({item.marks}%/CGPA)</h5>
                                            <p className="card-text">College:{item.college}</p>
                                            <p>Year:{item.startyear}-{item.endyear}</p>

                                        </div>

                                    </Col>
                                    <Col md='2'>
                                        <br />
                                        <p className="icons" onClick={() => openModal(item)}><i className="fa-solid fa-pencil"></i></p>
                                        <p className="icons" onClick={() => deleteItem(item)}><i className="fa-solid fa-trash"></i></p>


                                    </Col>



                                </Row>





                            </div>
                            <br />



                        </div>

                    })

                    }


                    <p className="message">{noData}</p>

                    <br />
                    <div className="text-center">
                        <button className="btn btn-dark" onClick={addModal}>Add Education</button>
                    </div>                </Container>



            </Styles>
            <Modal size="l" show={postModal} >
                <div className="" role="document">
                    <div className="">
                        <form >
                            <div className="modal-header  border-none" style={{ position: "relative" }}>
                                <h5 style={{ marginLeft: "15px" }}>Education</h5>
                                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={closemodal} />

                                {/* <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button> */}
                            </div>
                            <div className="modal-body">
                                <AddEduction updateprop={updateData} closemodal={closemodal} />
                            </div>
                        </form>

                    </div>
                </div>

            </Modal>
            {/* <ToastContainer/> */}

        </>
    )
}

export default MyEducation;