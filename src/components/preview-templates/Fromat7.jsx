import React, { useEffect, useState } from 'react';
// import { Styles } from '../../pages/account/styles/account'
import { PostApi } from '../../services/commonServices';

import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import "./format7.css"
import Projects from '../templates/profile/Projects';
function Fromat7() {
    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [semsisterdata, setSemisterData] = useState([]);
    const [branchdata, setBranchData] = useState([]);
    const [academictypes, setAcademictypes] = useState([]);
    const [imageshow, setImageShow] = useState(null);
    const [filefields, setFileFields] = useState(null);
    const [base64Img, setBase64Img] = useState("");
    const [declarationData, setDeclarationData] = useState("")


    const [selected, setSelected] = useState(undefined);
    const [selected1, setSelected1] = useState(undefined);
    const [selected2, setSelected2] = useState(undefined);
    const [pl1, setPl1] = useState("Select Year");
    const [pl2, setPl2] = useState("Select Branch");
    const [pl3, setPl3] = useState("Select Semister");
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [summaryData, setSummaryData] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([])
    const [userprojects, setUserProjects] = useState([])
    const [userHobbies, setUserHobbies] = useState([]);
    const [references, setReferences] = useState([])
    const [userdata, setUserData] = useState({})
    const [reload, setReload] = useState(false)
    const history = useLocation()



    useEffect(() => {
        loaddata();

    }, []);


    const loaddata = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
        // console.log("userdata in Mydetails", userdata);

        if (userdata != null) {
            setUserData(userdata)
            // console.log(userdata);
            const reqparam5 = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USEREFERENCES'
            }

            const responseREferences = await PostApi(reqparam5, 'USERREFERENCES');
            setReferences(responseREferences.data)
            const reqparam4 = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERHOBBIES'
            }


            const responseHobbies = await PostApi(reqparam4, 'USERHOBBIES');

            // console.log("Hobbies response", response.data);

            setUserHobbies(responseHobbies.data)


            const reqparam3 = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERPROJECTS'
            }

            const responseprojects = await PostApi(reqparam3, 'USERPROJECTS');
            setUserProjects((responseprojects.data))


            const reqparam2 = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USERSKILLS'
            }


            const responseskills = await PostApi(reqparam2, 'USERSKILLS');


            setSkills(responseskills.data)

            const reqparam1 = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'USEREDUCATION'
            }

            const response = await PostApi(reqparam1, 'GETUSEEDUCATION');
            setEducation(response.data)
            const reqparam = {
                pageno: '-1',
                ptype: 'GETABOUT',
                query: { id: userdata.user.id }
            }
            const resDat = await PostApi(reqparam, 'USERPROJECTS');
            //  console.log("resDat===",resDat);
            if (resDat.data != null) {
                setSummaryData(resDat.data.about);
                setDeclarationData(resDat.data.declaration)
            }
            setData(userdata.user);
            if (userdata?.user?.name) {
                setName(userdata?.user?.name);
            }

            setMobilenumber(userdata?.user?.username);
            setEmail(userdata?.user?.email);
            if (userdata?.user?.state) {

                setState(userdata?.user?.state);
            }
            if (userdata?.user?.district) {
                setDistrict(userdata?.user?.district);
            }
            if (userdata?.user?.address) {
                setAddress(userdata?.user?.address);
            }

            if (userdata?.user?.title) {
                setTitle(userdata?.user?.title);
            }

            if (userdata?.user?.image) {
                // setFileFields(userdata?.user?.image)
                setBase64Img(userdata?.user?.image)
                setImageShow(true)

            }
        }
        const reqparams1 = {
            pageno: '-1',
            query: { status: 'Active' }

        }

        const SemisterResponse = await PostApi(reqparams1, 'SEMISTER');
        // console.log("SemisterResponse", SemisterResponse.data);
        const BranchResponse = await PostApi(reqparams1, 'BRANCHES');
        // console.log("BranchResponse", BranchResponse.data);

        const AcademicResponse = await PostApi(reqparams1, 'ACADEMICTYPE');
        // console.log("AcademicResponse", AcademicResponse.data);

        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;
        const rowdata1 = [];
        const rowdata2 = [];
        const rowdata3 = [];

        await SemisterResponse?.data.reduce(async (promise, res) => {
            await promise;
            const opts = {
                key: res.id,
                value: res.name
            }
            if (userdata?.user?.semister == res.id) {
                setPl3(res.name);
            }
            rowdata1.push(opts);
            if (counter1 == SemisterResponse.data.length - 1) {

                setSemisterData(rowdata1);
            }
            counter1++;
        }, Promise.resolve());

        await BranchResponse.data.reduce(async (promise, res) => {
            await promise;
            const opts = {
                key: res.id,
                value: res.name
            }
            if (userdata?.user?.branch == res.id) {
                setPl2(res.name);
            }
            rowdata2.push(opts);
            if (counter2 == BranchResponse.data.length - 1) {

                setBranchData(rowdata2);


            }
            counter2++;
        }, Promise.resolve());

        await AcademicResponse.data.reduce(async (promise, res) => {
            await promise;
            const opts = {
                key: res.id,
                value: res.name
            }
            if (userdata?.user?.academicyear == res.id) {
                setPl1(res.name);
            }
            rowdata3.push(opts);
            if (counter3 == AcademicResponse.data.length - 1) {

                setAcademictypes(rowdata3);
            }
            counter3++;
        }, Promise.resolve());


        setSelected1(userdata?.user?.branch);
        setSelected2(userdata?.user?.semister);
        setSelected(userdata?.user?.academicyear);

    }
    const handleRefreshResume = () => {
        setReload(true)
        setTimeout(() => {
            setReload(false)
            loaddata()
        }, 1000)

    }
    const handleGenerateResume = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);
        if (sessiondetails != null) {
            const ReqData = {
                userid: userdata.id
            }
            // const reqRespnse = await PostApi(ReqData, "GENERATERESUME7");
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME8");
            if (reqRespnse.status === 'success') {

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
    return (
        <div >
            <button className='btn btn-primary mb-2' onClick={handleRefreshResume}>Refresh to Load the resume</button>
   <button className='btn btn-success mb-2' style={{marginLeft:"20px"}} onClick={handleGenerateResume}>Generate Resume</button>
{reload ? <>

    <div style={{position:"relative"}}>
    <div style={{position:'absolute',top:"200px",left:"215px"}}>
   <ClipLoader
  
  loading={reload}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>
   </div>
    </div>
  <div style={{boxShadow:"0px 0px 10px gray",opacity:"0.5",paddingLeft:'10px'}}>
  <div className='row p-1' >
  
  <div className='col-3 ' >
      {base64Img ? <img src={`data:image/jpeg;base64,${base64Img}`} /> : <img src="https://tse1.mm.bing.net/th?id=OIP.lsaqXiF1qoA0lNGxssv4dQHaFy&pid=Api&P=0&h=180" />}
  </div>
  <div className='col-9 d-flex justify-content-center'>
      <div className='mt-4 text-center' >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</div>
          <div style={{ fontSize: "17px", fontWeight: "bold" }}> {title}</div>
          <div>{email}</div>
          <div>{mobilenumber}</div>
      </div>
  </div>
</div>

<div className='p-2 mt-3'>
  <div style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>About</div>
  <div className='text-light' style={{ fontSize: "14px" }}>
      {summaryData != "" ? <div style={{ color: "black", fontStyle: 'italic' }}>{summaryData}</div> :<div style={{ color: "black", fontStyle: 'italic' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>}
  </div>

  <div className='row'>
      <div className='col-8'>
        {
            education.length >0 ? <>  <div>
            <div className='mt-3 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Education</div>

            <div style={{ borderLeft: "2px solid #18453b" }}>
                {education.map(ele => {
                    return (<>
                        <div className='row' >
                            <p className='col-8 text-dark mt-1' style={{ fontSize: "18px" }}><span style={{ display: "inline-block", width: "18px", height: "18px", borderRadius: "50px", border: "3px solid black", zIndex: "999", position: "relative", right: "10px", backgroundColor: "white" }}></span>{ele.education}</p>
                            <p className='col-4 text-dark mt-1' style={{ fontSize: "14px" }}> {`( ${ele.startyear} - ${ele.endyear} )`}</p>
                        </div>
                        <div style={{ marginTop: "-15px", marginLeft: "15px" }}>
                       <b>College : </b> {ele.college}
                        </div>
                    </>)
                })}
            </div>
        </div></>:""
        }

          {userprojects.length>0 ? <><div>
              <div className='mt-3 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Projects</div>

              <div style={{ borderLeft: "2px solid #18453b" }}>
                  {userprojects.map(ele => {
                      return (<>
                          <div className='row' >
                              <p className='col-8 text-dark mt-1' style={{ fontSize: "18px" }}><span style={{ display: "inline-block", width: "18px", height: "18px", borderRadius: "50px", border: "3px solid black", zIndex: "999", position: "relative", right: "10px", backgroundColor: "white" }}></span>{ele.name} </p>
                              <p className='col-4 text-dark mt-1' style={{ fontSize: "14px" }}> {`( ${ele.duration} )`}</p>
                          </div>
                          <div style={{ marginTop: "-15px", marginLeft: "15px" }}>
                              {ele.description}
                          </div>
                      </>)
                  })}
              </div>
          </div></>:""}



      </div>
      <div className='col-4' style={{ borderLeft: "2px solid #18453b" }}>
          {skills.length > 0? <>
          
            <div>
              <div className='mt-3 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Skills</div>
              <ul>
                  {skills.map(ele => {
                      return (
                          <li>{ele.name}</li>
                      )
                  })}
              </ul>
          </div></>:""}
         {userHobbies.length >0 ? <>
            <div>
              <div className='mt-4 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Hobbies</div>

              <ul>
                  {userHobbies.map(ele => {
                      return (
                          <li><span style={{display:"inline-block",width:"10px",height:"10px", borderRadius:"50%", backgroundColor:'black',marginRight:"4px"}}></span>{ele.name}</li>
                      )
                  })}
              </ul>
          </div>
         </>:""}

         {references.length >0 ? <>
            <div>
              <div className='mt-4 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>References</div>

              <ul>
                  {references.map(ele => {
                      return (
                          <li ><span style={{display:"inline-block",width:"10px",height:"10px", borderRadius:"50%", backgroundColor:'black',marginRight:"4px"}}></span><b>{ele.name}</b> <div style={{marginLeft:"11px"}}>{ele.mobilenumber}</div> </li>
                      )
                  })}
              </ul>
          </div>
         </> : ""}

      </div>



  </div>
</div>
  </div>
</>: <>

<div style={{boxShadow:"0px 0px 10px gray",paddingLeft:'10px' }}>
<div className='row p-1' >
                <div className='col-3 '>
                    {base64Img ? <img src={`data:image/jpeg;base64,${base64Img}`} /> : <img src="https://tse1.mm.bing.net/th?id=OIP.lsaqXiF1qoA0lNGxssv4dQHaFy&pid=Api&P=0&h=180" />}
                </div>
                <div className='col-9 d-flex justify-content-center'>
                    <div className='mt-4 text-center' >
                        <div style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</div>
                        <div style={{ fontSize: "17px", fontWeight: "bold" }}> {title}</div>
                        <div>{email}</div>
                        <div>{mobilenumber}</div>
                    </div>
                </div>
            </div>

            <div className='p-2 mt-3'>
                <div style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>About</div>
                <div className='text-light' style={{ fontSize: "14px" }}>
                    {summaryData != "" ? <div style={{ color: "black", fontStyle: 'italic' }}>{summaryData}</div> : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                </div>

                <div className='row'>
                    <div className='col-8'>
                      {education.length >0 ? <>
                        <div>
                            <div className='mt-3 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Education</div>

                            <div style={{ borderLeft: "2px solid #18453b" }}>
                                {console.log(userprojects, "userprojects ")}
                                {education.map(ele => {
                                    return (<>
                                        <div className='row' >
                                            <p className='col-8 text-dark mt-1' style={{ fontSize: "18px" }}><span style={{ display: "inline-block", width: "18px", height: "18px", borderRadius: "50px", border: "3px solid black", zIndex: "999", position: "relative", right: "10px", backgroundColor: "white" }}></span>{ele.education}</p>
                                            <p className='col-4 text-dark mt-1' style={{ fontSize: "14px" }}> {`( ${ele.startyear} - ${ele.endyear} )`}</p>
                                        </div>
                                        <div style={{ marginTop: "-15px", marginLeft: "15px" }}>
                                       <b>College : </b> {ele.college}
                                        </div>
                                    </>)
                                })}
                            </div>
                        </div>
                      </>:""}

                        {userprojects.length > 0 ? <>
                        
                            <div>
                            <div className='mt-3 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Projects</div>

                            <div style={{ borderLeft: "2px solid #18453b" }}>
                                {userprojects.map(ele => {
                                    return (<>
                                        <div className='row' >
                                            <p className=' col-8 text-dark mt-1' style={{ fontSize: "18px" }}><span style={{ display: "inline-block", width: "18px", height: "18px", borderRadius: "50px", border: "3px solid black", zIndex: "999", position: "relative", right: "10px", backgroundColor: "white" }}></span>{ele.name} </p>
                                            <p className='col-4 text-dark mt-1' style={{ fontSize: "14px" }}> {`( ${ele.duration} )`}</p>
                                        </div>
                                        <div style={{ marginTop: "-15px", marginLeft: "15px" }}>
                                            {ele.description}
                                        </div>
                                    </>)
                                })}
                            </div>
                        </div>
                        </>:""}



                    </div>
                    <div className='col-4' style={{ borderLeft: "2px solid #18453b" }}>
                        {skills.length > 0 ? <>
                            <div>
                            <div className='mt-3 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Skills</div>
                            <ul>
                                {skills.map(ele => {
                                    return (
                                        <li>{ele.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        </>:""}
                      {userHobbies.length >0 ? <>
                        <div>
                            <div className='mt-4 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>Hobbies</div>

                            <ul>
                                {userHobbies.map(ele => {
                                    return (
                                        <li><span style={{display:"inline-block",width:"10px",height:"10px", borderRadius:"50%", backgroundColor:'black',marginRight:"4px"}}></span>{ele.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                      </>:""}

                      {references.length >0 ?<>
                        <div>
                            <div className='mt-4 pb-1' style={{ fontSize: "20px", borderBottom: "2px solid #18453b", fontWeight: "bolder" }}>References</div>

                            <ul>
                                {references.map(ele => {
                                    return (
                                        <li ><span style={{display:"inline-block",width:"10px",height:"10px", borderRadius:"50%", backgroundColor:'black',marginRight:"4px"}}></span><b>{ele.name}</b> <div style={{marginLeft:"11px"}}>{ele.mobilenumber}</div> </li>
                                    )
                                })}
                            </ul>
                        </div>
                      </>:""}

                    </div>



                </div>
            </div>
</div>
</>}



        </div>
    )
}

export default Fromat7