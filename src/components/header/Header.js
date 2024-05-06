import React, { Suspense, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsShieldLock } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import logo from "../../assests/img/core-img/logo.png";
import { PostApi } from '../../services/commonServices.js';
import ChangePassword from '../change-password/ChangePassword.js';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import "./header.css";

function Header() {

  const [loginModal, setLoginModal] = useState(false)
  const [signupModal, setSignupModal] = useState(false)
  const [user, setUser] = useState(null);
  const [userMobile, setUserMobile] = useState("")
  const [isChangePassword, setIsChangePassword] = useState(false)
  const [istToggle,setIsToggle]=useState(false)
  // const [signUpFromLogin,setSignUpFromLogin] =useState(false);
  // const [loginFromSignUp, setLoginFromSignUp] = useState(false)
  useEffect(() => {
    var tntId = JSON.parse(localStorage.getItem('tID'))

    const userdata = JSON.parse(localStorage.getItem(`userdata${tntId}`))
    if (userdata == null) {
      setUser(null)
    }
    else if (userdata.accessToken) {
      setUser(userdata)
      setUserMobile(userdata.user.mobileno)

    }
  }, [])
  const LoginFnc = async () => {
    setLoginModal(true)
    setSignupModal(false)
  }
  const SignupFnc = async () => {
    setSignupModal(true)
    setLoginModal(false)
  }
  const closeLogin = async () => {
    setLoginModal(false)

  }
  const LoginOutFunc = async () => {
    const reqparams = {
      mobileno: userMobile
      // mobileno:"9391645909"

    }
    const clearsessionrespone = await PostApi(reqparams, 'LOGOUT');
    var tntId = JSON.parse(localStorage.getItem('tID'))
    localStorage.removeItem(`userdata${tntId}`)
    window.location.reload()
  }
  const changePassword = () => {
    console.log("password change")
  }
  const handleChangePassword = () => {
    setIsChangePassword(true)
  }
  const openNavBar =()=>{
    setIsToggle(true)
  }
  const closeNavBar =()=>{
    setIsToggle(false)
  }
  return (
    <>
      {/* {console.log(user, "check user info")} */}
  
      <div className={istToggle?"navbar-mobile-view":"navbar-mobile-hide"}>
      <div style={{position:"relative"}}>
        <RxCross1 style={{position:"absolute", right:"10px", top:"10px",fontSize:"24px",color:"white"}} onClick={()=>closeNavBar()}/>
      </div >
                    <div className='all-links'>
                    <div className='links-container'>
                    <Link to={'/'}  >Home</Link>
                    </div>
                  <div className='links-container'>
                  <Link to={'/aboutus'} >About Us</Link>
                  </div>
                    <div className='links-container'>
                    <Link to={'/pricing'} >Pricing</Link>
                    </div>
                   <div className='links-container'>
                   <Link to={'/templates'} >Templates</Link>
                   </div>
                   <div className='links-container'>
                   <Link to={'/contact'} >Contact</Link>
                   </div>
                   {user ? <Dropdown drop="down-centered" >

                    <Dropdown.Toggle variant="muted" id="dropdown-basic" style={{ border: "none", backgroundColor: "transparent", outline: "none" }}>
                      <span style={{color:"white"}} >More</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '230px' }}>

                      <Dropdown.Item onClick={changePassword} style={{ fontSize: "16px", padding: "10px" }}><BsShieldLock style={{ fontSize: "21px", margin: "0px 10px" }} /><span style={{ position: 'relative', bottom: "4px" }} onClick={handleChangePassword}>Change Password</span></Dropdown.Item>
                      <Dropdown.Item onClick={LoginOutFunc} style={{ fontSize: "16px", padding: "10px" }}><PiSignOutBold style={{ fontSize: "21px", margin: "0px 10px" }} /><span style={{ position: 'relative', bottom: "4px" }}>Sign Out</span></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> : <><a onClick={LoginFnc} class="open-popup-link btn login-btn mr-im">Sign In</a>
                    <a onClick={SignupFnc} class="open-signup-link btn login-btn">Sign Up </a></>}

                    </div>
                  </div>
      <div class="header-area" style={{ zIndex: "-999" }}>
        <div class="classy-nav-container dark breakpoint-off">
          <div class="container">

            <nav class="classy-navbar justify-content-between" id="dreamNav">

              {/* <a class="nav-brand" href="index-2.html"><img src={logo} alt="logo" /> CV Builder.</a> */}
              <Link class="nav-brand" to={"/"}><img src={logo} alt="logo" /> CV Builder.</Link>

            {istToggle?"":<div class="classy-navbar-toggler" >
                <span class="navbarToggler" onClick={()=>openNavBar()}><span></span><span></span><span></span></span>
              </div>}  

              <div class="classy-menu">

                <div class="classycloseIcon">
                  <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                </div>
                
                
                <div class="classynav">
                  <ul id="nav">
                    <Link to={'/'} className='header-link'>Home</Link>
                    <Link to={'/aboutus'} className='header-link'>About Us</Link>
                    <Link to={'/pricing'} className='header-link'>Pricing</Link>
                    <Link to={'/templates'} className='header-link'>Templates</Link>
                    <Link to={'/contact'} className='header-link'>Contact</Link>


                    {/* <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="templates.html">Templates</a></li>
                    <li><a href="contact-us.html">Contact</a></li> */}
                  </ul>
                  {user ? <Dropdown drop="down-centered" >


                    <Dropdown.Toggle variant="muted" id="dropdown-basic" style={{ border: "none", backgroundColor: "transparent", outline: "none" }}>
                      <CiCircleMore className='mt-2 ' style={{ border: "none", width: "27px", height: "27px", borderRadius: "50%", outline: "none" }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '230px' }}>

                      <Dropdown.Item onClick={changePassword} style={{ fontSize: "16px", padding: "10px" }}><BsShieldLock style={{ fontSize: "21px", margin: "0px 10px" }} /><span style={{ position: 'relative', bottom: "4px" }} onClick={handleChangePassword}>Change Password</span></Dropdown.Item>
                      <Dropdown.Item onClick={LoginOutFunc} style={{ fontSize: "16px", padding: "10px" }}><PiSignOutBold style={{ fontSize: "21px", margin: "0px 10px" }} /><span style={{ position: 'relative', bottom: "4px" }}>Sign Out</span></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> : <><a onClick={LoginFnc} class="open-popup-link btn login-btn mr-im">Sign In</a>
                    <a onClick={SignupFnc} class="open-signup-link btn login-btn">Sign Up </a></>}

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Modal className="modal fade" size="md" show={loginModal} onHide={setLoginModal} style={{ marginTop: "70px" }}>
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header border-none" style={{ position: "relative" }} >
                <h4>Login Form</h4>
                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={() => closeLogin(false)} />
                {/* <button type="button" className="btn-close border-none" onClick={() => setSignupModal(false)} data-dismiss="modal">X</button> */}
              </div>
              <div className="modal-body">
                <Suspense>
                  <Login login={setLoginModal} signup={setSignupModal} />
                </Suspense>

              </div>

            </form>

          </div>
        </div>
      </Modal>

      <Modal className="modal fade" size="md" show={signupModal} onHide={setSignupModal} style={{ marginTop: "70px" }}>
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header border-none" style={{ position: "relative" }} >
                <h4>Signup Form</h4>
                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={() => setSignupModal(false)} />
                {/* <button type="button" className="btn-close border-none" onClick={() => setSignupModal(false)} data-dismiss="modal">X</button> */}
              </div>
              <div className="modal-body">
                <Suspense>
                  <Signup login={setLoginModal} signup={setSignupModal} />

                </Suspense>

              </div>

            </form>

          </div>
        </div>
      </Modal>





      <Modal className="modal fade" size="md" show={isChangePassword} onHide={() => { setIsChangePassword(false) }} style={{ marginTop: "70px" }}>
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header border-none" style={{ position: "relative" }} >
                <h4>Change Password</h4>
                <RxCross1 style={{ fontSize: "26px", position: "absolute", right: "10px" }} onClick={() => setIsChangePassword(false)} />
                {/* <button type="button" className="btn-close border-none" onClick={() => setSignupModal(false)} data-dismiss="modal">X</button> */}
              </div>
              <div className="modal-body">
                <Suspense>
                  <ChangePassword />
                </Suspense>

              </div>

            </form>

          </div>
        </div>
      </Modal>
    </>
  )
}

export default Header