import React, { useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GetApi,PostApi } from '../../services/commonServices.js';
import { Link } from 'react-router-dom';
function Signup(props) {
    const fields = {
        name: '',
        email: '',
        mobileno: '',
        password: '',
    
      }
      const errors = {
        name: '',
        email: '',
        mobileno: '',
        password: '',
      }
      const [errorFields, setErrorFields] = useState(errors);
      const [formfields, setFormFields] = useState(fields);
      const [showotp, setShowotp] = useState(false);
      const [otp, setOtp] = useState(null);
      const [selected, setSelected] = useState('');
      const [tenantdata, setTenantData] = useState({});
      const { name, email, mobileno,  password } = formfields;
      const validateForm = async () => {
        let fields = formfields;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "*Please enter  name";
        }
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter email";
        }
    
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter mobileno.";
        }
    
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter password.";
        }
    
        setErrorFields(errors)
        return formIsValid;
    
      }
      const handleChange = (e) => {
  
        e.preventDefault();
    
        const { name, value } = e.target;
    
        setFormFields((prevState) => ({
          ...prevState,
          [name]: value,
    
        }));
    
      }
      
      const loadDataFirst = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))
        const value = localStorage.getItem(`tenantdata${tntId}`);
        if (value !== null) {
          setTenantData(JSON.parse(value));
          let tenanat = JSON.parse(value);
          // console.log("tenantdata", tenanat);
        }
    
    
      }

      const sendsms = async (e) => {
        e.preventDefault();
    
        const isValid = await validateForm();
        if (isValid) {
    
          const reqdata = {
            username: mobileno,
            query: { tenant: tenantdata.tenantid },
            mobileno: mobileno
          }
    
          // console.log("reqsms",reqdata);
    
          const verifyotpResp = await GetApi(reqdata, 'SENDVERIFYMOBILE');
    
          // console.log("otpp", verifyotpResp.data);
    
          if (verifyotpResp.data.id) {
    
            toast.success('OTP sent successfully to your registered mobile', {
              position: "top-center",
              autoClose: 5000
            })
            setShowotp(true);
    
    
          } else {
            if (verifyotpResp.data == 'ALREADY_EXISTS') {
    
              toast.info("mobile number already exists", {
                position: "top-center",
                autoClose: 5000
              })
    
    
            } else {
              toast.info('Failed to send otp to the mobile', {
                position: "top-center",
                autoClose: 5000
              })
    
            }
          }
    
        }
      }
      const [ismobileverified, setIsMobileVerified] = useState(false);
        
    const verifysms = async (e) => {
        e.preventDefault();
        const reqdata = {
          query: { tenant: tenantdata.tenantid },
          username: mobileno,
          otp: otp,
    
        }
    
        const verifyotpResp = await GetApi(reqdata, 'VERIFYMOBILE');
        console.log("verifyotpResp", verifyotpResp.data);
    
        if (verifyotpResp.data.id) {
          setIsMobileVerified(true);
          register("abc");
    
        } else {
          if (verifyotpResp.data == 'INVALID_OTP') {
            toast.info("invalid OTP", {
              position: "top-center",
              autoClose: 5000
    
            })
    
    
          } else if (verifyotpResp.data == 'OTP_EXPIRED') {
            toast.info("OTP expired", {
              position: "top-center",
              autoClose: 5000
    
            })
    
    
          }
          else {
    
            toast.info("Failed to verify OTP", {
              position: "top-center",
              autoClose: 5000
    
            })
    
          }
        }
    
      }
      const register = async (e) => {
        if (e != "abc") {
          e.preventDefault();
        }
    
    
        if (password == '') {
          toast.error('please enter password', {
            position: "top-center",
            autoClose: 5000
    
          })
        }
        else if (password.length < 6) {
          toast.info('password should be minimum of 6 characters', {
            position: "top-center",
            autoClose: 5000
    
          })
        }
        else {
   
    
          const reqdata = {
            username: mobileno,
            email: email,
            name: name,
            tenantid: tenantdata.tenantid,
            tenant: tenantdata,
            roles: ["USER"],
            mobileno: mobileno,
            password: password,
          }
    
    
          const reqData = await GetApi(reqdata, 'SIGNUP');
          console.log("reqData", reqData);
    
    
    
          if (reqData.data == 'SUCCESS') {
            toast.success("user was registered succesfully ", {
              position: "top-center",
              autoClose: 5000
    
            })
            //  openModal()
    
            // props.loginmodal()
            // props.closemodal()
    
          }
          else {
            toast.error("mobile number already exists", {
              position: "top-center",
              autoClose: 5000
    
            })
    
          }
        }
    
    
    
      }
      const handleSignInFromSignUp=()=>{
        props.signup(false)
        props.login(true)
      }
  return (
    <>
     <div id="signup-popup" >
     
      <form   id="main_Signup_form" novalidate="">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="text" id="registration_fname" name="name" value={name} onChange={handleChange}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                        <span style={{color:"red",fontSize:"11px"}}>{errorFields.name}</span>
                    </div>
                   
                </div>
               <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="email" id="registration_email" name="email" value={email} onChange={handleChange} />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    <span style={{color:"red",fontSize:"11px"}}>{errorFields.email}</span>

                    </div>
                </div>
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="text" name="mobileno" value={mobileno} onChange={handleChange}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone</label>
                    <span style={{color:"red",fontSize:"11px"}}>{errorFields.mobileno}</span>

                    </div>
                </div>
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="password" name="password" value={password} onChange={handleChange}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label> Password</label>
                    <span style={{color:"red",fontSize:"11px"}}>{errorFields.password}</span>

                    </div>
                </div>

                {showotp &&
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="text"  pattern="[0-9]{6}" maxLength='6' onChange={(e) => setOtp(e.target.value)} value={otp} />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label> Enter OTP</label>
                    </div>
                </div>}
                
              {  !showotp &&  <div class="col-12 col-sm-5 text-left ">
                    <button type="submit" class="btn dream-btn" onClick={sendsms}>Sign Up</button>
                </div>}
                <div class="col-12 col-sm-7 text-left">
                    <p class="mb-0 mt-10" style={{color:"black",cursor:"pointer"}}> have an account? <span className='fs-6 text-primary' onClick={handleSignInFromSignUp}>Sign In</span></p>
                </div>
           


{showotp && !ismobileverified && 
    <div class="col-12 col-sm-5 text-left ">
                    <button type="submit" class="btn dream-btn" onClick={verifysms}>Verify OTP</button>
                </div> }


{showotp && !ismobileverified &&<div class="col-12 col-sm-5  ">
 <label onClick={sendsms}  style={{ textDecorationLine: 'underline' }}>Resend OTP</label> </div>}
            </div>
        </form>

        {/* <div class="other-accounts text-center">
            <p class="w-text">Login with other account</p>
            <div class="footer-social-info">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
        </div> */}
    </div>
    </>
  )
}

export default Signup