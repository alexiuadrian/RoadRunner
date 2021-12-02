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
import { UserContext } from './UserContext';


function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Routes>
          <Route path="/" element={<AllRuns/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="404" element={<NotFound/>}/>
          <Route path="run/:runId" element={<Run/>}/>
          <Route path="add" element={<AddRun/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
