import { Styles } from "./education";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useRef, useState } from 'react';
// import { ToastContainer, toast } from "react-toastify";
import { PostApi } from '../../services/commonServices';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddHobbies = ({ data, userId, getHobbies, closemodal, updateprop }) => {
    // const fields={
    //     education: '',
    //                 course: '',
    //                 marks: '',
    //                 district: '',
    //                 college: '',
    //                 state: '',
    //                 startyear:'',
    //                 endyear: '',


    // }
    // const [formfields, setFormFields] = useState(fields);

    const [hobby, setHobby] = useState('')

    // useEffect(() => {

    //     setFieldData();

    // }, []);

    // const setFieldData = async () => {
    //     if (updateprop?.id) {
    //         setFormFields(updateprop);

    //     }

    // }
    // const { education, course, marks, district, college, state, startyear, endyear } = formfields;

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormFields((prevState) => ({
    //         ...prevState,
    //         [name]: value,

    //     }));


    // }



    const submitHobby = async (e) => {
        e.preventDefault();

        if (hobby == '') {

            toast.info(
                'Enter hobbies',
                {
                    position: "top-center",
                    autoClose: 1500
                }
            )
        }


        else {

            let addedhobbies = data.filter((x) => x.name == hobby);

            if (addedhobbies.length > 0) {
                // Toast.show({
                //     type: 'error',
                //     text1: 'You have already added the hobby',
                //     position: 'top'
                //   });

                toast.error('You have already added the hobby ', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            }
            else {

                const reqdata = {
                    ptype: 'USERHOBBIES',
                    name: hobby,
                    userid: userId
                }

                const HobbyResponse = await PostApi(reqdata, 'SAVEHOBBIES');

                // console.log("save hobby", HobbyResponse.data);
                if (HobbyResponse.data.id) {
                    // Toast.show({
                    //     type: 'success',
                    //     text1: 'Hobbies saved successfully',
                    //     position: 'top'
                    // });

                    toast.success('Hobbies saved successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    getHobbies()


                    // this.setState({
                    //     name: ''
                    // });
                    // this.getData();
                    // this.setState({
                    //     titleRating: ''
                    // });
                } else {
                    // Toast.show({
                    //     type: 'success',
                    //     text1: 'Failed to  save hobbies',
                    //     position: 'top'
                    // });

                    toast.error('Failed to  save hobbies ', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                closemodal()
            }

            // console.log("saveee form");
            // const sessiondetails =  localStorage.getItem('userdata');
            // if (sessiondetails!=null){
            //     const userdata = JSON.parse(sessiondetails);
            //     let reqdata={
            //         ptype: 'USEREDUCATION',
            //     userid: userdata.id,
            //     ...formfields
            //     }

            //     console.log("formfields",reqdata)
            //     if (!formfields.id) {
            //        console.log("idd==",formfields.id);
            //         //save
            //         const Response = await PostApi(reqdata,"USEREDUCATION");
            //         if(Response.data.id){
            //             toast.info('data saved succesfully',{
            //                 position: "top-center",
            //                 autoClose: 1500

            //             })

            //             formfields.id =Response.data.id;
            //         }

            //     } else {
            //         //update
            //         const Response = await PostApi(reqdata,"UPDATEUSEREDUCATION");
            //         if(Response.data.id){
            //             toast.info('data updated succesfully',{
            //                 position: "top-center",
            //                 autoClose: 1500

            //             })

            //             formfields.id =Response.data.id;
            //         }

            //     }

            // }



        }

    }




    return (
        <Styles>
            <Container className="form-area">
                <Row>
                    <Col md="12">
                        <div className="form-box">

                            <form className="form">
                                <p className="form-control">

                                    <input type="text" placeholder="Enter your hobby" name="hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} />

                                </p>

                                <button onClick={submitHobby}>Save</button>

                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <ToastContainer /> */}

        </Styles>

    )
}
export default AddHobbies;