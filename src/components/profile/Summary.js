import React, { useEffect, useState } from 'react'
import { PostApi } from '../../services/commonServices';

import AddAboutMe from './AddAboutMe';

const Summary=({fetchData})=> {
const [data,setData]=useState();

    useEffect(()=>{
        getData()
    },[]);

   const getData = async () => {
    var tntId= JSON.parse(localStorage.getItem('tID'))

        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        

        if (sessiondetails != null) {
            const userdata = JSON.parse(sessiondetails);
            const reqparam = {
                pageno: '-1',
                query: {},
                ptype: 'PROFESSIONALSUMMARY'
            }

            const SkillsResponse = await PostApi(reqparam, 'USERSKILLS');
            fetchData(SkillsResponse?.data) 
        }


    }
  return (
    <div>
    </div>
  )
}

export default Summary