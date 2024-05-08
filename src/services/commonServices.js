// import axios from 'react-native-axios';
import axios from 'axios';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// let apiurl = "http://43.204.36.226";
let apiurl = "http://localhost:8080";
const tenantid = "bb54fcfc";
// var tntId=JSON.parse(localStorage.getItem('tID')) 
// var tenantid = '526daf25';
// let apiurl = "https://asseshub.com";
// var tenantidData='';

      localStorage.setItem("tID",JSON.stringify("bb54fcfc"));
     


export const GetApi = async (fields, action) => {
  
  var tntId=JSON.parse(localStorage.getItem('tID'))

  const sessiondetails = localStorage.getItem(`userdata${tntId}`);
  const userdata = JSON.parse(sessiondetails);

 
  const headers = {
    'content-type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'x-access-token': '',



  }

  // console.log("final tenant id",tenantid2);

  let url = '';
  if (action === 'INTRO') {
    url = '/api/v4/logo/get';
  }
  if (action === 'TENANT') {
    url = '/api/v4/tenant/get';
  }

  if (action === 'LOGIN') {
    url = '/api/v4/auth/loginuser';
  }
  if (action === 'VERIFY') {
    url = '/api/v4/auth/verifyotp';
  }
  if (action === 'CONSTITUENCY') {
    url = '/api/v4/areas/get';
  }
  if (action === 'SIGNUP') {
    url = '/api/v4/auth/signup';
  }

  if (action === 'STRIPEKEY') {
    url = '/api/v4/users/stripekeys';
  }
  
  if(action =='SENDVERIFYMOBILE'){
    url = '/api/v4/auth/sendverifymobilenumber';
  }
  if(action =='VERIFYMOBILE'){
    url = '/api/v4/auth/verifymobilenumber';
  }

  if (action == 'PASSLOGIN') {
    url = '/api/v4/auth/passwordlogin';
  }

  if (action == 'FORGOTPASSWORD') {
    url = '/api/v4/auth/forgotpassword';
  }
  if (action == 'COMPETITIVEEXAM') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/exams/get';
  }
 

  if (action == 'STATES') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/states/get';
  }

  if (action == 'DISTRICTS') {
    url = '/api/v4/districts/get';
  }

 
  if (action != 'SIGNUP' && action != 'LOGIN' && action != 'VERIFY' && action !='STRIPEKEY' 
    && action !='PASSLOGIN' && action  !='FORGOTPASSWORD' && action !='DISTRICTS' && action!='COMPETITIVEEXAM') {
    // console.log("inside 47");
    // console.log("teeeeeee",tenantid);
    fields.query.tenantid = tenantid;
  }
  if (action === 'LOGIN' || action === 'VERIFY' || action !='STRIPEKEY' || action !='NONITSKILLS'
  || action  =='PASSLOGIN' || action =='FORGOTPASSWORD'|| action =='COMPETITIVEEXAM' ) {
    fields.tenantid = tenantid;
    // console.log("tenant id inside fields",fields.tenantid);
  }
  if(action !='DISTRICTS'){
    fields.tenantid = tenantid;
    }
  // console.log(url);
  // console.log(fields);
  if(action ==='NONITSKILLS'){ 
    alert(JSON.stringify(fields));
  }
  



  // if (action === 'BANNER') {
  //   url = '/api/v4/banner/get';
    
  // }

  
  return await axios.post(apiurl + url, fields, { 'headers': headers })
    .then((res) => {
    //   console.log("response getting",res);
      return res.data;
    }).catch((error) => {
      // window.location = "/";
      return error;
    });


}


export const PostApi = async (fields, action, constId) => {
  var tntId=JSON.parse(localStorage.getItem('tID'))

  const sessiondetails = localStorage.getItem(`userdata${tntId}`);
  const userdata = JSON.parse(sessiondetails);
  // console.log("usedata",userdata);
  // const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
  // const sessiondetails = await AsyncStorage.getItem('userdata');
  // const constuserdetails = JSON.parse(sessiondetails);

  // console.log("userdata?.accessToken mate",userdata?.accessToken);
   const constuserdetails = ''
  const headers = {
    'content-type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    // 'x-access-token': ''

    'x-access-token': userdata?.accessToken!=undefined ? userdata.accessToken: "",
    
    // 'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzZmMmRiZTE4MGVmZjgxYTRjNTU1YSIsImlhdCI6MTcwMjI5NDM5MSwiZXhwIjoxNzAyODk5MTkxfQ.aawkkd0eCdY3UEPgbXzShKVZrmp1PXnl4Fyvx2lSRGw",



  }

  //alert("action"+action);

  let url = '';

  if (action === 'TENANT') {
    url = '/api/v4/tenant/get';
  }
  if (action === 'RAZORPAYCHECKOUT') {
    url = '/api/v4/razopay-checkout';
  }
  if (action === 'SOCIALLINK') {
    url = '/api/v4/sociallink/get';
  }
  if (action === 'SETTING') {
    url = '/api/v4/settings/get'
  }
  if(action  =='ENROLL'){

    url ='/api/v4/users/enrollcourse'
  }
  if(action  =='ANALYTICS'){
    fields.userid =constuserdetails.user.id;
    url ='/api/v4/users/getuserdataanalytics'
  }
  if(action =='RAZORPAYORDERID'){
    url ='/api/v4/users/createorder';
  }

  

  if(action =='VERIFYPAYMENTS'){
    url ='/api/v4/users/verifypayments';
  }
  if(action =='VERIFYPAYMENTSK8S'){
    url ='/api/v4/users/verifypaymentsk8s';
  }
  if (action === 'ANNOUNCEMENTS') {
    url = '/api/v4/common/get';
  }

  if (action === 'BANNER') {
    url = '/api/v4/banner/get';
  }
 
  if (action === 'VPTTYPES') {
    url = '/api/v4/headertypes/get';
  }

  if (action === 'YOUTUBEVIDEOS') {
    url = '/api/v4/videos/get';
  }
  if (action === 'TopLevelOverview') {
    url = '/api/v4/thumbnail/get';
  }

  if (action === 'CONSTITUENCYDEV') {
    url = '/api/v4/sliderimages/get';
  }
  if (action === 'EVENTS') {
    url = '/api/v4/events/get';
  }
  if (action === 'NEWS') {
    url = '/api/v4/news/get';
  }

  if (action === 'UNIVERSITY') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/university/get';
  }
  if (action == 'CHANGEPASSWORD') {
    // console.log(constuserdetails.user)
    // fields.userid =constuserdetails.user.id;
    url = '/api/v4/auth/changepassword';
  }
  if (action === 'EDUCATIONTYPES') {
    url = '/api/v4/edutypes/get';
  }
  if (action === 'CATEGORY') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/category/get';
  }
  if (action === 'EDUCATION') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/education/get';
  }

  if (action === 'NONITSKILLS') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/itprograms/get';
  }

  if (action === 'STATES') {
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/states/get';
  }

  if (action === 'ITPROGRAMS') {
    fields.userid ="";
    fields.tenantid =tenantid;
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/itprograms/get';
  }
  if (action == 'TOPLEVELPROGRAMMING') {
    url = '/api/v4/toplevelprogram/get';
  }

  if (action === 'EDUPORGRAMS') {
    // console.log("tenantid" + tenantid);
    fields.query.tenant = { $elemMatch: { "value": tenantid } };
    url = '/api/v4/eduprograms/client';
  }

  if (action === 'PROGRAMCOURSES') {
    fields.userid =userdata.id;
    url = '/api/v4/programcourses/get';
  }

  if (action === 'STUDENTPROGRAM') {

    url = '/api/v4/studentcourses/get';
  }

  if (action === 'ACADEMICCOURSES') {

    url = '/api/v4/academics/get';
  }

  if (action === 'INDIVIDUALEDUPROGRAM') {

    url = '/api/v4/eduprograms/get';
  }

  if (action === 'ITPROGRAMING') {
    url = '/api/v4/itprograms/details';
  }
  if (action === 'STUDENTPROGRAMMING') {
    url = '/api/v4/studentcourses/details';
  }
  if (action === 'ACADEMICDETAILS') {
    url = '/api/v4/academics/details';
  }

     
  if (action === 'EDUCATIONTYPES') {
    url = '/api/v4/edutypes/get';
  }

  if (action === 'SEMISTER') {
    url = '/api/v4/semisters/get';
  }

  if (action === 'BRANCHES') {
    url = '/api/v4/branches/get';
  }

  if (action === 'ACADEMICTYPE') {
    url = '/api/v4/academicstypes/get';
  }
  if(action ==='DASHOARDLABEL'){ 
    url = '/api/v4/common/get';
  }
  if(action ==='GETDASHOARDLABEL'){
    url = '/api/v4/common/get';
  }
 
  if(action ==='GETDASHOARDLABEL1'){
    url = '/api/v4/common/get';
  }
  if(action ==='TRAININGENROLLMENT' || action ==='SAVESKILLS' || action ==='SAVECERTIFICATE'
   || action ==='SAVEUSERPROJECT' ||action ==='USEREDUCATION' || action ==='SAVEHOBBIES' || action ==='SAVEUSERREFERENCES' || action ==='SAVEUSERSUBSCRIPTION'
    ||action ==='SAVEUSERMAKRS' ){
    url = '/api/v4/common/save';
  }
  if(action ==='TRAININGENROLLMENTGET' || action ==='USERSKILLS' || 
     action ==='USERCERTIFICATE' || action ==='USERPROJECTS' ||action ==='USERSUBSCRIPTION'
     || action ==='GETUSEEDUCATION' || action ==='USERHOBBIES' || action ==='USERREFERENCES'||
     action ==='USERMARKS'){
    url = '/api/v4/common/get';
  }
  if(action ==='DELETESKILLS' || action ==='DELETECERTIFICATE' || action ==='DELETEUSERPROJECT' || action ==='DELETEHOBBIES'
   || action ==='DELETEUSERREFERENCES' || action ==='DELETEUSERMARKS' || action ==='DELETEUSEREDUCATION'){
    url = '/api/v4/common/delete';
  }

  if(action ==='UPDATEUSERPROJECT' || action ==='UPDATEUSEREDUCATION'|| action ==='SAVEUSERINFO'){
    url = '/api/v4/common/update';
  }
 
  if(action ==='TRAININGCOURSES'){
    url ='/api/v4/trainingcourses/get'
  }
  if(action ==='PLATFORMPURCHASE'){
    url ='/api/v4/users/subscribe';
  }

  if(action ==='GENERATERESUME'){
    url ='/api/v4/users/resume';
  }
  if(action ==='GENERATERESUME2'){
    url ='/api/v4/users/resume2';
  }
  if(action ==='GENERATERESUME3'){
    url ='/api/v4/users/resume3';
  }
  if(action ==='GENERATERESUME4'){
    url ='/api/v4/users/resume4';
  }
  if(action ==='GENERATERESUME5'){
    url ='/api/v4/users/resume5';
  }
  if(action ==='GENERATERESUME6'){
    url ='/api/v4/users/resume6';
  }
  if(action ==='GENERATERESUME7'){
    url ='/api/v4/users/resume7';
  }
  if(action ==='GENERATERESUME8'){
    url ='/api/v4/users/resume8';
  }
  if(action ==='RESUMEFORMAT'){
    url ='/api/v4/resumeformat/get';
  }
  if(action ==='GETQUIZ'){
    url ='/api/v4/questions/start';
  }

  if (action === 'Testimonials') {
    url = '/api/v4/instructor/get';
  }
  if(action ==='CHECKANSWER'){
    url ='/api/v4/questions/checkanswer';
  }
  if(action ==='FINISHQUIZ'){
    url ='/api/v4/questions/finish';
  }
  if(action  =='CHECKSTARTQUIZ'){
    fields.userid =userdata.id;
    url ='/api/v4/users/checkstartquiz'
  }

  if(action  =='FINISHITEM'){
    fields.userid =userdata.id
    url ='/api/v4/users/finishsectionitems'
  }

  if(action  =='FINISHCOURSE'){
    fields.userid =userdata.id;
    url ='/api/v4/users/finishprogramcourses'
  }

  if(action =='LOGOUT'){
    fields.tenantid =tenantid;
    url ='/api/auth/logout';
  }

  if(action =='EXAMTYPE'){
    url ='/api/v4/examtype/get';
  }

  if (action === 'BANNER' || action === 'EVENTS' || action === 'YOUTUBEVIDEOS' ||
    action === 'CONSTITUENCYDEV' || action === 'NEWS' ) {

    
      
    if (constId!="") {
      // console.log("if executing")
    //  console.log(constId,"fields.subappid check form client")

      fields.query.subapplicationid = constId
    }else{
      // console.log("else")
      fields.query.subapplicationid = userdata.user.subapplicationid
    }
  }

  if (action == 'GETNOTIFICATIONS') {
    fields.userid =userdata.id;
    fields.tenantid =tenantid;
    // console.log("notify",fields.userid,fields.tenantid);
    url = '/api/v4/users/notifications';
  }
  if (action == 'DELETEACCOUNT') {
    fields.userid =userdata.id;
    fields.tenantid =tenantid;
    url = '/api/v4/users/delete';
  }
  // if (action == 'GETNOTIFICATIONS') {
  //   fields.userid =userdata.id;
  //   url = '/api/v4/users/delete';
  // }


  if (action != 'EDUCATIONTYPES' && action != 'EDUCATION' && action != 'CATEGORY'
    && action != 'NONITSKILLS' && action != 'STATES' && action != 'ITPROGRAMS' && action!='TOPLEVELPROGRAMMING'
    && action != 'PROGRAMCOURSES' && action != 'ITPROGRAMING' && action != 'EDUPORGRAMS'
    && action != 'STUDENTPROGRAM' && action != 'STUDENTPROGRAMMING'
    && action != 'SEMISTER'  && action != 'BRANCHES'  && action != 'ACADEMICTYPE'
    && action !='ACADEMICCOURSES' && action !='ACADEMICDETAILS' && action !='INDIVIDUALEDUPROGRAM'
    && action !='DASHOARDLABEL'  && action !='TRAININGENROLLMENT' && action !='TRAININGENROLLMENTGET'
    && action !='DELETESKILLS' && action !='USERSKILLS' && action !='SAVESKILLS'
    && action !='SAVECERTIFICATE' && action !='USERCERTIFICATE' && action !='DELETECERTIFICATE'
    && action  !='SAVEUSERPROJECT' && action !='USERPROJECTS' && action  !='UPDATEUSERPROJECT'
    && action !='DELETEUSERPROJECT'  && action != 'UNIVERSITY' && action !='TRAININGCOURSES'
    && action !='USERSUBSCRIPTION' && action !='USEREDUCATION' && action !='GETUSEEDUCATION'
    && action !='UPDATEUSEREDUCATION' && action !='SAVEUSERINFO' && action !='PLATFORMPURCHASE'
    && action !='GENERATERESUME'&& action !='GENERATERESUME2'&& action !='GENERATERESUME3'&& action !='GENERATERESUME4'&& action !='GENERATERESUME5' && action !='GENERATERESUME6' && action !='GENERATERESUME7' && action !='GENERATERESUME8' && action !='USERHOBBIES' && action !='SAVEHOBBIES' && action !='DELETEHOBBIES' && action !='RESUMEFORMAT'
    && action !='SAVEUSERREFERENCES' && action !='DELETEUSERREFERENCES' && action !='USERREFERENCES' 
    && action !='GETQUIZ' && action !='CHECKANSWER' && action !='FINISHQUIZ'
    &&  action !='USERMARKS' &&  action !='SAVEUSERMAKRS' &&  action !='DELETEUSERMARKS' && action !='CHECKSTARTQUIZ' && action !='FINISHCOURSE'
    && action  !='FINISHITEM' && action != "RAZORPAYORDERID" && action  !='FINISHITEM' && action !='LOGOUT' && action !="VERIFYPAYMENTS" && action!='VERIFYPAYMENTSK8S'
    && action !='CHANGEPASSWORD' && action !='GETNOTIFICATIONS' && action !='DELETEACCOUNT' && action !='ENROLL' && action != 'SAVEUSERSUBSCRIPTION' && action !='EXAMTYPE' && action !='Testimonials' &&action !='TopLevelOverview')  {
      

     
    fields.query.tenantid = tenantid;
  }

  if (action === 'HOMEBANNER') {
    url = '/api/v4/banner/get';
  }

  

  return await axios.post(apiurl + url, fields, { 'headers': headers })
    .then((res) => {

      // console.log(res);

      // console.log("the resp",res);

      return res.data;
    }).catch((error) => {
      // window.location = "/";
      console.log("the error is ", error);
      return error;
    });


}

export const GetCourses = async (fields) => {
  return await axios.get(apiurl + "/wp-json/learnpress/v1/courses")
    .then((res) => {
      // console.log(res);
      return res.data;
    }).catch((error) => {
      // window.location = "/";
      return error;
    });


}

export const GetDetailcourse = async (id) => {
  return await axios.get(apiurl + `/wp-json/learnpress/v1/courses/${id}`)
    .then((res) => {

      return res.data;
    }).catch((error) => {
      // window.location = "/";
      return error;
    });


}


 
