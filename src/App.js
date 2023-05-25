
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm  from './Components/LoginForm.js';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';
import {AllProjectList}from './Components/AllProject';
import { ProjectExplore } from './Components/ProjectExplore';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<LoginForm></LoginForm>} />
          <Route path='/about' element={<About/>} />
          <Route path='/allprojects' element={<AllProjectList/>} />
          <Route path='/projectexplore/:id1' element={<ProjectExplore/>} />
          <Route path='/error' element={<ErrorPage/>} />
          
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
