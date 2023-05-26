 import React , { useState } from "react";
 import * as Components from "./Components";
 import { useRef } from 'react';
 import { Email } from "@mui/icons-material";
 import { Input } from "@mui/material";

// function LoginForm() 
// {
//   const email = useRef("");
//   const password = useRef("");

//   function handleSignIn()
//   {
//     localStorage.setItem("USERNAME",email.current.value);
//     window.location.href= "/allprojects" ;
//   }
  
//   const [signIn, toggle] = React.useState(true);
//   return (
//     <>
//       <Components.Container style={{margin:"50px"}}>
//         <Components.SignUpContainer signinIn={signIn}>
//           <Components.Form>
//             <Components.Title>Create Account</Components.Title>
//             <Components.Input type="text" placeholder="Name" />
//             <Components.Input type="email" placeholder="Email" />
//             <Components.Input type="password" placeholder="Password" />
//             <Components.Button>Sign Up</Components.Button>
//           </Components.Form>
//         </Components.SignUpContainer>

//         <Components.SignInContainer signinIn={signIn}>
//           <Components.Form>
//             <Components.Title>Sign in</Components.Title>
//             <Input type="email" placeholder="Email" ref={email} />
//             <Components.Input type="password" placeholder="Password" ref={password} />
//             <Components.Anchor href="#">
//               Forgot your password?
//             </Components.Anchor>
//             <Components.Button onClick={handleSignIn}>Sigin In</Components.Button>
//           </Components.Form>
//         </Components.SignInContainer>

//         <Components.OverlayContainer signinIn={signIn}>
//           <Components.Overlay signinIn={signIn}>
//             <Components.LeftOverlayPanel signinIn={signIn}>
//               <Components.Title>Welcome Back </Components.Title>
//               <Components.Paragraph>
//                 To keep connected with us please login with your personal info
//               </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(true)}>
//                 Sign In
//               </Components.GhostButton>
//             </Components.LeftOverlayPanel>

//             <Components.RightOverlayPanel signinIn={signIn}>
//               <Components.Title>Hello, Friend!</Components.Title>
//               <Components.Paragraph>
//                 Enter Your personal details and start journey with us
//               </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(false)}>
//                 Sigin Up
//               </Components.GhostButton>
//             </Components.RightOverlayPanel>
//           </Components.Overlay>
//         </Components.OverlayContainer>
//       </Components.Container>
//     </>
//   );
// }
// export default LoginForm;


export default function LoginForm() 
{

    const email = useRef("");
    const [errorMessageFull, setErrorMessageFull] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [okMessage, setokMessage] = useState('');

    function handleSignIn()
    {
      setErrorMessage('');
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (username !== 'anup@infobellit.com' && password !== 'anup')
       {
          setErrorMessageFull('Invalid Credentials');
       }
       else if (username !== 'anup@infobellit.com')
       {
        setErrorMessageEmail('Invalid email');
       }
       else if (password !== 'anup')
       {
        setErrorMessage('Invalid password');
        return;
      }
      else
      {
        setokMessage('ok');
      }

      if(okMessage === 'ok')
      {
        localStorage.setItem("USERNAME",email.current.value);
        window.location.href = "/allprojects" ;
      }


    }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <span className="text-danger mt-2 text-center">{errorMessageFull}</span>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/allprojects" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input id="email" name="email" type="email" ref={email} autoComplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span className="text-danger">{errorMessageEmail}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span className="text-danger">{errorMessage}</span>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSignIn}> 
                Sign in
              </button>
            </div>
          </form>

          

          <p className="mt-10 text-center text-sm text-gray-500"> Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up Wth Us
            </a>
          </p>

          <div className="text-sm text-center mt-3">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

