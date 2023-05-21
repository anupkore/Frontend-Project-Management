
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm  from './Components/LoginForm.js';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/loginform' element={<LoginForm></LoginForm>} />
          <Route path='/' element={<About/>} />
          <Route path='/error' element={<ErrorPage/>} />
          
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
