import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    // Redirect to the desired route if not authenticated
    navigate('/', { replace: true });
    return null;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;

