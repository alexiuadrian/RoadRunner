import React, { Navigate } from 'react-router';

export default function RequireAuth({ children }) {

    return localStorage.getItem('token')
      ? children 
      : <Navigate to="/login" replace />;
  }
  