import React from 'react'
import { useEffect, useState } from 'react';
import { PostApi } from '../../services/commonServices';

import { Styles } from "./education";
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap';

function AddMarks() {
    useEffect(() => {
        sectionFun();
    }, [])

    // const data=useLocation();

    const fields = {
        branchid: '',
        branchname: '',
        semisterid: '',
        semistername: '',
        groupid: '',
        groupname: '',
        marks: ''
    }
    const [branches, setBranches] = useState([]);
    const [year, setYear] = useState([]);
    const [semister, setSemister] = useState([]);
    const [btechData, setBtechData] = useState(fields);
    var [groupname1,setGroupname1]=useState('')
    var [branchname1,setBranchname1]=useState('')
    var [semistername1,setSemistername1]=useState('')

    const { branchid,
        branchname,
        semisterid,
        semistername,
        groupid,
        groupname,
        marks } = btechData
    const sectionFun = async () => {
        const reqparam = {
            pageno: '-1'
        }
        const ResponseData = await PostApi(reqparam, 'BRANCHES');
        const ResponseData2 = await PostApi(reqparam, 'ACADEMICTYPE');
        const ResponseData3 = await PostApi(reqparam, 'SEMISTER');

        setBranches(ResponseData.data)
        setYear(ResponseData2.data)
        setSemister(ResponseData3.data)
    }

    var handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
      
        if(name == 'groupid'){
           
                for(let i=0;i<year.length;i++){
                    if(year[i].id == value){
                        setGroupname1(year[i].name)
                    }
                }
        }
        if(name == 'branchid'){
            for(let i=0;i<branches.length;i++){
                if(branches[i].id == value){
                    setBranchname1(branches[i].name)
                }
            }
        
    }

    if(name == 'semisterid'){
           
        for(let i=0;i<semister.length;i++){
            if(semister[i].id == value){
                setSemistername1(semister[i].name)
            }
        }
    
}

   setBtechData((data) =>
        ({
            ...data,
            [name]: value,
            groupname:groupname1 ,
            branchname:branchname1,
            semistername:semistername1,

        }));

    }
    const submition = async (e) => {
        e.preventDefault()

        if (branchid == '' || semisterid == '' || groupid == '' || marks == '') {
            toast.info(
                'All fields are mandatory',
                {
                    position: "top-center",
                    autoClose: 5000
                }
            )
        }
        else {
            var tntId= JSON.parse(localStorage.getItem('tID'))

            const sessiondetails = localStorage.getItem(`userdata${tntId}`);
            if (sessiondetails != null) {
                const userdata = JSON.parse(sessiondetails);
                const reqdata = {
                    userid:userdata.user.id,
                    ptype: 'USERMARKS',
                    ...btechData
                }
                // console.log("btechData.id=====",btechData);
                if (!btechData.id) {
                const Response = await PostApi(reqdata, 'SAVEUSERMAKRS');
                // console.log('Response.data,.,.,.',Response?.data);
                if (Response?.data.id) {
                    toast.success("Data saved succesfully", {
                        position: "top-center",
                        autoClose: 5000

                    })
                    btechData.id =Response?.data.id;
                }  
                } else {
                    toast.error("Data saved error", {
                        position: "top-center",
                        autoClose: 5000

                    })
                }
            }
        }
    }

    // console.log("Btect Data",btechData);
    return (
        <Styles>
            <Container className="form-area">
                <Row>
                    <Col md="12">
                        <div className="form-box">
                            <form onSubmit={submition} className="form">

                                <div className="check-btn">
                                    <select onChange={handleChange} className="form-control" name='groupid' value={groupid}>
                                        <option value=''>select-Year</option>
                                        {year.map((item) => {
                                            return (
                                                <option class="dropdown-item" value={item.id}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div><br></br>
                                <div className="check-btn">
                                    <select onChange={handleChange} className="form-control" name='branchid' value={branchid}>
                                        <option value=''>select-branches</option>
                                        {branches.map((item) => {
                                            return (
                                                <option class="dropdown-item" value={item.id}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div><br></br>

                                <div className="check-btn">
                                    <select onChange={handleChange} className="form-control" name='semisterid' value={semisterid}>
                                        <option value=''>select-Semister</option>
                                        {semister.map((item) => {
                                            return (
                                                <option class="dropdown-item" value={item.id}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div><br></br>
                                <div className="check-btn">
                                    <input className="form-control" type='text' name='marks' value={marks} onChange={handleChange} placeholder='marks'></input>
                                </div><br></br>
                                <button type='submit' class="dropdown-item text-center">Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default AddMarks;