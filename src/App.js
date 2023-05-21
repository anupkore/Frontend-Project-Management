
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration.js';
import LoginForm  from './Components/LoginForm.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration></Registration>} />
          <Route path='/form' element={<LoginForm></LoginForm>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
