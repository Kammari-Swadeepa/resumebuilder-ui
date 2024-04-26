import { Styles } from "./education";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { PostApi } from '../../services/commonServices';


const AddEduction=({updateprop,closemodal})=>{
    const fields={
        education: '',
                    course: '',
                    marks: '',
                    district: '',
                    college: '',
                    state: '',
                    startyear:'',
                    endyear: '',


    }
    const [formfields, setFormFields] = useState(fields);

    useEffect(() => {
        
        setFieldData();
        
    }, []);

    const setFieldData=async()=>{
        if(updateprop?.id){
            setFormFields(updateprop);

            }

    }
    const {education,course,marks,district,college,state,startyear,endyear}=formfields;

    const handleChange=(e)=>{
        const { name, value } = e.target;
   
        setFormFields((prevState) => ({
          ...prevState,
          [name]: value,
         
        }));


    }



    const saveForm=async(e)=>{
        e.preventDefault();
        
        if (education == '' || course == '' || marks== ''
        || state == '' || district == '' || college == '' || startyear == '' || endyear == '') {

            toast.info(
                'All fields are mandatory',
                {  position: "top-center",
                autoClose: 5000}
            ) } 
       

           else{
                // console.log("saveee form");
            var tntId= JSON.parse(localStorage.getItem('tID'))

                const sessiondetails =  localStorage.getItem(`userdata${tntId}`);
                if (sessiondetails!=null){
                    const userdata = JSON.parse(sessiondetails);
                    let reqdata={
                        ptype: 'USEREDUCATION',
                    userid: userdata.id,
                    ...formfields 
                    }

                    // console.log("formfields",reqdata)
                    if (!formfields.id) {
                    //    console.log("idd==",formfields.id);
                        //save
                        const Response = await PostApi(reqdata,"USEREDUCATION");
                        if(Response.data.id){
                            toast.info('data saved succesfully',{
                                position: "top-center",
                                autoClose: 5000

                            })
                          
                            formfields.id =Response.data.id;
                        }
                      
                    } else {
                        //update
                        const Response = await PostApi(reqdata,"UPDATEUSEREDUCATION");
                        if(Response.data.id){
                            toast.info('data updated succesfully',{
                                position: "top-center",
                                autoClose: 5000

                            })
                          
                            formfields.id =Response.data.id;
                        }
    
                    }

                }
                closemodal()
               

              
            }
    }

    

    
    return(
        <Styles>
             <Container className="form-area">
                        <Row>
                            <Col md="12">
                                <div className="form-box">
                                    
                                    <form className="form">
                                        <p className="form-control">
                                 
                                            <input type="text" placeholder="Education/degree" name="education" value={education} onChange={handleChange}/>
                                          
                                        </p>
                                       
                                        <p className="form-control">
                                         
                                        <input type="text" placeholder="field of study" name="course"value={course} onChange={handleChange}/>
                                  
                                        </p>
                                        <p className="form-control">
                                         
                                         <input type="text" placeholder="percentage/CGPA" name="marks" value={marks} onChange={handleChange}/>
                                   
                                         </p>
                                         <p className="form-control">
                                         
                                         <input type="text" placeholder="College" name="college" value={college} onChange={handleChange}/>
                                   
                                         </p>
                                        
                                        <p className="form-control">
                                            <input type="text" placeholder="state"  name="state"  value={state} onChange={handleChange} />
                                        </p>
                                        <p className="form-control">
                                            <input type="text" placeholder="District" name="district" value={district}  onChange={handleChange} />
                                        </p>
                                        <p className="form-control">
                                            <input type="text" placeholder="Start year" name="startyear" value={startyear} onChange={handleChange} />
                                        </p>
                                        <p className="form-control">
                                            <input type="text" placeholder="End year" name="endyear" value={endyear} onChange={handleChange} />
                                        </p>

                                        <button onClick={saveForm}>Save</button>
                                    
 
                                    </form>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <ToastContainer/> */}

        </Styles>

    )
}
export default AddEduction;