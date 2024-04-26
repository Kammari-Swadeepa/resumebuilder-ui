import React from 'react'
import { useState } from 'react';
import { GetApi } from '../../services/commonServices.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login(props) {
    const [userName,setUserName]=useState('');
const [password,setPassword]=useState("")
const [otp,setOtp] =useState('');

const saveToken=async(userdata)=>{
    var tntId=JSON.parse(localStorage.getItem('tID'))
    localStorage.setItem(`userdata${tntId}`, JSON.stringify(userdata));
  }
  function formDetails (event){

    if (event.target.name==="userName"){
      setUserName(event.target.value) 
    }
  
    if (event.target.name==="password"){
      setPassword(event.target.value) 
    }
  
    // if (event.target.name==="otp"){
    //   setOtp(event.target.value) 
    // }
  
  
  }
  const passLogin=async(e)=>{

    e.preventDefault()
  
    if(userName == ''){
  
      toast.error('Enter Mobile Number', {
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
  else if(password==''){
      toast.error('Enter Password', {
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
    else{
      const respdata ={
        username :userName,
        password:password
      }
      const ResponseMessage = await GetApi(respdata,'PASSLOGIN');
      console.log("passlogin response",ResponseMessage);
      if(ResponseMessage.data =='USER_NOT_FOUND'){
        toast.error('User not found ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else if(ResponseMessage.data =='INVALIDPASSWORD'){
        toast.error('Invalid password ', {
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
      else if(ResponseMessage.data =='INACTIVE'){
        const result = window.confirm('Your account is inactive, please contact admin');
      }
      else if(ResponseMessage.data =='ALREADY_LOGGEDIN'){
        const result = window.confirm('You have already logged in with this mobile number , Please kindly logout or contact support team');
      }
      else{
        await saveToken(ResponseMessage)
        
        // props.onClose()
        // props.login()
        // history.push(`${ "/"}`)
        console.log("loginn working!!!!");
        window.location.href = '/'
      }
    }
  
  }
  
  const forgotpassword = async() =>{
    if(userName == ''){
      toast.error('Enter Mobile Number', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      const respdata ={
        username :userName,
        tenantid:''
      }
      const ResponseMessage = await GetApi(respdata,'FORGOTPASSWORD');
      if(ResponseMessage.data =='USER_NON_EXISTS'){
        toast.error('Invalid mobile number', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
      const result = window.confirm('Temporary password has been sent to your registered email id , Please login and change your password');
      }
    }
  }
  const handleSignUpInloGIn =()=>{
    props.signup(true)
    props.login(false)
  }
  return (
    <>
    <div>
     
      <form  id="main_login_form" novalidate="">
            <div class="row">
             
               <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="text"  id="login_user" name='userName' onChange={formDetails}  value={userName}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone</label>
                    </div>
                </div>
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="password" id="login_password" name='password' onChange={formDetails}  value={password}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                    </div>
                </div>
                
                <div class="col-12 col-sm-5 text-left ">
                    <button type="submit" class="btn dream-btn" onClick={passLogin}>Login</button>
                </div>
                
                <div class="col-12 col-sm-7 text-left">
                    <p style={{color:"black"}}>Don't have an account? <span className='fs-6 text-primary' style={{cursor:"pointer"}} onClick={handleSignUpInloGIn} >Sign up</span></p>
                </div>
                <div className=" col-12 text-right fw-bold fs-6 text-primary">
                                       <label onClick={forgotpassword} className="forgot-password" style={{cursor:"pointer"}}> Forgot Password</label> 
                                        </div>
            </div>
        </form>

        <div class="other-accounts text-center">
            <p class="w-text">Login with other account</p>
            <div class="footer-social-info">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login