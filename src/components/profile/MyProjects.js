import React, { useEffect, useState } from "react";
import { Styles } from "./education";
import { Col, Container, Modal, Row } from "react-bootstrap";
import AddProjects from "./AddProjects";
import { PostApi } from '../../services/commonServices';
import { RxCross1 } from "react-icons/rx";


import { ToastContainer, toast } from "react-toastify";

const MyProjects = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [noData, setNoData] = useState('')
    const [updateData, setUpdateData] = useState({})
    useEffect(() => {
        getProjects()
    }, [])



    const getProjects = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERPROJECTS'
            }

            const response = await PostApi(reqparam, 'USERPROJECTS');
            setData(response.data)

            // console.log("getprojects", response.data);

            if (response.data == '') {
                // console.log("no data");
                setNoData('Data Not Found')

            }
            else {
                setNoData('')
            }
        }
    }
    const openProjectModal = async () => {
        setModal(true)
        setUpdateData({})

    }
    const closemodal = async () => {
        setModal(false)
        getProjects()
    }

    const openModal = async (item) => {
        setModal(true)
        setUpdateData(item)


    }

    const deleteItem = async (item) => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                ...item,
                query: { userid: userdata.id },
                ptype: 'USERPROJECTS'
            }

            const Response = await PostApi(reqparam, "DELETEUSERPROJECT")
            if (Response.data.id) {
                toast.info("data deleted successfully", {
                    position: "top-center",
                    autoClose: 5000
                })
                getProjects();
            }

        }



    }
    return (
        <>
            <Styles>
                <Container className="main-div">
                    <h3 className="tab-title text-center">Projects</h3>
                    {data.map((item) => {
                        return <div>
                            <div class="card" >
                                <Row>
                                    <Col md='10'>
                                        <div class="card-body p-4" >
                                            <h5 class="card-title d-inline-block">Project Name: </h5><p class="card-text px-2 d-inline-block">{item.name}</p><br />
                                            {/* <i class="fa-regular fa-clock projects-icon text-primary"></i> */}
                                            <h5 class="card-title d-inline-block"> Duration:</h5>
                                            <p className="card-text px-2 d-inline-block fs-6"> {item.duration}</p><br />
                                            {/* <p class="card-text d-inline-block"></p> */}
                                            <h5 class="card-title d-inline-block"> Description:</h5>
                                            <p className="card-text px-2 d-inline-block">{item.description.slice(0, 200)}</p>


                                        </div>

                                    </Col>
                                    <Col md='2' className="py-2" style={{ display: "flex", justifyContent: "center", maxHeight: "60px" }}>
                                        <br />
                                        <span className="icons" onClick={() => openModal(item)}><i class="fa-solid fa-pencil"></i></span>
                                        <span className="icons" onClick={() => deleteItem(item)}><i class="fa-solid fa-trash"></i></span>

                                    </Col>



                                </Row>





                            </div>
                            <br />



                        </div>

                    })

                    }


                    <p className="message">{noData}</p>

                    <br />



                    <button className="btn btn-dark" onClick={openProjectModal}>Add Projects</button>
                </Container>


            </Styles>

            <Modal size="lg" show={modal}>
                <form >
                    <div className="modal-header  border-none" style={{ position: "relative" }}>
                        <h5 style={{ marginLeft: "15px" }}>Projects</h5>
                        <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={closemodal} />

                        {/* <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button> */}
                    </div>
                    <div className="modal-body">
                        <AddProjects updateprops={updateData} closemodal={closemodal} />
                    </div>
                </form>


            </Modal>


        </>
    )
}
export default MyProjects;