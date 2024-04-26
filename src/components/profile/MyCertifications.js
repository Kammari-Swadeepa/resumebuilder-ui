import React, { useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import AddCertification from "./AddCertification";
import { PostApi } from '../../services/commonServices';

import { toast } from "react-toastify";
import { Styles } from "./education";
const MyCertifications = () => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([])
    const [noData, setNoData] = useState('');
    const [imageModal,setImageModal]=useState(false)
    const [image,setImage]=useState('')

    useEffect(() => {
        getCertificationData();

    }, [])


    const getCertificationData = async () => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERCERTIFICATE'
            }

            const response = await PostApi(reqparam, 'USERCERTIFICATE');
            setData(response.data)

            // console.log("get certifications data", response.data);

            if (response.data == '') {
                // console.log("no data");
                setNoData('Enter your Certifications')

            }
            else {
                setNoData('')
              
            }
        }



    }
    const openModal = async () => {
        setModal(true)

    }
    const closemodal = async () => {
        setModal(false)
        getCertificationData();
    }
    const deleteItem = async (item) => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                ...item,
                query: { userid: userdata.id },
                ptype: 'USERCERTIFICATE'
            }

            const Response = await PostApi(reqparam, "DELETECERTIFICATE")
            if (Response.data.id) {
                toast.info("data deleted successfully", {
                    position: "top-center",
                    autoClose: 5000
                })
                getCertificationData()
            }

        }

    }
    const viewCertificate=async(item)=>{
        
        setImageModal(true);
        // console.log("certificate",item.image);
        setImage(item.image)
    }
    const closeimagemodal=async()=>{
        setImageModal(false)
    }
    return (
        <>
            <Styles>
                <Container className="main-div">


                    <h3 className="tab-title text-center">Certification</h3>

                  {!noData && <table className="table w-75">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Sl.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Certification year</th>
                                <th scope="col">Certificate</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((item, ind) => {
                                    return <tr>
                                        <td>{ind + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.year}</td>
                                        <td ><label style={{textDecorationLine:"underline",cursor:"pointer"}} onClick={()=>viewCertificate(item)}>view certificate</label></td>
                                        <td> <p className="refer-icons" onClick={() => deleteItem(item)}><i className="fa-solid fa-trash refer-trash "></i></p></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>}
                    

                   {noData && <p className="message">{noData}</p> } 

                    <br />
                    <button className="btn btn-dark" onClick={openModal}>Add Certifications</button>

                </Container>
            </Styles>


            <Modal  size="l" show={modal}>
                <form >
                    <div className="modal-header">

                        <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <AddCertification closemodal={closemodal}/>

                    </div>
                </form>
            </Modal>

            <Modal size='lg' show={imageModal}>
            <form >
                    <div className="modal-header">

                        <button type="button" className="btn-close" onClick={closeimagemodal} data-dismiss="modal"></button>
                    </div>
                    <div className="modal-body text-center">
                      
                        <img style={{ "height": "400px" ,'width':"750px"}}  src={image} />
                       

                    </div>
                </form>

            </Modal>
        </>
    )
}
export default MyCertifications;