import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import AuthenticationService from "../Services/AuthenticationService";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Make an API call to verify the email
    // Set `otpSent` to true if the email is verified
    // Display a success message if the email is verified and OTP is sent successfully
    const payload={Email_ID:email};
    console.log(payload);
    AuthenticationService.EmailSubmit(payload)
  .then(response => {
    // Handle the response data
    console.log(response.data);
    setOtpSent(true);
    setErrorMessage("");
  })
  .catch(error => {
    // Handle the error
    console.error(error);
    setErrorMessage("Wrong Email");
  });
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Make an API call to verify the OTP
    // Set `otpVerified` to true if the OTP is verified
    // Display a success message if the OTP is verified
    const payload={
      Email_ID:email,otp:String(otp)};
    console.log(payload);
    AuthenticationService.OtpSubmit(payload)
  .then(response => {
    // Handle the response data
    console.log(response.data);
    setOtpVerified(true);
    setErrorMessage("");
  })
  .catch(error => {
    // Handle the error
    console.error(error);
    setErrorMessage("Wrong Otp");
  });


    
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Perform password validation and matching
    if (newPassword === confirmPassword) {
      // Make an API call to reset the password
      // Display a success message if the password is reset successfully
      const payload={new_password:newPassword};
      console.log(payload);
      AuthenticationService.PasswordReset(payload)
    .then(response => {
      // Handle the response data
      console.log(response.data);
      setPasswordResetSuccess(true);
      setErrorMessage("");
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      setErrorMessage("Password Not reset");
    });

      
      
    } else {
      setErrorMessage("Passwords do not match.");
    }
  };

  if (passwordResetSuccess) {
    return (
      <>
        <LoginForm />
        <div className="text-center text-green-600" style={{ marginTop: "-20px" }}>
          Password Reset Successfully.
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {otpSent && otpVerified ? "Reset Password" : otpSent ? "Enter OTP" : "Verify Your Email First"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={otpVerified ? handlePasswordReset : otpSent ? handleOtpSubmit : handleEmailSubmit}>
            {!otpSent && !otpVerified && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            {otpSent && !otpVerified && (
              <div>
                <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter OTP
                </label>
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    autoComplete="one-time-code"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            {otpSent && otpVerified && (
              <>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    New Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {otpSent && otpVerified ? "Reset Password" : otpSent ? "Verify" : "Send OTP"}
              </button>
            </div>

            {errorMessage && <div className="text-center text-red-600">{errorMessage}</div>}

            <div className="center">
              <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500 center underline">
                Back To Login.
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
