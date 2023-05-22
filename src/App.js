
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm  from './Components/LoginForm.js';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';
import Dashboard from './Components/Dashboard';
import Calender from './Components/Calender';

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
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
