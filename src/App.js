
import './App.css';
import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration.js';
import LoginPage from './Components/LoginPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration></Registration>} />
          <Route path='/loginpage' element={<LoginPage/>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
