import React, { useEffect, useState } from 'react';
// import { Styles } from '../../pages/account/styles/account'
import { PostApi } from '../../services/commonServices';

import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import "./format3.css";
import { toast } from 'react-toastify';

function Format3() {
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
    const [declarationData,setDeclarationData] =useState("")


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
    const [reload,setReload] = useState(false)
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
            setData(userdata)
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

        await SemisterResponse.data.reduce(async (promise, res) => {
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
    const handleRefreshResume =()=>{
        setReload(true)
        setTimeout(()=>{
            setReload(false)
            loaddata()
        },1000)
        
    }

    const handleGenerateResume =async ()=>{
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);
        if (sessiondetails != null) {
            const ReqData = {
                userid: userdata.id
            }
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME2");
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
        <>
        <button className='btn btn-primary mb-2' onClick={handleRefreshResume}>Refresh to Load the resume</button>
        <button className='btn btn-success mb-2' style={{marginLeft:"20px"}} onClick={handleGenerateResume}>Generate Resume</button>
        {reload ?<div style={{position:"relative" }}>
        <div style={{position:'absolute',top:"200px",left:"260px"}}>
   <ClipLoader
  
  loading={reload}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>

   </div>
   <div style={{ backgroundColor: " rgba(72,61,139,0.2)", padding: "5px",boxShadow:"0px 0px 7px gray",opacity:"0.5" }}>
            <div className='row header-container bg-light' >
                <div className='col-6'>
                    <h3 className='text-primary mt-2'>{name}</h3>
                    <p className='text-dark ' style={{ marginTop: "-8px" }}>{title ? title: "Your Designation"}</p>
                </div>
                <div className='col-6 text-right'>
                    <p className='text-dark mt-3'>{email}</p>
                    <p className='text-dark ' style={{ marginTop: "-8px" }}>{mobilenumber}</p>
                </div>
            </div>
            <div className='row header-container bg-light p-2' style={{ textIndent: "30px", fontSize: "15px" }}>
              {summaryData !="" ? summaryData : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
            </div>
            <div className='container-h5'>
                <h5 style={{ marginBottom: "-8px" }}>Education</h5>
                <div className='header-container1  bg-light' >
                    {
                       education.length>0? education.map(ele => {
                            return (
                                <>
                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}>{ele.education}</p>
                                        <p style={{color:"orange"}}>{ele.startyear} - {ele.endyear}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px"}} className='p-2'>{ele.college}</p>
                                </>
                            )
                        }): <>
                        <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}>xyz-university</p>
                                        <p style={{color:"orange"}}>20xx - 20xx</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px"}} className='p-2'>xxx - collage</p>

                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}>abc-university</p>
                                        <p style={{color:"orange"}}>20xx - 20xx</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px"}} className='p-2'>xxx - collage</p>
                        </>
                    }

                </div>
            </div>
            <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>Skills</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                    {
                      skills.length>0 ?  skills.map(ele => {
                            return (
                               <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</li>
                            )
                        }): 
                       <>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>skill 1</li>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>skill 2</li>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>skill 3</li>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>skill 4</li>
                       </>
                    }
                    </ul>
                   

                </div>
            </div>
            <div className='container-h5'>
                <h5 style={{ marginBottom: "-8px" }}>Projects</h5>
                <div className='header-container1  bg-light' >
                    {
                     userprojects.length >0 ?   userprojects.map(ele => {
                            return (
                                <>
                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}><b>{ele.name}</b></p>
                                        <p style={{color:"orange"}}>{`( ${ele.duration} )`}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px",textIndent:"30px"}} className='p-2'>{ele.description}</p>
                                </>
                            )
                        }) : <>
                        <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}><b>Example Project - 1</b></p>
                                        <p style={{color:"orange"}}>{`( 3 months )`}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px",textIndent:"30px"}} className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}><b>Example Project - 2</b></p>
                                        <p style={{color:"orange"}}>{`( 3 months )`}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px",textIndent:"30px"}} className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </>
                    }

                </div>
            </div>
            <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>Hobbies</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                    {
                       userHobbies.length >0 ? userHobbies.map(ele => {
                            return (
                               <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</li>
                            )
                        }):
                        <>
                         <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 1</li>
                         <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 2</li>
                         <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 3</li>
                        </>
                    }
                    </ul>
                   

                </div>
            </div>
            <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>References</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                    {
                      references.length >0 ?  references.map(ele => {
                            return (
                               <li style={{margin:"3px 15px"}}><b><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</b> - {ele.mobilenumber} </li>
                            )
                        }):
                        ""
                    }
                    </ul>
                   

                </div>
            </div>
            {declarationData !=""  ?  <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>Declaration</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                 
                               <li style={{margin:"3px 15px"}}><b><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span></b>  {declarationData} </li>
                           
                    </ul>
                   

                </div>
            </div>:""}
        </div>
        </div>:  <div style={{ backgroundColor: " rgba(72,61,139,0.2)", padding: "5px",boxShadow:"0px 0px 7px gray" }}>
            <div className='row header-container bg-light' >
                <div className='col-6'>
                    <h3 className='text-primary mt-2'>{name}</h3>
                    <p className='text-dark ' style={{ marginTop: "-8px" }}>{title ? title: "Your Designation"}</p>
                </div>
                <div className='col-6 text-right'>
                    <p className='text-dark mt-3'>{email}</p>
                    <p className='text-dark ' style={{ marginTop: "-8px" }}>{mobilenumber}</p>
                </div>
            </div>
            <div className='row header-container bg-light p-2' style={{ textIndent: "30px", fontSize: "15px" }}>
              {summaryData !="" ? summaryData : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
            </div>
            <div className='container-h5'>
                <h5 style={{ marginBottom: "-8px" }}>Education</h5>
                <div className='header-container1  bg-light' >
                    {
                       education.length>0? education.map(ele => {
                            return (
                                <>
                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}>{ele.education}</p>
                                        <p style={{color:"orange"}}>{ele.startyear} - {ele.endyear}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px"}} className='p-2'>{ele.college}</p>
                                </>
                            )
                        }): <>
                        <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}>xyz-university</p>
                                        <p style={{color:"orange"}}>20xx - 20xx</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px"}} className='p-2'>xxx - collage</p>

                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}>abc-university</p>
                                        <p style={{color:"orange"}}>20xx - 20xx</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px"}} className='p-2'>xxx - collage</p>
                        </>
                    }

                </div>
            </div>
            <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>Skills</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                    {
                      skills.length>0 ?  skills.map(ele => {
                            return (
                               <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</li>
                            )
                        }): 
                       <>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",margin:"3px 15px"}}></span>skill 1</li>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",margin:"3px 15px"}}></span>skill 2</li>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",margin:"3px 15px"}}></span>skill 3</li>
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",margin:"3px 15px"}}></span>skill 4</li>
                       </>
                    }
                    </ul>
                   

                </div>
            </div>
            <div className='container-h5'>
                <h5 style={{ marginBottom: "-8px" }}>Projects</h5>
                <div className='header-container1  bg-light' >
                    {
                     userprojects.length >0 ?   userprojects.map(ele => {
                            return (
                                <>
                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}><b>{ele.name}</b></p>
                                        <p style={{color:"orange"}}>{`( ${ele.duration} )`}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px",textIndent:"30px"}} className='p-2'>{ele.description}</p>
                                </>
                            )
                        }) : <>
                        <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}><b>Example Project - 1</b></p>
                                        <p style={{color:"orange"}}>{`( 3 months )`}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px",textIndent:"30px"}} className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                    <div className='d-flex justify-content-between p-2' style={{marginBottom:"-37px"}}>
                                        <p style={{color:"orange"}}><b>Example Project - 2</b></p>
                                        <p style={{color:"orange"}}>{`( 3 months )`}</p>
                                    </div>
                                    <p style={{color:"black",marginBottom:"-13px",textIndent:"30px"}} className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </>
                    }

                </div>
            </div>
            <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>Hobbies</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                    {
                       userHobbies.length >0 ? userHobbies.map(ele => {
                            return (
                               <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</li>
                            )
                        }):
                        <>
                         <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 1</li>
                         <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 2</li>
                         <li style={{margin:"3px 15px"}}><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 3</li>
                        </>
                    }
                    </ul>
                   

                </div>
            </div>
           {references.length >0 ?  <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>References</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                    {
                      references.length >0 ?  references.map(ele => {
                            return (
                               <li style={{margin:"3px 15px"}}><b><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</b> - {ele.mobilenumber} </li>
                            )
                        }):
                        ""
                    }
                    </ul>
                   

                </div>
            </div>:""}

            {declarationData !=""  ?  <div className='container-h5 mt-4'>
                <h5 style={{ marginBottom: "-8px" }}>Declaration</h5>
                <div className='header-container1  bg-light' >
                    <ul>
                 
                               <li style={{margin:"3px 15px"}}><b><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span></b>  {declarationData} </li>
                           
                    </ul>
                   

                </div>
            </div>:""}
        </div>}
        </>
      
    )
}

export default Format3