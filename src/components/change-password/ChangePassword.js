import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostApi } from '../../services/commonServices.js';
function ChangePassword() {
    const [isToast, setIsToast] = useState(false)
    const [status, setStatus] = useState(null)
    const [message,setMessage] = useState("");
    const [password, setPassword] = useState({
        oldpassword: "",
        userid: "",
        newpassword: "",
        verifypassword: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setPassword({ ...password, [name]: value })

    }
    const handleChangePassword =async (e) => {
        e.preventDefault()
        if (password.oldpassword == '') {
            toast.error('Current password field should not be empty', {
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
         else if (password.newpassword == '') {
            toast.error('New password field should not be empty"', {
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
        else if (password.verifypassword == '') {
            toast.error('Confirm password field should not be empty"', {
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
         else if (password.newpassword != password.verifypassword) {
            toast.error('New password, Confirm password should be match"', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
       
        } else{
    var tntId= JSON.parse(localStorage.getItem('tID'))

            const sessiondetails =  localStorage.getItem(`userdata${tntId}`);
      if (sessiondetails != null) {
        const userdata = JSON.parse(sessiondetails);
        // console.log(userdata, "userdata")
       
            const respdata ={
              oldpassword:password.oldpassword,
              userid: userdata.id,
              newpassword:password.newpassword
      
            }
            const ResponseMessage = await PostApi(respdata,'CHANGEPASSWORD');
            // console.log(ResponseMessage,"ResponseMessage")
            if(ResponseMessage.data =='USER_NOT_FOUND'){
                toast.error('User not found', {
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
                toast.error('Invalid old password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
             
            }else if(ResponseMessage.data =='INACTIVE'){
                toast.error('Your account is inactive ,Please contact admin', {
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
           else if(ResponseMessage.data =='ALREADY_LOGGEDIN'){
            toast.error('You have already logged in with this mobile number , Please kindly logout or contact support team', {
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
                toast.success('Password changed successfully, Please Login again, Redirecting to Home ....', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
              
                setTimeout(async()=>{
                    setIsToast(false)
                    localStorage.removeItem("userdata")
                   

                    const reqparams = {
                        mobileno: userdata.user.mobileno
                        
            
                    }
                    const clearsessionrespone = await PostApi(reqparams, 'LOGOUT');
                    // console.log("clearsessionrespone", clearsessionrespone);
                    var tntId=JSON.parse(localStorage.getItem('tID'))
            
                    localStorage.removeItem(`userdata${tntId}`)
                    window.location.href = '/'
                },5000)
      
          }
           
          }
    }}
  return (
    <>
     
        <div>
     
     <form  id="main_login_form" novalidate="">
           <div class="row">
            
              <div class="col-12 col-md-12">
                   <div class="group">
                       <input type="password" id="current_password" name="oldpassword"
                                            value={password.oldpassword}
                                            onChange={handleChange}
                                            style={{letterSpacing:"2px"}}/>
                       <span class="highlight"></span>
                       <span class="bar"></span>
                       <label>Current Password</label>
                   </div>
               </div>
               <div class="col-12 col-md-12">
                   <div class="group">
                       <input type="password" id="new_password" name="newpassword"
                                            value={password.newpassword}
                                            onChange={handleChange}
                                            style={{letterSpacing:"2px"}}/>
                       <span class="highlight"></span>
                       <span class="bar"></span>
                       <label>New Password</label>
                   </div>
               </div>
               <div class="col-12 col-md-12">
                   <div class="group">
                       <input type="password" id="confirm_password" name="verifypassword"
                                            value={password.verifypassword}
                                            onChange={handleChange}
                                            style={{letterSpacing:"2px"}}/>
                       <span class="highlight"></span>
                       <span class="bar"></span>
                       <label>Confirm Password</label>
                   </div>
               </div>
               
               
               <div class="col-12 col-sm-5 text-left ">
                   <button type="submit" class="btn dream-btn" onClick={handleChangePassword}>Change Password</button>
               </div>
               
             
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

export default ChangePassword