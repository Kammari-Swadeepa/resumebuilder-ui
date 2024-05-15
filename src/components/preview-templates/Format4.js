import React, { useEffect, useState } from 'react';
// import { Styles } from '../../pages/account/styles/account'
import { PostApi } from '../../services/commonServices';

import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from 'react-router-dom';
import "./format4.css";
import { toast } from 'react-toastify';
function Format4() {
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
    const [userdata1, setUserData1] = useState({})
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
            setUserData1(userdata)
            console.log(userdata);
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
            const reqRespnse = await PostApi(ReqData, "GENERATERESUME4");
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
    {reload ?<div style={{position:"relative",marginLeft:"17px" }}>
        <div style={{position:'absolute',top:"200px",left:"260px"}}>
   <ClipLoader
  
  loading={reload}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>
   </div>
        <div className='row' style={{boxShadow:"0px 0px 7px gray",opacity:"0.5"}}>
        <div className='col-4 left-container-f4 pb-3' style={{backgroundColor:"#00b7eb"}}>
            {

base64Img ?  <img className='mt-3' src={`data:image/jpeg;base64,${base64Img}`} style={{width:'200px',height:'200px',position:"relative", left:"7px"}} />: <img className='mt-3' src="https://tse1.mm.bing.net/th?id=OIP.lsaqXiF1qoA0lNGxssv4dQHaFy&pid=Api&P=0&h=180" style={{width:'200px',height:'200px',position:"relative", left:"7px"}} /> 
            }
       
        <p className='text-light mt-1 text-center p-0'>{name.toUpperCase()}</p>
        <p className=' text-center' style={{marginTop:"-15px", fontSize:"14px",color:" rgba(220,220,220,0.9"}}>{title ? title: "Your Designation"}</p>
        <ul style={{borderBottom:"2px solid white",paddingBottom:"15px"}}>
        <li ><span></span> <div style={{fontWeight:"bold", display:"inline-block"}}>Address:</div>
        <div style={{fontSize:"13px", marginLeft:"15px"}}>{userdata1?.user?.address ? userdata1?.user?.address: "xxxx/yyyy/zzzz" }</div>
        </li>    
        <li style={{marginLeft:"15px"}}> <div style={{fontWeight:"bold", display:"inline-block"}}>Phone:</div>
        <div style={{fontSize:"13px", marginLeft:"15px"}}>+91 {mobilenumber}</div>
        </li> 
        <li style={{marginLeft:"15px"}}> <div style={{fontWeight:"bold", display:"inline-block"}}>Email:</div>
        <div style={{fontSize:"11px", marginLeft:"15px"}}>{email}</div>
        </li> 
        </ul>
        <div className='mt-3'>
            <p style={{color:"black", fontWeight:"bold", fontSize:"17px",marginLeft:"15px"}}>Skills</p>
            <ul style={{borderBottom:"2px solid white",paddingBottom:"15px", marginTop:"-15px"}}>
            {
              skills.length>0 ?  skills.map(ele=>{
                    return(
                        <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>{ele.name}</div>
     
        </li> 
                    )
                }): 
                <>
                <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>skill 1</div></li>
                <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>skill 2</div></li>
                <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>skill 3</div></li>
                </>
            }
            </ul>
        </div>
 {references.length > 0? <div className='mt-3'>
  <p style={{color:"black", fontWeight:"bold", fontSize:"17px",marginLeft:"15px"}}>References</p>
  <ul style={{borderBottom:"2px solid white",paddingBottom:"15px",marginTop:"-15px",marginLeft:"15px"}}>
      {
        references.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:" rgba(220,220,220,0.9"}}>{ele.name}</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}>{ele.mobilenumber}</div>
                </li> 
            )
        })
      }   
        
        </ul>
  </div>: "" } 
        </div>
        <div className='col-8 right-container-f4' >
 <div>
 <p className='profile ' style={{color:"#00b7eb"}}>PROFILE</p>
    <p style={{color:"black", marginLeft:"15px", marginTop:"-20px",fontSize:"14px"}}>  {summaryData !="" ? summaryData:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}</p>
 </div>
  <div>
 <p className='profile ' style={{color:"#00b7eb"}}>Projects</p>
 <ul style={{marginLeft:"20px",marginTop:"-20px"}}>
      {
       userprojects.length >0 ? userprojects.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>{ele.name}</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}><b>Duration:</b> {ele.duration}</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> {ele.description}</div>
                </li> 
            )
        }): <>
        <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>Example Project 1</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}><b>Duration:</b> 3months</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </li>
                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>Example Project 1</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}><b>Duration:</b> 3months</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </li>  
        </>
      }   
        
        </ul>
 </div>

 <div>
 <p className='profile ' style={{color:"#00b7eb"}}>Education</p>
 <ul style={{marginLeft:"20px",marginTop:"-20px"}}>
      {
       education.length>0 ? education.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>{ele.education}</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}> {ele.startyear} - {ele.endyear}</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> {ele.college}</div>
                </li> 
            )
        }):
        <>
        <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>xxx- university</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}> 20xx - 20xx</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> xyz - college</div>
                </li>

                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>xxx- university</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}> 20xx - 20xx</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> xyz - college</div>
                </li>
        </>
      }   
        
        </ul>
 </div>
 <div>
 <p className='profile ' style={{color:"#00b7eb"}}>Hobbies</p>
 <ul style={{marginLeft:"20px",marginTop:"-20px"}}>
      {
       userHobbies.length >0? userHobbies.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>{ele.name}</div>
               
                </li> 
            )
        }):
      <>
      
      <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>Hobbie 1</div>
               
               </li> 
                  <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>Hobbie 2</div>
              
                  </li> 

                  <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>Hobbie 3</div>
              
              </li> 
      </>
      }   
        
        </ul>
 </div>
</div>

    </div>
    </div>: <div className='row' style={{boxShadow:"0px 0px 7px gray",marginLeft:"2px" }}>
        <div className='col-4 left-container-f4 pb-3' style={{backgroundColor:"#00b7eb"}}>
            {

base64Img ?  <img className='mt-3' src={`data:image/jpeg;base64,${base64Img}`} style={{width:'200px',height:'200px',position:"relative", left:"7px"}} />: <img className='mt-3' src="https://tse1.mm.bing.net/th?id=OIP.lsaqXiF1qoA0lNGxssv4dQHaFy&pid=Api&P=0&h=180" style={{width:'200px',height:'200px',position:"relative", left:"7px"}} /> 
            }
       
        <p className='text-light mt-1 text-center p-0'>{name.toUpperCase()}</p>
        <p className=' text-center' style={{marginTop:"-15px", fontSize:"14px",color:" rgba(220,220,220,0.9"}}>{title ? title: "Your Designation"}</p>
        <ul style={{borderBottom:"2px solid white",paddingBottom:"15px"}}>
        <li ><span></span> <div style={{fontWeight:"bold", display:"inline-block"}}>Address:</div>
        <div style={{fontSize:"13px", marginLeft:"15px"}}>{userdata1?.user?.address ? userdata1?.user?.address: "xxxx/yyyy/zzzz" }</div>
        </li>    
        <li style={{marginLeft:"15px"}}> <div style={{fontWeight:"bold", display:"inline-block"}}>Phone:</div>
        <div style={{fontSize:"13px", marginLeft:"15px"}}>+91 {mobilenumber}</div>
        </li> 
        <li style={{marginLeft:"15px"}}> <div style={{fontWeight:"bold", display:"inline-block"}}>Email:</div>
        <div style={{fontSize:"11px", marginLeft:"15px"}}>{email}</div>
        </li> 
        </ul>
        <div className='mt-3'>
            <p style={{color:"black", fontWeight:"bold", fontSize:"17px",marginLeft:"15px"}}>Skills</p>
            <ul style={{borderBottom:"2px solid white",paddingBottom:"15px", marginTop:"-15px"}}>
            {
              skills.length>0 ?  skills.map(ele=>{
                    return(
                        <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>{ele.name}</div>
     
        </li> 
                    )
                }): 
                <>
                <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>skill 1</div></li>
                <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>skill 2</div></li>
                <li style={{marginLeft:"15px"}}><span></span> <div style={{ display:"inline-block"}}>skill 3</div></li>
                </>
            }
            </ul>
        </div>
 {references.length > 0? <div className='mt-3'>
  <p style={{color:"black", fontWeight:"bold", fontSize:"17px",marginLeft:"15px"}}>References</p>
  <ul style={{borderBottom:"2px solid white",paddingBottom:"15px",marginTop:"-15px",marginLeft:"15px"}}>
      {
        references.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:" rgba(220,220,220,0.9"}}>{ele.name}</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}>{ele.mobilenumber}</div>
                </li> 
            )
        })
      }   
        
        </ul>
  </div>: "" } 
        </div>
        <div className='col-8 right-container-f4' >
 <div>
 <p className='profile ' style={{color:"#00b7eb"}}>PROFILE</p>
    <p style={{color:"black", marginLeft:"15px", marginTop:"-20px",fontSize:"14px"}}> {summaryData !="" ? summaryData:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}</p>
 </div>
  <div>
 <p className='profile ' style={{color:"#00b7eb"}}>Projects</p>
 <ul style={{marginLeft:"20px",marginTop:"-20px"}}>
      {
       userprojects.length >0 ? userprojects.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>{ele.name}</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}><b>Duration:</b> {ele.duration}</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> {ele.description}</div>
                </li> 
            )
        }): <>
        <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>Example Project 1</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}><b>Duration:</b> 3months</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </li>
                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>Example Project 1</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}><b>Duration:</b> 3months</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </li>  
        </>
      }   
        
        </ul>
 </div>

 <div>
 <p className='profile ' style={{color:"#00b7eb"}}>Education</p>
 <ul style={{marginLeft:"20px",marginTop:"-20px"}}>
      {
       education.length>0 ? education.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>{ele.education}</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}> {ele.startyear} - {ele.endyear}</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> {ele.college}</div>
                </li> 
            )
        }):
        <>
        <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>xxx- university</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}> 20xx - 20xx</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> xyz - college</div>
                </li>

                <li ><span></span> <div style={{ display:"inline-block",color:"black", fontWeight:"bold"}}>xxx- university</div>
                {/* {console.log(userdata1?.user.address,"check user dta")} */}
                <div style={{fontSize:"13px", marginLeft:"15px"}}> 20xx - 20xx</div>
                <div style={{fontSize:"13px", marginLeft:"15px"}}> xyz - college</div>
                </li>
        </>
      }   
        
        </ul>
 </div>
 <div>
 <p className='profile ' style={{color:"#00b7eb"}}>Hobbies</p>
 <ul style={{marginLeft:"20px",marginTop:"-20px"}}>
      {
       userHobbies.length >0? userHobbies.map(ele=>{
            return(
                <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>{ele.name}</div>
               
                </li> 
            )
        }):
      <>
      
      <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>Hobbie 1</div>
               
               </li> 
                  <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>Hobbie 2</div>
              
                  </li> 

                  <li ><span></span> <div style={{ display:"inline-block",color:"black"}}>Hobbie 3</div>
              
              </li> 
      </>
      }   
        
        </ul>
 </div>
</div>

    </div>}
    </>
   
  )
}

export default Format4