import { useState } from 'react';
import React, { Navigate } from 'react-router';
import jwt_decode from "jwt-decode";

export default function RequireRights({ children }) {
  const [isAdmin, setIsAdmin] = useState(jwt_decode(localStorage.getItem('token')).is_admin);
  const [isUserManager, setIsUserManager] = useState(jwt_decode(localStorage.getItem('token')).is_user_manager);

    return (isAdmin || isUserManager)
      ? children 
      : <Navigate to="/login" replace />;
  }
  