import {  Container, Modal } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { PostApi } from '../../services/commonServices';

import { toast } from "react-toastify";
import AddMarks from "./AddMarks";
import { Styles } from "./education";



const Marks = () => {
  const [postModal, setPostModal] = useState(false)
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({})
  const [noData, setNoData] = useState('')
  useEffect(() => {
    getMarks()
  }, [])
  const getMarks = async () => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

    const sessiondetails = localStorage.getItem(`userdata${tntId}`);
    const userdata = JSON.parse(sessiondetails);

    if (sessiondetails != null) {
      const reqparam = {
        pageno: '-1',
        query: { userid: userdata.id },
        ptype: 'USERMARKS'
      }

      const response = await PostApi(reqparam, 'USERMARKS');
      setData(response?.data)

      // console.log("getdata==========,", response?.data);

      if (response?.data == '') {
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
    getMarks()
  }
  const deleteItem = async (item) => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

    const sessiondetails = localStorage.getItem(`userdata${tntId}`);
    const userdata = JSON.parse(sessiondetails);

    if (sessiondetails != null) {
      const reqparam = {
        ...item,
        query: { userid: item.id },
        ptype: 'USERMARKS'
      }

      const Response = await PostApi(reqparam, "DELETEUSERMARKS")
      if (Response?.data.id) {
        toast.info("data deleted successfully", {
          position: "top-center",
          autoClose: 5000
        })
        getMarks();
      }

    }

  }


  return (
    <>
      <Styles>
                <Container className="main-div"> 
                <h3 className="tab-title text-center">Marks</h3>

          {data!=''?<table class="table-mark w-75" >
            <thead className="thead-dark">
              <tr>
              <th scope="col">Group</th>
              <th scope="col">Branch</th>
              <th scope="col">Semister</th>
              <th scope="col">Marks</th>
              <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item) => {
              return <tr>
                  <td>{item.groupname}</td>
                  <td>{item.branchname}</td>
                  <td>{item.semistername}</td>
                  <td>{item.marks}</td>
                  <td><p className="refer-icons" onClick={() => deleteItem(item)}><i className="fa-solid fa-trash fa-lg"></i></p></td>
                  </tr>                                                             

            })
            }
             </tbody>
          </table>:

          <p className="message">{noData}</p>}

          <br />
          <button className="btn btn-dark" onClick={addModal}>Add Marks</button>
        </Container>

      </Styles>
      <Modal size="l" show={postModal} >
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header">

                <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <AddMarks updateprop={updateData} />
              </div>
            </form>

          </div>
        </div>

      </Modal>
      {/* <ToastContainer /> */}

    </>
  )
}

export default Marks;