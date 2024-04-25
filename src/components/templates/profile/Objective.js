import React from 'react'

function Objective() {
    return (
        <>


            <div class="form-group add-skill mt-s">
                <h2>Profile Summary</h2>
                <div class="block-container">

                    <div class="all-skills">
                        <div class="new-skills">
                                <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="About Me :"></textarea>
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{marginTop:"5px"}}>Save</button>


                </div>
            </div>
        </>
    )
}

export default Objective