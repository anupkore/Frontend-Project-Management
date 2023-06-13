import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

const ProtectedRoute = ({ element: Element}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated ? (
    <>
      <Navbar></Navbar>
      <Element></Element>
      {/* Display the protected content */}
    </>
  ) : (
    <>
      <Home></Home>
    </>
  );
};

export default ProtectedRoute;
