import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Styles } from "./education";
import { ToastContainer, toast } from "react-toastify";
import { PostApi } from '../../services/commonServices';

const AddProjects = ({updateprops,closemodal}) => {
    const fields={
        name:'',
        duration:'',
        description:''
    }
   const [formFields,setFormFields]=useState(fields)

   useEffect(()=>{
    if(updateprops?.id){
        setFormFields(updateprops)
    }

   },[])
   const {name,duration,description}=formFields;
   const handleChange=(e)=>{
    const { name, value } = e.target;


    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
     
    }));
    
    

}

const saveForm=async(e)=>{
    e.preventDefault();
    
    if (name == '' || duration == '' || description== '') {

        toast.info(
            'All fields are mandatory',
            {  position: "top-center",
            autoClose: 5000}
        ) } 
   

       else{
             var tntId= JSON.parse(localStorage.getItem('tID'))
           
            const sessiondetails =  localStorage.getItem(`userdata${tntId}`);
            if (sessiondetails!=null){
                const userdata = JSON.parse(sessiondetails);
                let reqdata={
                    ptype: 'USERPROJECTS',
                userid: userdata.id,
                ...formFields
                }

                
                if (!formFields.id) {
                    const Response = await PostApi(reqdata,"SAVEUSERPROJECT");
                    if(Response.data.id){
                        toast.info('data saved succesfully',{
                            position: "top-center",
                            autoClose: 5000

                        })
                      
                        formFields.id =Response.data.id;
                    }
                  
                } else {
                    //update
                    const Response = await PostApi(reqdata,"UPDATEUSERPROJECT");
                    if(Response.data.id){
                        toast.info('data updated succesfully',{
                            position: "top-center",
                            autoClose: 5000

                        })
                      
                        formFields.id =Response.data.id;
                    }

                }

            }
            closemodal()
           

          
        }
}
    return (
        <>
      
        <Styles>
        <Container className="form-area">
                <Row>
                    <Col>
                        <div className="form-box">
                            <form className="form">
                                <p className="form-control">

                                    <input type="text" placeholder="Project Name" name="name" value={name} onChange={handleChange} />

                                </p>

                                <p className="form-control">

                                    <input type="text" placeholder="duration" name="duration" value={duration} onChange={handleChange} />

                                </p>
                                <p className="form-control"> Project Description</p>
                                    <textarea  placeholder="description" name="description" value={description} onChange={handleChange} > </textarea>

                                    <button onClick={saveForm}>Save</button>
                                
                            </form>

                        </div>

                    </Col>
                </Row>
            </Container>
            {/* <ToastContainer/> */}


        </Styles>
           
        </>
    )
}
export default AddProjects;