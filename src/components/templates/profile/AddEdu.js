import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { PostApi } from '../../../services/commonServices';
function AddEdu({ data }) {
    // Render your table here based on the `data` prop
    const fields = {
        education: '',
        course: '',
        marks: '',
        district: '',
        college: '',
        state: '',
        startyear: '',
        endyear: '',


    }
    const [formfields, setFormFields] = useState(fields);

    const { education, course, marks, district, college, state, startyear, endyear } = formfields;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields((prevState) => ({
            ...prevState,
            [name]: value,

        }));


    }

    const saveForm = async (e) => {
        e.preventDefault();

        if (education == '' || course == '' || marks == ''
            || college == '' || startyear == '' || endyear == '') {

            toast.info(
                'All fields are mandatory',
                {
                    position: "top-center",
                    autoClose: 5000
                }
            )
        }


        else {
            // console.log("saveee form");
            var tntId = JSON.parse(localStorage.getItem('tID'))

            const sessiondetails = localStorage.getItem(`userdata${tntId}`);
            if (sessiondetails != null) {
                const userdata = JSON.parse(sessiondetails);
                let reqdata = {
                    ptype: 'USEREDUCATION',
                    userid: userdata.id,
                    ...formfields
                }

                // console.log("formfields",reqdata)
                if (!formfields.id) {
                    //    console.log("idd==",formfields.id);
                    //save
                    const Response = await PostApi(reqdata, "USEREDUCATION");
                    if (Response.data.id) {
                        toast.info('data saved succesfully', {
                            position: "top-center",
                            autoClose: 5000

                        })

                        formfields.id = Response.data.id;
                    }

                } else {
                    //update
                    const Response = await PostApi(reqdata, "UPDATEUSEREDUCATION");
                    if (Response.data.id) {
                        toast.info('data updated succesfully', {
                            position: "top-center",
                            autoClose: 5000

                        })

                        formfields.id = Response.data.id;
                    }

                }

            }



        }
    }

    return (
      <div class="form-group add-edu">
                <h2>Add Educations</h2>
                <div class="all-edus">
                    <div class="new-edu">
                        <label>Degree:</label>
                        <input type="text" name="education" value={education} onChange={handleChange} class="form-control" placeholder="Ex: Bachelor's" />

                        <label>Field of study:</label>
                        <input type="text" name="course" value={course} onChange={handleChange} class="form-control" placeholder="Ex: Computer Science" />

                        <label>College:</label>
                        <input type="text" name="college" value={college} onChange={handleChange} class="form-control" placeholder="Ex: al-albayt university" />

                        <label>Percentage/CGPA:</label>
                        <input type="text" name="marks" value={marks} onChange={handleChange} class="form-control" placeholder="Ex: 7.5" />

                        <div class="form-row">
                            <div class="col">
                                <label>From year:</label>
                                <input type="month" name="startyear" value={startyear} onChange={handleChange} class="form-control" />
                            </div>
                            <div class="col">
                                <label>To year (optional=present):</label>
                                <input type="month" name="endyear" value={endyear} onChange={handleChange} class="form-control" />
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: "5px" }} onClick={saveForm}>Save</button>

                </div>
               
            </div> 
    );
  }
  export default AddEdu