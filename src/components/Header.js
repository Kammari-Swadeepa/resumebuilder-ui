import React from 'react'
import logo from "../assests/img/core-img/logo.png";

function Header() {
  return (
    <>
      <div class="header-area">
        <div class="classy-nav-container dark breakpoint-off">
          <div class="container">

            <nav class="classy-navbar justify-content-between" id="dreamNav">

              <a class="nav-brand" href="index-2.html"><img src={logo} alt="logo" /> CV Builder.</a>

              <div class="classy-navbar-toggler">
                <span class="navbarToggler"><span></span><span></span><span></span></span>
              </div>

              <div class="classy-menu">

                <div class="classycloseIcon">
                  <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                </div>

                <div class="classynav">
                  <ul id="nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="templates.html">Templates</a></li>
                    <li><a href="contact-us.html">Contact</a></li>
                  </ul>

                  <a href="#test-popup" class="open-popup-link btn login-btn mr-im">Log in</a>
                  <a href="#signup-popup" class="open-signup-link btn login-btn">Signup </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header