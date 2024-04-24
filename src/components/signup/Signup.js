import React from 'react'

function Signup() {
  return (
    <>
     <div id="signup-popup" >
      <div class="top-form-header">
          <h4>Signup Form</h4>
      </div>
      <form action="#" method="post" id="main_Signup_form" novalidate="">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="text" name="name" id="name3" required=""/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                    </div>
                </div>
               <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="text" name="name" id="name4" required=""/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                </div>
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="password" name="name" id="name5" required=""/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                    </div>
                </div>
                <div class="col-12 col-md-12">
                    <div class="group">
                        <input type="password" name="name" id="name6" required=""/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Confirm Password</label>
                    </div>
                </div>
                
                <div class="col-12 col-sm-5 text-left ">
                    <button type="submit" class="btn dream-btn">Login</button>
                </div>
                <div class="col-12 col-sm-7 text-left">
                    <p class="mb-0 mt-10">Don't have an account? <a href="" >Sign up</a></p>
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

export default Signup