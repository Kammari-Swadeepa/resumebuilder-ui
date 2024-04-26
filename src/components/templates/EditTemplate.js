import React, { useEffect, useState } from 'react'
import demo1 from "../../assests/img/demos/demo-1.png";
import test1 from "../../assests/img/test-img/1.jpg"
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import FileBase64 from 'react-file-base64';
import { PostApi } from '../../services/commonServices';
import Education from './profile/Education';
import Experience from './profile/Experience';
import Skills from './profile/Skills';
import Objective from './profile/Objective';
import Projects from './profile/Projects';


function EditTemplate() {
    useEffect(() => {
        window.scroll(0, 0)
        loaddata()
    }, [])

    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 200)

    const [imageshow, setImageShow] = useState(null);
    const [filefields, setFileFields] = useState(null);
    const [base64Img, setBase64Img] = useState("");
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

    const [selected, setSelected] = useState(undefined);
    const [selected1, setSelected1] = useState(undefined);
    const [selected2, setSelected2] = useState(undefined);
    const [pl1, setPl1] = useState("Select Year");
    const [pl2, setPl2] = useState("Select Branch");
    const [pl3, setPl3] = useState("Select Semister");

    const loaddata = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))

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

    

    
    const saveform = async (e) => {

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

            // const reqparams = {
            //     mobileno: mobilenumber
            // }

            // const clearsessionrespone = await PostApi(reqparams, 'LOGOUT');
            // console.log("clearsessionrespone",clearsessionrespone,mobilenumber);
            // var tntId=JSON.parse(localStorage.getItem('tID'))

            // localStorage.removeItem(`userdata${tntId}`)
            // setOpenLoginModal(true)


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
        <>

            {isLoading && <div id="preloader">
                <div class="preload-content">
                    <div id="dream-load"></div>
                </div>
            </div>}

            <section class="blog-area">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12 col-md-5">
                            <div class="cv-prev">
                                <div class="blog_thumbnail">
                                    <img src={demo1} class="temp-img" alt="" />
                                </div>
                            </div>

                        </div>



                        <div class="col-12 col-md-7">
                            {/* <div class="cv-download">
                                <div class="row align-items-center">

                                    <div class="col-lg-6 col-md-12">
                                        <p class="topnote">Fill all required fields and click create cv to download CV in both PDF and PNG formats</p>

                                    </div>
                                    <div class="col-lg-6 col-md-12 mt-s">
                                        <a href="#" class="btn btn-primary">Download as PDF</a>
                                        <a href="#" class="btn btn-soft-primary ms-2">Download as PNG</a>

                                    </div>
                                </div>
                            </div> */}
                            <div class="container">

                                <form method="post" action="#">
                                    <div class="mt-150">
                                        <h2>Personal Info</h2>
                                        <div class="block-container">
                                            <div class="row align-items-center">
                                                <div class="col-lg-2 col-md-4">
                                                    <img src={`data:image/jpeg;base64,${base64Img}`} class="d-block" alt="" />
                                                </div>
                                                <div class="col-lg-5 col-md-8 mt-s">
                                                    <h6 class="">Upload your picture</h6>
                                                    <p class="text-muted mb-0">For best results, use image 300px by 300px in either .jpg or .png</p>
                                                </div>
                                                <div class="col-lg-5 col-md-12 mt-s">
                                                    <FileBase64 multiple={true} onDone={handleChangeFile} />
                                                    {/* <a href="#" class="btn btn-primary">Upload</a>
                                                    <a href="#" class="btn btn-soft-primary ms-2">Remove</a> */}
                                                </div>
                                            </div>
                                            <div class="mt-30">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <label>Full Name:</label>
                                                        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} class="form-control" placeholder="enter your name" />
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <label>Resume Title:</label>
                                                        <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" placeholder="Ex: Web Developer" />
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <label>Your Email:</label>
                                                        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="enter your email" />
                                                    </div>
                                                    {/* <div class="col-lg-6">
                                                        <label>Website Link:</label>
                                                        <input type="text" name="web-link" class="form-control" placeholder="enter your website link" />
                                                    </div> */}

                                                    <div class="col-lg-6">
                                                        <label>Mobile No:</label>
                                                        <input type="text" name='mobilenumber' value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} class="form-control" placeholder="enter your mobile no" />
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <label>Your State:</label>
                                                        <input type="text" name='state' value={state} onChange={(e) => setState(e.target.value)} class="form-control" placeholder="enter your state" />
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label>Your District:</label>
                                                        <input type="text" name='district' value={district} onChange={(e) => setDistrict(e.target.value)} class="form-control" placeholder="enter your district" />
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label>Your Address:</label>
                                                        <input type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" placeholder="enter your address" />
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label>Select Year:</label>
                                                        <select
                                                            value={selected} onChange={(e) => setSelected(e.target.value)} class="form-control">
                                                            <option>{pl1}</option>
                                                            {academictypes.map((item) => (
                                                                <option key={item.key} value={item.key}>
                                                                    {item.value}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label>Select Branch:</label>
                                                        <select
                                                            value={selected1} onChange={(e) => setSelected1(e.target.value)} class="form-control">
                                                            <option>{pl2}</option>
                                                            {branchdata.map((item) => (
                                                                <option key={item.key} value={item.key}>
                                                                    {item.value}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <label>Select Sem:</label>
                                                        <select
                                                            value={selected2} onChange={(e) => setSelected2(e.target.value)} class="form-control">
                                                            <option>{pl3}</option>
                                                            {semsisterdata.map((item) => (
                                                                <option key={item.key} value={item.key}>
                                                                    {item.value}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <br />

                                                    {/* <div style={{position:"relative"}} >
                                                    <button className="btn btn-primary" style={{marginTop:"5px",position:"absolute",right:"10px"}}>Save</button>
                                                    </div> */}

                                                    <button className="btn btn-primary" style={{ marginTop: "5px" }}>Save</button>



                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <Objective />

                                    <Education />
                                    <div class="clearfix"></div>
                                    <Projects/>
                                    <Experience />

                                    <div class="clearfix"></div>

                                    <Skills />

                                    <div class="clearfix"></div>

                                    <div class="form-group add-social mt-s">
                                        <h2>Add social Links</h2>
                                        <div class="block-container">
                                            <div class="all-socials">
                                                <div class="new-skills">
                                                    <label>Social Name</label>
                                                    <input type="text" name="socials[]" class="form-control" />
                                                    <label>Social Link</label>
                                                    <input type="text" name="socials[]" class="form-control" />
                                                    <label>Social icon image (16px*16px)</label>
                                                    <input type="file" name="socials[]" class="form-control" />
                                                </div>
                                            </div>


                                            <div class="add-blk add-socials btn btn-info mt-50">
                                                <i class="fa fa-plus"></i>
                                                <span>Add another social</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="clearfix"></div>

                                    <div class="form-group add-social mt-s">
                                        <h2>Add Hoppies</h2>
                                        <div class="block-container">
                                            <div class="all-hoppies">
                                                <div class="new-skills">
                                                    <label>Hoppy icon image (32px*32px)</label>
                                                    <input type="file" name="hoppies[]" class="form-control" />
                                                </div>
                                            </div>


                                            <div class="add-blk add-hoppies btn btn-info mt-50">
                                                <i class="fa fa-plus"></i>
                                                <span>Add another Hoppy</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="mt-100" />
                                    <input type="submit" name="submit" value="Create Resume" class="btn-sub" />

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default EditTemplate