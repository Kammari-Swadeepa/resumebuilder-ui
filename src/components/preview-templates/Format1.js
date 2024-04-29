import React, { useEffect, useState } from 'react';
// import { Styles } from '../../pages/account/styles/account'
import { PostApi } from '../../services/commonServices';

import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom';
import "./format1.css";
function Format1() {
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
    const [userHobbies,setUserHobbies] = useState([]);
    const [references, setReferences] =useState([])
    const history = useLocation()



    useEffect(() => {
        loaddata();

    }, []);

    const loaddata = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

        const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
        // console.log("userdata in Mydetails", userdata);

        if (userdata != null) {
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

            const responseprojects = await PostApi(reqparam3 , 'USERPROJECTS');
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
        <div className='d-flex justify-content-center row'>
            <div className='col-12'>
                <div className='header-container p-3 '>
                    <h2 className='text-dark'> {name}</h2>
                    <img src={`data:image/jpeg;base64,${base64Img}`} width="100" height="100" />
                </div>
                <div className='user-info'>
                    <div><b>Phone: </b> {mobilenumber}</div>
                    <div><b>Email: </b> {email}</div>
                    <div><b>Designation: </b> {title}</div>
                </div>
                <div className='description-container'>
                    <div>
                        {/* {console.log(summaryData,"summaryData")} */}
                        Logical and organised individual with a strong foundation in software engineering. Proficient in C++, C#, PHP and Java. Seeking to raise coding KPIs by providing error-free codes. Ability to translate business requirements into innovative software solutions. Excellent teamwork, interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.
                    </div>
                </div>
                <div className='education row mt-3'>
                    <div className='left col-3'>
                        <h5 className='text-right'>Education</h5>
                    </div>
                    <div className='right col-9'>
                        {console.log(education, "check education")}
                        {education.map(ele => {
                            return (
                                <div style={{ marginLeft: "15px" }}>
                                    <h6>{ele.education} {ele.startyear} - {ele.endyear}  </h6>
                                    <div><b> College</b>: {ele.college}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='education row'>
                    <div className='left col-3 pt-3'>
                        <h5 className='text-right'>Skills</h5>
                    </div>
                    <div className='right col-9 pt-3'>
                        <ul style={{ marginLeft: "15px" }}>
                            {skills.map(ele => {
                                return (

                                    <li>{ele.name}</li>

                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='education row'>
                    <div className='left col-3 pt-3'>
                        <h5 className='text-right'>Projects</h5>
                    </div>
                    <div className='right col-9 pt-3'>
                        <ul style={{ marginLeft: "15px" }}>
                            {console.log(userprojects, "check user projects")}
                            {userprojects.map(ele=>{
                                return(
                                    <div className='mb-3'>
                                        <div style={{fontSize:"16px", fontWeight:"bold"}}>{ele.name} - {ele.duration}</div>
                                        <ul >
                                            <li style={{fontSize:"14px"}}>
                                                {ele.description}
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='education row'>
                    <div className='left col-3 pt-3'>
                        <h5 className='text-right'>Hobbies</h5>
                    </div>
                    <div className='right col-9 pt-3'>
                        <ul style={{ marginLeft: "15px" }}>
                       
                            {userHobbies.map(ele=>{
                                return(
                                   <li>{ele.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='education row'>
                    <div className='left col-3 pt-3'>
                        <h5 className='text-right'>References</h5>
                    </div>
                    <div className='right col-9 pt-3'>
                        <ul style={{ marginLeft: "15px" }}>
                       {console.log(references,"references")}
                            {references.map(ele=>{
                                return(
                                   <li><b>{ele.name}</b>{` ( ${ele.mobilenumber} )`}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Format1