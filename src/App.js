
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration.js';
import LoginForm  from './Components/LoginForm.js';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration></Registration>} />
          <Route path='/form' element={<LoginForm></LoginForm>} />
          <Route path='/home' element={<LandingPage></LandingPage>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
