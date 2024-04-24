import React, { Suspense, useState } from 'react'
import logo from "../../assests/img/core-img/logo.png";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Login from '../login/Login';
import Signup from '../signup/Signup';

function Header() {

  const [loginModal, setLoginModal] = useState(false)
  const [signupModal, setSignupModal] = useState(false)

  const LoginFnc = async () => {
    setLoginModal(true)

  }
  const SignupFnc = async () => {
    setSignupModal(true)
  }
  const closeLogin=async()=>{
    setLoginModal(false)
  }
  return (
    <>
      <div class="header-area">
        <div class="classy-nav-container dark breakpoint-off">
          <div class="container">

            <nav class="classy-navbar justify-content-between" id="dreamNav">

              {/* <a class="nav-brand" href="index-2.html"><img src={logo} alt="logo" /> CV Builder.</a> */}
              <Link class="nav-brand" to={"/"}><img src={logo} alt="logo" /> CV Builder.</Link>

              <div class="classy-navbar-toggler">
                <span class="navbarToggler"><span></span><span></span><span></span></span>
              </div>

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

                  <a onClick={LoginFnc} class="open-popup-link btn login-btn mr-im">Log in</a>
                  <a onClick={SignupFnc} class="open-signup-link btn login-btn">Signup </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Modal className="modal fade" size="md" show={loginModal} onHide={setLoginModal} style={{marginTop:"70px"}}>
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header">

                <button type="button" className="btn-close" onClick={closeLogin} data-dismiss="modal">X</button>
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

      <Modal className="modal fade" size="md" show={signupModal} onHide={setSignupModal} style={{marginTop:"70px"}}>
        <div className="" role="document">
          <div className="">
            <form >
              <div className="modal-header">

                <button type="button" className="btn-close" onClick={() => setSignupModal(false)} data-dismiss="modal">X</button>
              </div>
              <div className="modal-body">
                <Suspense>
                  <Signup/>
                  
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