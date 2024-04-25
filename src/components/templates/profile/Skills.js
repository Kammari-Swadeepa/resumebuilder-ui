import React, { useState } from 'react'
import { PostApi } from '../../../services/commonServices';
import { toast } from 'react-toastify';

function Skills() {

    const [skill, setSkill] = useState('')


    const saveSkill = async (e) => {
        e.preventDefault();

        if (skill === '') {

            toast.info(
                'Add skill',
                {
                    position: "top-center",
                    autoClose: 1500
                }
            )
        }


        // else {

        //     let skillsmasterda = skillsMasterData.filter((x) => x.key === skill);

        //     let name =skillsmasterda[0].value;

        //     let addedskills = data.filter((x) => x.skillid === skill);



        //     if (addedskills.length > 0) {
              
        //         toast.error('You have already added the skill ', {
        //             position: "top-right",
        //             autoClose: 1500,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //         });

        //     }
        //     else {

        //         const reqdata = {
        //             ptype: 'USERSKILLS',
        //             name: name,
        //             userid: userId,
        //             skillid:skill
        //         }

        //         const SkillResponse = await PostApi(reqdata, 'SAVESKILLS');

        //         // console.log("save skills", SkillResponse.data);
        //         if (SkillResponse.data.id) {
                  

        //             toast.success('Skill saved successfully', {
        //                 position: "top-right",
        //                 autoClose: 2000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "light",
        //                 });

        //                 // getSkills()


                 
        //         } else {
                  
        //             toast.error('Failed to  save skills ', {
        //                 position: "top-right",
        //                 autoClose: 1500,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "light",
        //             });
        //         }
        //     }
          

        // }
        
    }


   const submitSkill = async (val) => {

        setSkill(val)

    }
    return (
        <>
            <div class="form-group add-skill mt-s">
                <h2>Add Skills</h2>
                <div class="block-container">
                    <div class="all-skills">
                        <div class="new-skills">
                            <label>Skill</label>
                            <input type="text" name="skills[]" class="form-control" />
                           
                        </div>
                    </div>


                    <div class="add-blk add-skills btn btn-info mt-50">
                        <i class="fa fa-plus"></i>
                        <span>Add another Skill</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills