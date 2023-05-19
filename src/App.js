
import './App.css';
import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration.js';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React w
          ith yashwant
        </a>
      </header>
    </div>
=======
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration></Registration>} />
        </Routes>
        </BrowserRouter>
    </>
>>>>>>> f7329caf850a423aa970ae3ab20add2511b1a60a
  );
}

export default App;
