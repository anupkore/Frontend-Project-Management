
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm  from './Components/LoginForm.js';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';
import Dashboard from './Components/Dashboard';
import Calender from './Components/Calender';
import IssueDashboard from './Components/IssueDashboard';
import IssueDes from './Components/IssueDes';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<LoginForm></LoginForm>} />
          <Route path='/about' element={<About/>} />
          <Route path='/error' element={<ErrorPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/cal' element={<Calender/>} />
          <Route path='/issues' element={<IssueDashboard></IssueDashboard>} />
          <Route path='/issue/:issueId' element={<IssueDes/>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
