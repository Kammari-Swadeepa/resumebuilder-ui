import styled from "styled-components";
import { colors } from "./elements.js";

export const Styles = styled.div`
   
        .login-area {
            padding : 70px 0;
            .login-box {
                max-width : 500px;
                margin: auto;
                border: 1px solid ${colors.border1};
                box-shadow: 0 0px 20px rgba(0,0,0,0.08);
                padding: 25px 30px 35px;
                border-radius: 5px;
                .login-title {
                    h3 {
                        color : ${colors.black2};
                        text-transform: uppercase;
                        font-weight: 600;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 50%;
                            margin-left: -25px;
                        }

                        @media(max-width: 575px) {
                            font-size : 20px;
                        }
                    }
                }

                form.form {
                    p.form-control {
                        padding      : 0;
                        width        : auto;
                        height       : auto;
                        background   : transparent;
                        border       : none;
                        margin-bottom: 28px;
                        position     : relative;

                        label {
                            font-size : 15px;
                            color : ${colors.text1};
                            font-weight : 500;

                            @media(max-width: 575px) {
                                font-size : 14px;
                            }
                        }

                        input {
                            width           : 100%;
                            height          : 48px;
                            background-color: #ffffff;
                            font-size       : 14px;
                            padding         : 15px 20px;
                            color           : ${colors.black1};
                            border          : 1px solid ${colors.border3};
                            border-radius : 5px;

                            &::placeholder {
                                font-size : 14px;
                                font-style: italic;
                                color     : ${colors.text3};

                                @media(max-width: 575px) {
                                    font-size : 13px;
                                }
                            }

                            &:focus {
                                border-color : ${colors.green};
                            }

                            @media(max-width: 575px) {
                                height : 40px;
                            }
                        }

                      

                       

                        span {
                            color      : ${colors.red};
                            font-weight: 300;
                            position   : absolute;
                            bottom     : -20px;
                            left       : 0;
                            visibility : hidden;
                        }
                    }

                    p.form-control.success {
                        input {
                            border: 2px solid ${colors.green};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f058";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.green};
                            font-weight: 900;
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        input {
                            border: 2px solid ${colors.red};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f06a";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.red};
                            font-weight: 900;
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        span {
                            visibility: visible;
                        }
                    }

                    button {
                        font-size  : 16px;
                        color      : #fff;
                        background : ${colors.gr_bg};
                        width      : 100%;
                        height     : 48px;
                        font-weight: 500;
                        border     : none;
                        border-radius : 5px;
                        text-transform: uppercase;
                        margin-bottom : 20px;

                        &:hover {
                            background: ${colors.gr_bg2};

                            i {
                                color: #ffffff;
                            }
                        }

                        @media(max-width: 575px) {
                            font-size : 15px;
                            height     : 40px;
                        }
                    }

                    .save-forget-password {
                        margin-bottom: 15px;
                        .save-passowrd {
                            label {
                                font-size: 14px;
                                color: ${colors.text3};
                                display: block;
                                font-weight : 500;
                                margin-bottom : 0;
                                cursor: pointer;

                                input[type=checkbox] {
                                    border : 2px solid ${colors.border3};
                                    appearance: none;
                                    width: 18px;
                                    height: 18px;
                                    cursor: pointer;
                                    margin-right: 6px;
                                    position: relative;
                                    top: 4px;

                                    &:focus {
                                        outline: none;
                                    }

                                    &:checked {
                                        background-color: ${colors.green};
                                        background: ${colors.green} url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 2px 2px no-repeat;
                                        border-color : ${colors.green};
                                    }
                                }
                            }
                        }
                        .forget-password {
                            margin-top: 3px;
                            a {
                                font-size : 14px;
                                color : ${colors.green};
                                font-weight : 500;
                                &:hover {
                                    text-decoration : underline;
                                }
                            }
                        }
                    }

                    .not_account-btn {
                        border-bottom: 1px solid ${colors.border1};
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        p {
                            font-size : 14px;
                            color     : ${colors.text3};
                            a {
                                font-size : 14px;
                                color : ${colors.green};
                                font-weight : 500;
                                &:hover {
                                    text-decoration : underline;
                                }
                            }
                        }
                    }

                    .social-login {
                        p {
                            font-size : 14px;
                            color     : ${colors.text3};
                            margin-bottom : 15px;
                        }
                        ul {
                            li {
                                a {
                                    font-size: 14px;
                                    color: #ffffff;
                                    display: inline-block;
                                    width: 110px;
                                    height: 40px;
                                    border-radius: 30px;
                                    padding-top: 10px;
                                    i {
                                        margin-right : 3px;
                                    }
                                    &:hover {
                                        background: ${colors.green} !important;
                                    }import { colors } from './../../../components/common/element/elements';

                                }
                                &:nth-child(1) {
                                    a {
                                        background: #DB4437;
                                    }
                                }
                                &:nth-child(2) {
                                    a {
                                        background: #4267B2;
                                    }
                                }
                                &:nth-child(3) {
                                    a {
                                        background: #1DA1F2;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
        }
    

   
        .form-area {
            .form-box {
                max-width : 700px;
                margin: auto;
                border: 1px solid ${colors.border1};
                box-shadow: 0 0px 20px rgba(0,0,0,0.08);
                padding: 25px 30px;
                border-radius: 5px;
                .form-title {
                    h3 {
                        color : ${colors.black2};
                        text-transform: uppercase;
                        font-weight: 600;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 50%;
                            margin-left: -25px;
                        }

                        @media(max-width: 575px) {
                            font-size : 20px;
                        }
                    }
                }

                form.form {
                    p.form-control {
                        padding      : 0;
                        width        : auto;
                        height       : auto;
                        background   : transparent;
                        border       : none;
                        margin-bottom: 15px;
                        position     : relative;
                        color           : ${colors.black1};
                        

                        label {
                            font-size : 15px;
                            color : ${colors.text1};
                            font-weight : 500;

                            @media(max-width: 575px) {
                                font-size : 14px;
                            }
                        }

                        input {
                            width           : 100%;
                            height          : 48px;
                            background-color: #ffffff;
                            font-size       : 14px;
                            padding         : 15px 20px;
                            color           : ${colors.black1};
                            border          : 1px solid ${colors.border3};
                            border-radius : 5px;

                            &::placeholder {
                                font-size : 14px;
                                font-style: italic;
                                color     : ${colors.text3};

                                @media(max-width: 575px) {
                                    font-size : 13px;
                                }
                            }

                            &:focus {
                                border-color : ${colors.green};
                            }

                            @media(max-width: 575px) {
                                height : 40px;
                            }
                        }

                        span {
                            color      : ${colors.red};
                            font-weight: 300;
                            position   : absolute;
                            bottom     : -20px;
                            left       : 0;
                            visibility : hidden;
                        }
                    }

                    p.form-control.success {
                        input {
                            border: 2px solid ${colors.green};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f058";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.green};
                            font-weight: 900;
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        input {
                            border: 2px solid ${colors.red};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f06a";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.red};
                            font-weight: 900;
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        span {
                            visibility: visible;
                        }
                    }

                    button {
                        font-size  : 16px;
                        color      : #fff;
                        background : ${colors.gr_bg};
                        width      : 100%;
                        height     : 48px;
                        font-weight: 500;
                        border     : none;
                        border-radius : 5px;
                        text-transform: uppercase;
                        margin-bottom : 20px;

                        &:hover {
                            background: ${colors.gr_bg2};

                            i {
                                color: #ffffff;
                            }
                        }

                        @media(max-width: 575px) {
                            font-size : 15px;
                            height     : 40px;
                        }
                    }
                }

                .have_account-btn {
                    p {
                        font-size : 14px;
                        color     : ${colors.text3};
                        a {
                            font-size : 14px;
                            color : ${colors.green};
                            font-weight : 500;
                            &:hover {
                                text-decoration : underline;
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
        }
    

    select{
        width           : 100%;
        height          : 48px;
        background-color: #ffffff;
        font-size       : 14px;
        padding         : 15px 20px;
        color           : ${colors.black1};
        border          : 1px solid ${colors.border3};
        border-radius : 5px;

        option{
            font-size : 14px;
                font-style: italic;
                color     : ${colors.text3};
        }
    }

    .card1{
        color           : ${colors.black1};
        border          : 1px solid ${colors.border3};
        border-radius : 5px;
        
    }
    .icons{
        display:inline;
        color           : ${colors.black1};
        border          : 1px solid ${colors.border3};
        border-radius : 5px;
       font-size:18px;
       margin:5px;
       padding:8px;
    }
    .cancelIcon{
        font-size:18px;
        
    }
    .message{
        font-size:20px
    }
    textarea{
        width           : 100%;
        height          : 180px;
        background-color: #ffffff;
        font-size       : 14px;
        padding         : 15px 20px;
        color           : ${colors.black1};
        border          : 1px solid ${colors.border3};
        border-radius : 5px;
        &::placeholder {
            font-size : 14px;
            font-style: italic;
            color     : ${colors.text3};
            @media(max-width: 575px) {
                font-size : 13px;
            }
        }

    }

    .fa-clock{
        color:yellow;
        font-size:12px
        padding-right:5px
        
    }
    
    
   .refer-icons{
    border          : 1px solid ${colors.border3};
    border-radius : 5px;
    padding:4px;
    width:40px
   }
   

   table{
    border          : 1px solid ${colors.border3};
    border-radius : 5px;
    

   }
   .table-mark{
    margin-left:15%
   }
   td{
    margin-top:4px;
    text-align:center
   }
   th{
    text-align:center
   }

   .main-div{
    margin: auto;
    border: 1px solid ${colors.border1};
    box-shadow: 0 0px 20px rgba(0,0,0,0.08);
    padding: 25px 30px 35px;
    border-radius: 5px;

    @media(max-width: 575px) {
        width:100vw;
        overflow: scroll; 
        
    }
   }
  h3{
    color : ${colors.black2};
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 10px;
    margin-bottom: 20px;
    position: relative;
    &:before {
        position: absolute;
        content: "";
        background: ${colors.green};
        width: 50px;
        height: 2px;
        bottom: 0;
        left: 50%;
        margin-left: -25px;
    }
    
  }

  th{
    background: ${colors.green};
  }

  p {
    word-spacing:1px;
    padding:2px;
  }
  
  .projects-icon{
    margin-right:5px
  }

  .message{
    text-align:center;
    color:black
  }
  img{
    width:100px;
  }
  

  .tbl{
    border          : 1px solid ${colors.border3};
    border-radius : 5px;
    margin-right    :30
  }
  .fa-share-nodes{
    margin-left:70%
  }
  i:hover{
        cursor:pointer
    }

    .mainpagination{
        margin-left:35%;
 
      }
      .page-item label{
         // height:50px;
         // width:60px
      }
      .page-item{
         margin-right:15px;
         
      }
                 .page-link {
                 color: ${colors.green};
                 border: 1px solid ${colors.green};
                 font-size:15px;
                 }
 
                 .page-link:hover {
                 background-color: ${colors.green};
                 }
 
                 .page-item.active .page-link {
                 background-color: ${colors.green}; 
                 border-color:${colors.green};
                 color: white; 
                 }
 
                 .course-item:hover {
                     cursor: pointer;
                 }

                 .card-body{
                    p{
                        color: #878484;
                    }
                 }
                



`
    ;