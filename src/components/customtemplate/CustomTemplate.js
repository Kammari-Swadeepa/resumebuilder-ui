import React from 'react'
import customimg from "../../assests/img/core-img/custom.png"
import { Link } from 'react-router-dom'

function CustomTemplate() {
    return (
        <>

            <section class="container section-padding-0-100">
                <div class="subscribe">
                    <div class="row align-items-center relative">
                        <img src={customimg} alt="" class="custom" />
                        <div class="col-lg-5 col-lg-offset-3 col-md-9 col-xs-12">
                            <h2 class="bold mb-0">Do you Need a Complete Custom CV Template?</h2>
                        </div>
                        <div class="col-lg-3 col-lg-offset-1 col-md-3 col-sm-12 text-center">
                            {/* <a href="contact-us.html" class="button mt-s">Send a Request</a> */}
                            <Link class="button mt-s" to={"/contact"}>Send a Request</Link>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default CustomTemplate