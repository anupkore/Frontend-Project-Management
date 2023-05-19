import React, { useState } from 'react';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="login-page">
      <div className="toggle-container">
        <span>Login</span>
        <label className="switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        <span>Signup</span>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {isSignup && <input type="password" placeholder="Confirm Password" required />}
        <button type="submit">{isSignup ? 'Create Account' : 'Sign In'}</button>
      </form>
    </div>
  );
};

export default LoginPage;
