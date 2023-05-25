import React from "react";
import * as Components from "./Components";
import { useRef } from 'react';
import { Email } from "@mui/icons-material";

function LoginForm() 
{
  const email = useRef("");
  const password = useRef("");

  function handleSignIn()
  {
    localStorage.setItem("USERNAME",email.current.value);
    window.location.href= "/allprojects" ;
  }
  
  const [signIn, toggle] = React.useState(true);
  return (
    <>
      <Components.Container style={{margin:"50px"}}>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" ref={email} />
            <Components.Input type="password" placeholder="Password" ref={password} />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button onClick={handleSignIn}>Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back </Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
}
export default LoginForm;
