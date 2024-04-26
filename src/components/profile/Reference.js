import React, { useEffect, useState } from "react";
import { Styles } from "./education";
import { Col, Container, Modal, Row } from "react-bootstrap";
import AddReferences from "./AddReferences";
import { PostApi } from '../../services/commonServices';
import { RxCross1 } from "react-icons/rx";


import { toast } from "react-toastify";

const Reference = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [noData, setNoData] = useState('')

    useEffect(() => {
        getReferences()

    }, [])
    const getReferences = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USEREFERENCES'
            }

            const response = await PostApi(reqparam, 'USERREFERENCES');
            // console.log("reference data", response.data);
            setData(response.data)

            if (response.data == '') {
                // console.log("no data");
                setNoData('enter your references')

            }
            else {
                setNoData('')
            }
        }

    }

    const referenceModal = async () => {
        setModal(true)
    }

    const closemodal = async () => {
        setModal(false)
        getReferences();
    }
    const deleteItem = async (item) => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                ...item,
                query: { userid: userdata.id },
                ptype: 'USEREFERENCES'
            }

            const Response = await PostApi(reqparam, "DELETEUSERREFERENCES")
            if (Response.data.id) {
                toast.info("data deleted successfully", {
                    position: "top-center",
                    autoClose: 5000
                })
                getReferences();
            }

        }

    }
    return (<>
        <Styles>
            <Container className="main-div">
                <h3 className="tab-title text-center">References</h3>

                {!noData && <table className="table w-75">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sl.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((item, ind) => {
                                return <tr>
                                    <td>{ind + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.mobilenumber}</td>
                                    <td> <p className="refer-icons" onClick={() => deleteItem(item)}><i className="fa-solid fa-trash refer-trash "></i></p></td>



                                </tr>



                            })
                        }


                    </tbody>
                </table>}
                {noData && <p className="message">{noData}</p>}

                <br />


                <button className="btn btn-dark" onClick={referenceModal}>Add References</button>



            </Container>



        </Styles>
        <Modal size="l" show={modal}>
            <form >
                <div className="modal-header  border-none" style={{ position: "relative" }}>
                    <h5 style={{ marginLeft: "15px" }}>References</h5>
                    <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={closemodal} />

                    {/* <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button> */}
                </div>
                <div className="modal-body">
                    <AddReferences closemodal={closemodal} />
                </div>
            </form>
        </Modal>



    </>)
}
export default Reference;