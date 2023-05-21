
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration></Registration>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
