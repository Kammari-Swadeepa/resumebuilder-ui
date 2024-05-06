import React, { useEffect, useState } from 'react';
// import { Styles } from '../../pages/account/styles/account'
import { PostApi } from '../../services/commonServices';

import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom';
import "./format1.css";

function Format2() {

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
    const [userdata,setUserData] =useState({})
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
                ptype: 'GETUSER',
                query: { id: userdata.user.id }
            }
            const resDat = await PostApi(reqparam, 'USERPROJECTS');
            //  console.log("resDat===",resDat);
            if (resDat.data != null) {
                setSummaryData(resDat.data.about);
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
    return (

        <div style={{boxShadow:"0px 0px 7px gray"}}>
            <div className='row m-0 p-0' style={{ backgroundColor: "rgb(245,245,245)" }}>
                <div className='col-2 bg-light'>
                    {base64Img ? <img src={`data:image/jpeg;base64,${base64Img}`} />: <img src="https://tse1.mm.bing.net/th?id=OIP.lsaqXiF1qoA0lNGxssv4dQHaFy&pid=Api&P=0&h=180" />}
                    

                </div>
                <div className='col-5 mt-2'>
                    <h3 className='text-primary'>{name}</h3>
                    <span>{title ? title: "Your Designation"}</span>
                </div>
                <div className='col-5 text-right mt-3' >
                    <div className='text-dark' style={{ marginRight: "10px" }}>{email}</div>
                    <div className='text-dark' style={{ marginRight: "10px" }}>+91 {mobilenumber}</div>
                </div>
            </div>
            <div style={{paddingLeft:"10px"}}>
            <div >
                <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>PROFILE</span></h5>
                <div style={{ fontSize: "14px" }}>
                    Logical and organised individual with a strong foundation in software engineering. Proficient in C++, C#, PHP and Java. Seeking to raise coding KPIs by providing error-free codes. Ability to translate business requirements into innovative software solutions. Excellent teamwork, interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.
                </div>
            </div>
            <div>
                <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>PROJECTS</span></h5>
                {userprojects.length>0? userprojects.map(ele => {
                    return (
                        <div className='mt-2'>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}>{ele.name} - {`( ${ele.duration} )`}</div>
                            <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                                <li style={{ fontSize: "14px" }}>{ele.description}</li>
                            </ul>
                        </div>
                    )
                }):<>
                <div className='mt-2'>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}>Example Project 1 -{`( 3 months )`}</div>
                            <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                                <li style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}>Example Project 2 - {`( 6 months )`}</div>
                            <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                                <li style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                            </ul>
                        </div>
                </>}
            </div>
            <div>
                <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>EDUCATION</span></h5>
                {console.log(education, "education")}
                {education.length >0? education.map(ele => {
                    return (
                        <div style={{marginLeft:"20px"}}>
                            <div style={{fontSize:"16px",fontWeight:"bold"}}>{ele.startyear} - {ele.endyear}</div>
                            <div >{ele.education} - {ele.college}</div>
                        </div>


                    )
                }):<>
                 <div style={{marginLeft:"20px"}}>
                            <div style={{fontSize:"16px",fontWeight:"bold"}}>20xx - 20xx</div>
                            <div >xyz-university - xyz-college</div>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <div style={{fontSize:"16px",fontWeight:"bold"}}>20xx - 20xx</div>
                            <div >xyz-university - xyz-college</div>
                        </div>
                </>}
            </div>
            <div >
                <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>SKILLS</span></h5>
                {console.log(skills, "skills")}
                <ul style={{marginLeft:"20px"}}>
                {skills.length>0 ? skills.map(ele => {
                    return (
                        <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</li>
                    )
                }): <>
                <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>skill 1</li>
                <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>skill2</li>
                </>}
                </ul>
               
            </div>
            <div>
             
                <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>DETAILS</span></h5>
                <div style={{marginLeft:"20px"}}>
                <span style={{fontWeight:"bold"}}>Address:</span>
                <div >{userdata?.user?.address ? userdata?.user?.address: "xxxx/yyyy/zzzz" }</div>
                <span style={{fontWeight:"bold"}}>Phone:</span>
                <div >{mobilenumber}</div>
                <span style={{fontWeight:"bold"}}>Email:</span>
                <div >{email}</div>

                </div>
            </div>
           {references.length >0 ?  <div>
             
             <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>REFERENCES</span></h5>
             <div style={{marginLeft:"20px"}}>
            {references.map(ele=>{
                return(
                    <><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span> <span style={{fontWeight:"bold"}}>{ele.name}</span>
                    <div >{ele.mobilenumber}</div>
                    </>
                )
            })}
            

             </div>
         </div>: ""}
         <div>
             
             <h5 className='mt-3'><span style={{ textDecoration: "underline" }}>HOBBIES</span></h5>
             <div style={{marginLeft:"20px"}}>
            <ul>
            {userHobbies.length >0 ? userHobbies.map(ele=>{
                return(
                    <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>{ele.name}</li>
                )
            }): <>
              <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 1</li>
              <li><span style={{display:"inline-block", width:"8px", height:"8px", borderRadius:'50%',backgroundColor:"black",marginRight:"3px"}}></span>Hobbie 2</li>
            </>}
            </ul>
            

             </div>
         </div>
        </div>
        </div>

    )
}

export default Format2