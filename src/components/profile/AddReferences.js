import React, { useState } from "react";
import { Styles } from "./education";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { PostApi } from '../../services/commonServices';

const AddReferences=({closemodal})=>{

    const fields={
        name:'',
        mobilenumber:''

    }
    const [formFields,setFormFields]=useState(fields);
    const {name,mobilenumber}=formFields;
    const handleChange=async(e)=>{
        const { name, value } = e.target;


    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
     
    }));
    

    }

    const saveForm=async(e)=>{
        e.preventDefault();
        if(name==''||mobilenumber==""){
            toast.info('All fields are mandatory',{
                position: "top-center",
            autoClose: 5000})

            
        }
        else{
            var tntId= JSON.parse(localStorage.getItem('tID'))
           
            const sessiondetails =  localStorage.getItem(`userdata${tntId}`);
            if (sessiondetails!=null){
                const userdata = JSON.parse(sessiondetails);
                let reqdata={
                    ptype: 'USEREFERENCES',
                userid: userdata.id,
                ...formFields
                }

                
                if (!formFields.id) {
                    const Response = await PostApi(reqdata,"SAVEUSERREFERENCES");
                    if(Response.data.id){
                        toast.success('data saved succesfully',{
                            position: "top-center",
                            autoClose: 2000

                        })
                       
                        formFields.id =Response.data.id;
                    }
                  
                } else{
                    toast.info("Error in saving data",{
                        position: "top-center",
                        autoClose: 5000

                    })
                }

            }

            closemodal()

        }
       

        // console.log("data",formFields);

    }
    return(<>
    <Styles>
        
    <Container className="form-area">
                <Row>
                    <Col>
                        <div className="form-box">
                            <form className="form">
                                <p className="form-control">

                                    <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />

                                </p>

                                <p className="form-control">

                                    <input type="text" placeholder="mobileno" name="mobilenumber" value={mobilenumber}  onChange={handleChange} />

                                </p>
                              

                                    <button onClick={saveForm}>Save</button>
                                
                            </form>

                        </div>

                    </Col>
                </Row>
            </Container>
            

    </Styles>

    
    </>)
}
export default AddReferences;