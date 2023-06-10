import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

const ProtectedRoute = ({ element: Element}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated ? (
    <>
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
