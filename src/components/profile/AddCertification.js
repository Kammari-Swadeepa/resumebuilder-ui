import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Styles } from "./education";
import FileBase64 from 'react-file-base64';
import { toast } from "react-toastify";
import { PostApi } from '../../services/commonServices';


const AddCertification = ({closemodal}) => {
    const fields = {
        name: '',
        year: '',
        image: ''
    }
    const [formFields, setFormFields] = useState(fields)
    const [imageshow, setImageShow] = useState(null);
    const [filefields, setFileFields] = useState(null);
    const { name, year, image } = formFields;

    function handleChangeFile(files) {
        // console.log(files);
        setFileFields(files[0]);
        if (files[0].type === 'image/png' || files[0].type === 'image/jpeg' || files[0].type === 'image/jpg') {
            let sz = files[0].size.split(' ');
            if (sz[0] > 200) {
                toast('File size should be below 200 kb', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                setFileFields(files[0].base64);
                // setImageShow(files[0].base64)
                setImageShow(true);
            }
        } else {
            toast('Please upload only png or jpg', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        //setFile(event.target.files[0])
    }



    const handleChange = async (e) => {
        const { name, value } = e.target;

        setFormFields((prevState) => ({
            ...prevState,
            [name]: value
        }));

    }
    const saveForm = async (e) => {
        e.preventDefault();
        if (name == '' || year == '' || filefields == null) {
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
                formFields.image = filefields;
                let reqdata = {

                    ptype: 'USERCERTIFICATE',
                    userid: userdata.id,
                    ...formFields
                }

                // console.log("formm fields",reqdata);

                if (!formFields.id) {
                    const Response = await PostApi(reqdata, "SAVECERTIFICATE");
                    if(Response.data.id){
                        toast.success('data saved succesfully',{
                            position: "top-center",
                            autoClose: 5000

                        })
                      
                        formFields.id =Response.data.id;
                    }
                }else{
                    toast.info("Error in saving data",{
                        position: "top-center",
                        autoClose: 5000

                    })
                }
            }
            closemodal()
        }






    }
    return (<>
        <Styles>
            <Container className="form-area">
                <Row>
                    <Col>
                        <div className="form-box">
                            <form className="form">
                                <p className="form-control">

                                    <input type="text" placeholder="Certification Name" name="name" value={name} onChange={handleChange} />

                                </p>

                                <p className="form-control">

                                    <input type="text" placeholder="Certification year" name="year" value={year} onChange={handleChange} />

                                </p>
                                {/* <p  className="form-control">Choose Certificate to upload</p> */}
                                <label>Choose Certificate to upload</label>
                                <FileBase64
                                    multiple={true}
                                    onDone={handleChangeFile} />
                                <br />

                                {imageshow && <> <div className="form-group mb-3 row">
                                   
                                    <label
                                       
                                    >
                                        Uploaded Certificate
                                    </label>
                                    <img src={filefields} alt="Red dot" />

                                </div> </>}
                                <br />

                                <button onClick={saveForm}>Save</button>

                            </form>

                        </div>

                    </Col>
                </Row>
            </Container>

        </Styles>

    </>)
}
export default AddCertification