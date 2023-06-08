import React from "react";
import * as Components from "./Components";
import { useRef } from 'react';
import { Email } from "@mui/icons-material";
import { Input } from "@mui/material";
import { Link} from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import { useState } from "react";
import AuthenticationConfiguration from "../Configurations/AuthenticationConfiguration";
import axios from "axios";
import AuthenticationService from "../Services/AuthenticationService";


export const  LoginForm = ({ toggleSignup }) => 
{

    const email = useRef("");
    const password = useRef("");
    const [errorMessageEmail , setErrorMessageEmail] = useState('');
    const [errorMessagePassword , setErrorMessagePassword] = useState('');
    const navigate = useNavigate();
    
    function handleInputChangeEmail()
    {
      setErrorMessageEmail('');
    }

    function handleInputChangePassword()
    {
      setErrorMessagePassword('');
    }
    
    function handleSignIn(event)
    {
    
      event.preventDefault();
      var payload = 
      {
          email_id: email.current.value,
          password: password.current.value
      }
      console.log("data",payload);
      AuthenticationService.signIn(payload).then((response) => {
        const message = response.data.Return;
        console.log("message", message);
        const token = response.data.token;
        // Store the token in local storage
        localStorage.setItem('token', token);
        console.log("token1", token);
      // Redirect the user to a protected route
        navigate('/allprojects'); // Navigate to /allprojects
      })
      .catch((error)=>{
        console.error('Login failed:', error);
        // console.log(error.response.data);    
        // console.log(error.response.data.error);
        // if(error.response.data.error === "Email is invalid")
        // {
        //   setErrorMessageEmail("Invalid Email");
        // }
        // else if(error.response.data.error === "Password is invalid")
        // {
        //   setErrorMessagePassword("Invalid Password");
        // }
      })

    }
 return (
   <>
     
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Sign in to your account
         </h2>
       </div>

       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6" >
           <div>
             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
               Email address
             </label>
             <div className="mt-2">
               <input
                 id="email"
                 name="email"
                 type="email"
                 ref={email}
                 onChange={handleInputChangeEmail}
                //  onChange={handleInputChange}
                 autoComplete="email"
                 required
                 className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
               <span className="text-danger">{errorMessageEmail}</span>
             </div>
           </div>

           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Password
               </label>
               <div className="text-sm">
                 <a href="/forgotPassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                   Forgot password?
                 </a>
               </div>
             </div>
             <div className="mt-2">
               <input
                 id="password"
                 name="password"
                 type="password"
                 ref={password}

                onChange={handleInputChangePassword}
                 autoComplete="current-password"
                 required
                 className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
               <span className="text-danger">{errorMessagePassword}</span>
             </div>
           </div>

           <div>
             <button
               type="submit"
               className="flex w-full justify-center rounded-md btn btn-primary bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={handleSignIn}
             >
               Sign in
             </button>
           </div>
         </form>

         

        
       </div>
     </div>
   </>
 )
}
