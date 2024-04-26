import { Container, Modal } from "react-bootstrap";
import { Styles } from "./education";
import React, { useEffect, useState } from 'react';
// import AddEduction from "./AddEducation";
import { PostApi } from '../../services/commonServices';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RxCross1 } from "react-icons/rx";


// import AddHobbies from "./AddHobbies";
import AddSkills from "./AddSkills";



const MySkills = () => {
    const [postModal, setPostModal] = useState(false)
    const [data, setData] = useState([]);
    const [noData, setNoData] = useState('')
    const [userId, setUserId] = useState('')
    const [skillsMasterData, setSkillsMasterData] = useState([])

    var skillsmaster = []

    useEffect(() => {
        getSkills()
    }, [])


    const getSkills = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))


        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);


        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERSKILLS'
            }


            const response = await PostApi(reqparam, 'USERSKILLS');

            // console.log("USERSKILLS response", response.data);

            setData(response.data)
            setUserId(userdata.id)

            // console.log("getdata", response.data);

            if (response.data == '') {
                setNoData('Please add some Skills')
            }
            else {
                setNoData('')
            }

            const skillreq = {
                pageno: '-1',
                ptype: 'SKILLS'
            }

            const skillsmasterResp = await PostApi(skillreq, 'USERSKILLS');

            // console.log("skillsmasterResp:",skillsmasterResp.data);

            let rowdata1 = [];
            let counter1 = 0;
            await skillsmasterResp.data.reduce(async (promise, res) => {
                await promise;
                const opts = {
                    key: res.id,
                    value: res.name
                }
                rowdata1.push(opts);
                if (counter1 == skillsmasterResp.data.length - 1) {

                    skillsmaster = rowdata1

                    setSkillsMasterData(rowdata1)
                }

                counter1++;
            }, Promise.resolve());

        }

    }

    const addModal = async () => {
        setPostModal(true)


    }



    const closemodal = async () => {
        setPostModal(false)
        // getHobbies()
    }


    const deleteSkill = async (item) => {
        item.ptype = 'USERSKILLS';
        const SkillResponse = await PostApi(item, 'DELETESKILLS');
        if (SkillResponse.data.id) {


            toast.success('Skill deleted successfully', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            getSkills();
        }

        else {


            toast.error('Failed to  delete Skill ', {
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
                    <h3 className="tab-title text-center">Skills</h3>

                    {/* {console.log("SkillsMasterData afetr filter",skillsMasterData)}  */}
                    {!noData && <table className="table w-75">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Sl.no</th>
                                <th scope="col">Skills </th>

                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td> <span className="cancelIcon" style={{ paddingBottom: "10px" }} onClick={() => deleteSkill(item)}><i className="fa-solid fa-rectangle-xmark fa-lg"></i></span></td>
                                </tr>


                            })
                            }




                        </tbody>
                    </table>}

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


                    {noData && <p className="message">{noData}</p>}

                    <br />
                    <button className="btn btn-dark" onClick={addModal}>Add Skills</button>
                </Container>



            </Styles>
            <Modal size="l" show={postModal} >
                <div className="" role="document">
                    <div className="">
                        <form >
                            <div className="modal-header  border-none" style={{ position: "relative" }}>
                                <h5 style={{ marginLeft: "15px" }}>Skills</h5>
                                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={closemodal} />
                                {/* <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button> */}
                            </div>
                            <div className="modal-body">
                                <AddSkills data={data} skillsMasterData={skillsMasterData} userId={userId} getSkills={getSkills} closemodal={closemodal}></AddSkills>
                            </div>
                        </form>

                    </div>
                </div>

            </Modal>

        </>
    )
}

export default MySkills;