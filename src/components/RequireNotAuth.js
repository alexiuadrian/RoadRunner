import React, { Navigate } from 'react-router';

export default function RequireNotAuth({ children }) {

    return !localStorage.getItem('token')
      ? children 
      : <Navigate to="/" replace />;
  }
  