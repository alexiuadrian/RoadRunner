import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register'
import AllRuns from './components/AllRuns';
import AddRun from './components/AddRun';
import Run from './components/Run';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import RequireNotAuth from './components/RequireNotAuth';

function App() {

  return (
    <Router>
      <Routes>
        {/* Routes for unauthenticated users */}
        <Route path="login" element={<RequireNotAuth><Login/></RequireNotAuth>}/>
        <Route path="register" element={<RequireNotAuth><Register/></RequireNotAuth>}/>


        {/* Routes for authenticated users */}
        <Route path="/" element={<RequireAuth><AllRuns/></RequireAuth>}/>
        <Route path="add" element={<RequireAuth><AddRun/></RequireAuth>}/>

        <Route path="404" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
