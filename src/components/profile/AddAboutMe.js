import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
// import { Styles } from "./education";
import Summary from './Summary';
import { Container, Modal } from 'react-bootstrap';
import { FaAnglesRight } from "react-icons/fa6";
import { PostApi } from '../../services/commonServices';
import { RxCross1 } from "react-icons/rx";





function AddAboutMe() {
  const [description, setDescription] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    var tntId = JSON.parse(localStorage.getItem('tID'))

    const sessiondetails = localStorage.getItem(`userdata${tntId}`);
    if (sessiondetails != null) {

      const userdata = JSON.parse(sessiondetails);

      const reqparam = {
        pageno: '-1',
        ptype: 'GETUSER',
        query: { id: userdata.user.id }
      }
      const resDat = await PostApi(reqparam, 'USERPROJECTS');
      //  console.log("resDat===",resDat);
      if (resDat.data != null) {
        setSummaryData(resDat.data.about);
      }
    }
  }

  const continueform = async () => {
    var tntId = JSON.parse(localStorage.getItem('tID'))

    const sessiondetails = localStorage.getItem(`userdata${tntId}`);
    if (sessiondetails != null) {
      const userdata = JSON.parse(sessiondetails);
      if (summaryData == '') {
        toast.info({
          type: 'error',
          text1: 'Please enter description ',
          position: 'top'
        });
      } else {

        const req = {
          about: summaryData,
          id: userdata.user.id,
          ptype: 'UPDATEABOUT',

        }
        const saveuserinfo = await PostApi(req, 'SAVEUSERINFO');

        if (saveuserinfo.data.id) {
          toast.info('data updated succesfully', {
            position: "top-center",
            autoClose: 5000
          });
        } else {
          toast.info({
            type: 'error',
            text1: 'Failed to updated data ,Please try again',
            position: 'top'
          });
        }

      }

    }
  }

  const fetchData = (value) => {
    // console.log("value",value);
    setDescription(value);
  }
  var summaryFun = (e) => {
    var data = e.target.value
    if (e.target.checked) {

      if (summaryData.length < 0) {
        setSummaryData(data)
      }
      else {
        setSummaryData((prevState) => {
          return `${prevState}${data}`
        })
      }

    }
    else {
      setSummaryData(summaryData.filter((item) => item != e.target.value))
    }
  }
  // e.target.checked?setSummaryData(e.target.value):setSummaryData('')
  return (
    <>
      {/* <Styles> */}
      <Container className="main-div">
        <h3 className="tab-title text-center">About Me</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}>
          <span style={{ color: '#D2D2D2', fontSize: '17px' }} >
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { setToggle(true) }}>
              Summary<FaAnglesRight size={15} color="white" />
            </button>
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '300px',
          border: '1px solid #EBEBEB',
          borderRadius: '8px',
          marginBottom: '36px',
        }}>
          <textarea
            style={{
              fontFamily: 'Poppins',
              fontSize: '13px',
              lineHeight: '19px',
              color: '#949494',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
            }}

            value={summaryData}
            // onClick={(e)=>setSummaryData(e.target.value)}
            onChange={(e) => { setSummaryData(e.target.value) }}
          />
        </div>

        <div style={{ padding: '0 46px', marginTop: '35px' }}>
          <button
            style={{
              marginTop: '-15px',
              marginLeft: '-45px',
              height: '40px',
              width: '70px',
              backgroundColor: 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={continueform}>
            <span style={{
              fontFamily: 'Sniglet-Regular',
              fontSize: '18px',
              color: 'white',
              fontWeight: '400',
            }}>
              Save
            </span>
          </button>
        </div>





        {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Summary</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{ height: '200px', overflowY: 'scroll' }}>
                {description?.map((ele, inx) => {
                  return (
                    <div
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '13px',
                        lineHeight: '19px',
                        color: '#949494',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span>{inx + 1}. </span><input type='checkbox' value={ele.name} onClick={summaryFun}></input> <p>{ele.name}</p>

                    </div>
                  )
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
              </div>
            </div>
          </div>
        </div> */}



        {toggle && <Summary fetchData={fetchData} ></Summary>}
      </Container>

      <Modal size="lg" show={toggle} >
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header  border-none" style={{ position: "relative" }}>
                <h5 style={{ marginLeft: "15px" }}>Summary</h5>
                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={() => setToggle(false)} />

              </div>
              <div className="modal-body">
                {description?.map((ele, inx) => {
                  return (
                    <div
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '13px',
                        lineHeight: '19px',
                        color: '#949494',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span>{inx + 1}. </span><input type='checkbox' value={ele.name} onClick={summaryFun}></input> <p className='text-dark'>{ele.name}</p>

                    </div>
                  )
                })}

              </div>
            </form>

          </div>
        </div>

      </Modal>
      {/* </Styles>       */}
    </>

  )
}

export default AddAboutMe