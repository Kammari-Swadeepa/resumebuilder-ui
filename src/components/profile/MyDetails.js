import React, { useState, useEffect, Suspense } from 'react'
// import { Styles } from '../../pages/account/styles/account'
import { Container, Row, Col, Toast, Modal } from 'react-bootstrap';
import { PostApi } from '../../services/commonServices';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Styles } from './mydetailsyle'
import FileBase64 from 'react-file-base64';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../login/Login';
import { RxCross1 } from "react-icons/rx";


function MyDetails() {
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
    const [loginModal, setLoginModal] = useState(false)
    const [signupModal, setSignupModal] = useState(false)



    const [selected, setSelected] = useState(undefined);
    const [selected1, setSelected1] = useState(undefined);
    const [selected2, setSelected2] = useState(undefined);
    const [pl1, setPl1] = useState("Select Year");
    const [pl2, setPl2] = useState("Select Branch");
    const [pl3, setPl3] = useState("Select Semister");
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const history = useLocation()
    const navigate = useNavigate();



    useEffect(() => {
        loaddata();

    }, []);

    const loaddata = async () => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

        const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
        // console.log("userdata in Mydetails", userdata);

        if (userdata != null) {
            // console.log(userdata);
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

  

    const openModal = () => {
        // history.push("/")
        navigate('/')
        // setOpenLoginModal(false)
    }
    const login = () => {
        // console.log("my details login");
    }

    function handleChangeFile(files) {
        // console.log("base 64 file data", files);
        let base64txt = files[0].base64.split("base64,")
        // setFileFields(files[0]);
        setBase64Img(base64txt[1])
        if (files[0].type === 'image/png' || files[0].type === 'image/jpeg' || files[0].type === 'image/jpg') {
            let sz = files[0].size.split(' ');
            if (sz[0] > 1024) {
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
                let img = files[0].base64.split("base64,")
                setBase64Img(img[1])
                // setFileFields(files[0].base64);
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
        // setFile(event.target.files[0])
    }


    const continueform = async (e) => {

        e.preventDefault()
        const req = {
            name: name,
            id: data.id,
            username: mobilenumber,
            email: email,
            state: state,
            district: district,
            ptype: 'USERINFO',
            address: address,
            title: title,
            semister: selected2,
            branch: selected1,
            academicyear: selected,
            // image: base64Img
        }

        const updateprofilepic = {
            userid: data.id,
            image: base64Img,
            ptype: 'PROFILEPIC',
        }

        console.log("req afterwards:", req);
        // var saveuserinfo = {}

        const saveuserinfo = await PostApi(req, 'SAVEUSERINFO');
        const profilepicResp = await PostApi(updateprofilepic, 'SAVESKILLS');

        if (!profilepicResp.data.id) {
            toast.error("Failed to  upload pic", {
                position: "top-right",
                autoClose: 5000,
            })
        }


        // console.log("save user infor", saveuserinfo);

        if (saveuserinfo.message == "Request failed with status code 400") {
            toast.error("error with the details filled please check again", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


        //     return
        // }
        console.log(saveuserinfo.data?.id,profilepicResp.data?.id);
        
        if (saveuserinfo.data?.id && profilepicResp.data?.id) {

            // Toast.show({
            //     type: 'error',
            //     text1: 'Data updated successfully,please relogin again ',
            //     position: 'top'
            // });
            toast.success('Data updated successfully,please relogin again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            const reqparams = {
                mobileno: mobilenumber
            }

            const clearsessionrespone = await PostApi(reqparams, 'LOGOUT');
            console.log("clearsessionrespone",clearsessionrespone,mobilenumber);
            var tntId=JSON.parse(localStorage.getItem('tID'))

            localStorage.removeItem(`userdata${tntId}`)
            setOpenLoginModal(true)

            // history.push(`${process.env.PUBLIC_URL + "/home-two"}`)

        } else {
            // Toast.show({
            //     type: 'error',
            //     text1: saveuserinfo.data.message,
            //     position: 'top'
            // });

            toast.error(saveuserinfo.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        // const userdata = JSON.parse(localStorage.getItem('userdata'))
        // console.log("userdata:", userdata);
        // // navigation.navigate('login');

    }

    return (
        <Styles>
            <section className="login-area">
                {/* {console.log("final academic types:", academictypes)} */}
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="login-box">
                                <div className="login-title text-center">
                                    <h3>MyDetails</h3>
                                </div>
                                <form id="form_login" className="form">

                                    <div className='custom-flex'>
                                        <p className="form-control">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" placeholder="Full Name" id="Full Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="email">Personal Email</label>
                                            <input type="email" placeholder="Email" id="Personal Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="mobilenumber">Mobile Number</label>
                                            <input type="number" placeholder="Number" id="Mobile Number" name='mobilenumber' value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="State">State</label>
                                            <input type="text" placeholder="State" id="State" name='state' value={state} onChange={(e) => setState(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="District">District</label>
                                            <input type="text" placeholder="District" id="District" name='district' value={district} onChange={(e) => setDistrict(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="Address">Address</label>
                                            <input type="text" placeholder="Address" id="Address" name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="Title">Resume Title</label>
                                            <input type="text" placeholder="Title" id="Title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <span className="login_input-msg"></span>
                                        </p>





                                        <p className="form-control">
                                            <label htmlFor="Title">Select Year</label>
                                            <select
                                                value={selected} onChange={(e) => setSelected(e.target.value)}>
                                                <option>{pl1}</option>
                                                {academictypes.map((item) => (
                                                    <option key={item.key} value={item.key}>
                                                        {item.value}
                                                    </option>
                                                ))}
                                            </select>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="Title">Select Branch</label>
                                            <select
                                                value={selected1} onChange={(e) => setSelected1(e.target.value)}>
                                                <option>{pl2}</option>
                                                {branchdata.map((item) => (
                                                    <option key={item.key} value={item.key}>
                                                        {item.value}
                                                    </option>
                                                ))}
                                            </select>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="Title">Select Sem</label>
                                            <select
                                                value={selected2} onChange={(e) => setSelected2(e.target.value)}>
                                                <option>{pl3}</option>
                                                {semsisterdata.map((item) => (
                                                    <option key={item.key} value={item.key}>
                                                        {item.value}
                                                    </option>
                                                ))}
                                            </select>
                                        </p>

                                        <p className="form-control form2">
                                            <label htmlFor="Title">Profile Pic<label style={{ fontSize: "12px" }}>(image should be lessthan 1mb)</label></label>
                                            {/* <input type="text" placeholder="Title" id="Title" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
                                            <FileBase64 multiple={true} onDone={handleChangeFile} />
                                            <span className="login_input-msg"></span>
                                        </p>

                                        {imageshow && <p className="form-control-UC form2" >
                                            <label htmlFor="Title">Profile Pic</label>
                                            <img src={`data:image/jpeg;base64,${base64Img}`} alt="Red dot" height="100%" width="100%" />
                                        </p>}
                                    </div>

                                    <button onClick={continueform} style={{ marginTop: "20px" }}>Save</button>

                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <ToastContainer /> */}
                {/* {openLoginModal && <LoginModal onClose={openModal} login={login}></LoginModal>} */}
                {/* {openLoginModal && <Login onClose={openModal} login={login} /> } */}

            </section>

            <Modal className="modal fade" size="md" show={openLoginModal} onHide={setOpenLoginModal} style={{ marginTop: "70px" }}>
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header border-none" style={{ position: "relative" }} >
                <h4>Login Form</h4>
                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={openModal} />
                
              </div>
              <div className="modal-body">
                <Suspense>
                  <Login/>
                </Suspense>

              </div>

            </form>

          </div>
        </div>
      </Modal>
        </Styles>
    )
}

export default MyDetails