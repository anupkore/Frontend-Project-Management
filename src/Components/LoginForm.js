import React from "react";
import * as Components from "./Components";
import { useRef } from 'react';
import { Email } from "@mui/icons-material";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthenticationConfiguration from "../Configurations/AuthenticationConfiguration";
import axios from "axios";
import AuthenticationService from "../Services/AuthenticationService";


export const  LoginForm = ({ toggleSignup }) => 
{

    const email = useRef("");
    const password = useRef("");
    const [errorMessageFull , setErrorMessageFull] = useState('');
    const [errorMessageEmail , setErrorMessageEmail] = useState('');
    const [errorMessagePassword , setErrorMessagePassword] = useState('');
    const message = useState("");
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    // function handleInputChange(event) 
    // {
    //  setEmail(event.target.value);
    //  setErrorMessageEmail('');
    // }

    // function handleInputChangePassword(event) 
    // {
    //  setPassword(event.target.value);
    //  setErrorMessagePassword('');
    // }
    
    function handleSignIn(event)
    {
    //  event.preventDefault();
    //  const email = document.getElementById('email').value;
    //  const password = document.getElementById('password').value;
    //  if(email !== 'anup')
    //  {
    //    setErrorMessageEmail('Invalid Email');
    //    return;
    //  }
    //  else if(password !== 'anup')
    //  {
    //    setErrorMessagePassword('Invalid Password');
    //    return;
    //  }
    //  else 
    //  {
    //    localStorage.setItem("USERNAME",document.getElementById('email').value);
    //    window.location.href= "/allprojects" ;
    //  }
      event.preventDefault();
      var payload = 
      {
          email_id: email.current.value,
          password: password.current.value
      }

      AuthenticationService.SignIn(payload).then((response)=>{
        const message = response.data.Return;
        console.log(message);
        if(message === "login sucessfull")
        {
            window.location.href = '/allprojects';
        }
        else if(message === "Invalid Email")
        {
          setErrorMessageEmail('Invalid Email');

          
          return;
        }
        else if(message === "Invalid Password")
        {
          setErrorMessagePassword('Invalid Password');
          return;
        }

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
                 <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                 
                //  onChange={handleInputChangePassword}
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

         <p className="mt-10 text-center text-sm text-gray-500">
           Not a member?{' '}
           <Link  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={toggleSignup} type="submit">
           Signup
           </Link>
         </p>

        
       </div>
     </div>
   </>
 )
}
