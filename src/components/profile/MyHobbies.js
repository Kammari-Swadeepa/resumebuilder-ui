import {  Container, Modal } from "react-bootstrap";
import { Styles } from "./education";
import React, { useEffect, useState } from 'react';
// import AddEduction from "./AddEducation";
import { PostApi } from '../../services/commonServices';

import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RxCross1 } from "react-icons/rx";


import AddHobbies from "./AddHobbies";



const MyHobbies = () => {
    const [postModal, setPostModal] = useState(false)
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState({})
    const [noData,setNoData]=useState('')
    const [userId, setUserId]=useState('')

    useEffect(() => {
        getHobbies()
        // console.log('hobbies use effect');
    }, [])


    const getHobbies = async () => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);


        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERHOBBIES'
            }
            

            const response = await PostApi(reqparam, 'USERHOBBIES');

            // console.log("Hobbies response", response.data);

            setData(response.data)
            setUserId(userdata.id)

            // console.log("getdata", response.data);

            if(response.data===''){
                setNoData('Please add some hobbies')
            }
            else{
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
        // getHobbies()
    }
    // const deleteItem = async (item) => {
    //     const sessiondetails = localStorage.getItem('userdata');
    //     const userdata = JSON.parse(sessiondetails);

    //     if (sessiondetails != null) {
    //         const reqparam = {
    //             ...item,
    //             query: { userid: item.id },
    //             ptype: 'USEREDUCATION'
    //         }

    //         const Response = await PostApi(reqparam, "DELETEUSEREDUCATION")
    //         if (Response.data.id) {
    //             toast.info("data deleted successfully", {
    //                 position: "top-center",
    //                 autoClose: 1500
    //             })
    //             getHobbies();
    //         }

    //     }

    // }

   const deleteHobby = async(item) => {
        item.ptype ='USERHOBBIES';
        const HobbyResponse = await PostApi(item,'DELETEHOBBIES');
        if(HobbyResponse.data.id){
            // Toast.show({
            //     type: 'success',
            //     text1: 'Hobbies deleted successfully',
            //     position: 'top'
            //   });

              toast.success('Hobbies deleted successfully', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

              getHobbies();
          }
          
          else{
            // Toast.show({
            //     type: 'success',
            //     text1: 'Failed to  delete Hobbies',
            //     position: 'top'
            //   });

              toast.error('Failed to  delete Hobbies ', {
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

    }

    return (
        <>
            <Styles>
                <Container className="main-div">
                <h3 className="tab-title text-center">Hobbies</h3>

                    <table className="table w-75">
                   {!noData && <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sl.no</th>
                            <th scope="col">Hobbies</th>
                            
                            <th scope="col"></th>
                        </tr>
                    </thead>}
                    <tbody>
                        {data?.map((item,index)=>{return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td> <span className="cancelIcon"  onClick={() => deleteHobby(item)}><i className="fa-solid fa-rectangle-xmark fa-lg"></i></span></td>
                        </tr>


                        })
                        }

                        
                        

                    </tbody>
                </table>
                    
                    {/* {data?.map((item) => {
                        return <div>
                            <div class="card" >
                                <Row>
                                    <Col md='10'>
                                        <div class="card-body" >
                                            <h5 class="card-title" >{item.name}</h5>
                                           

                                        </div>

                                    </Col>
                                    <Col md='2'>
                                        <br />
                                        <p className="cancelIcon" style={{paddingBottom:"10px"}} onClick={() => deleteHobby(item)}><i class="fa-solid fa-rectangle-xmark fa-lg"></i></p>


                                    </Col>



                                </Row>

                            </div>
                            <br/>



                        </div>

                    })

                    } */}


                  {noData &&  <p className="message">{noData}</p> }

                    <br />
                    <button className="btn btn-dark" onClick={addModal}>Add Hobbies</button>
                </Container>
                
                

            </Styles>
            <Modal size="l" show={postModal} >
                <div className="" role="document">
                    <div className="">
                        <form >
                        <div className="modal-header  border-none" style={{ position: "relative" }}>
                                <h5 style={{ marginLeft: "15px" }}>Hobbies</h5>
                                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={closemodal} />

                                {/* <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button> */}
                            </div>
                            <div className="modal-body">
                                {/* <AddEduction updateprop={updateData} /> */}
                                <AddHobbies data={data} userId={userId} getHobbies={getHobbies} closemodal={closemodal}></AddHobbies>
                            </div>
                        </form>

                    </div>
                </div>

            </Modal>
            {/* <ToastContainer/> */}

        </>
    )
}

export default MyHobbies;