import React from 'react';
import { Navigate } from 'react-router-dom';

// This will act as a wrapper to protect the dashboard
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('authToken');  
  
  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
