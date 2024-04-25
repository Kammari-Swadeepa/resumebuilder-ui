import React, { useState } from 'react'
import { PostApi } from '../../../services/commonServices';
import { toast } from 'react-toastify';

function Projects() {

    const fields={
        name:'',
        duration:'',
        description:''
    }
   const [formFields,setFormFields]=useState(fields)

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
           

          
        }
}

  return (
    <>
       <div class="form-group add-exp mt-s">
                <h2>Add Projects</h2>
                <div class="all-exps">
                    <div class="new-exp">
                        <label>Name:</label>
                        <input type="text"name="name" value={name} onChange={handleChange} class="form-control" placeholder="Ex: Web Developer" />
                        <label>Duration:</label>
                        <input type="text"name="duration" value={duration} onChange={handleChange} class="form-control" placeholder="Ex: ProgressSoft" />
                       
                        <label>Project Description:</label>
                        <textarea name="description" value={description} onChange={handleChange} class="form-control"></textarea>
                        
                    </div>
                </div>
                <div class="add-blk btn btn-info" id="add-exp">
                    <i class="fa fa-plus"></i>
                    <span>Add another project</span>
                </div>
            </div>
    </>
  )
}

export default Projects