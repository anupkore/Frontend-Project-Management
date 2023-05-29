
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm  from './Components/LoginForm.js';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';
import {AllProjectList}from './Components/AllProject';
import { ProjectExplore } from './Components/ProjectExplore';
import Dashboard from './Components/Dashboard';
import Calender from './Components/Calender';
import IssueDashboard from './Components/IssueDashboard';
import IssueDes from './Components/IssueDes';
import Profilepage from './Components/Profilepage';
import AddNewProject from './Components/AddNewProject';
import AddNewMember from './Components/AddNewMember';
import {SignupForm} from './Components/SignupForm';
import ParticularIssueDashboard from './Components/ParticularIssueDashboard';

import { Teams } from './Components/Teams';

import UpdateProjectForm from './Components/UpdateProjectForm';
import ForgotPassword from './Components/ForgotPassword';
import ChangePassword from './Components/ChangePassword';






function App() {
  return (
    <>
      <BrowserRouter>
      
            <Routes>
              <Route path='/' element={<Home></Home>} />
            </Routes>

            <Navbar></Navbar>
        
            <Routes>
              <Route path='/allprojects' element={<AllProjectList/>} />
              <Route path='/projectexplore/:id1' element={<ProjectExplore/>} />
              <Route path='/projectexplore/teams/:p_id' element={<Teams></Teams>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/cal' element={<Calender/>} />
              <Route path='/issues' element={<IssueDashboard></IssueDashboard>} />
              <Route path='/issuedes/:issueId' element={<IssueDes/>} />
              <Route path='/issue/:status' element={<ParticularIssueDashboard></ParticularIssueDashboard>}/>
              <Route path='/profile' element={<Profilepage/>} />
              <Route path='/addNewProject'  element={<AddNewProject/>} />

              <Route path='*'  element={<ErrorPage/>} />

              <Route path='/updateprojectform'  element={<UpdateProjectForm></UpdateProjectForm>} />
              <Route path='/addNewMember'   element={<AddNewMember/>} />
              <Route path='/forgotPassword' element={<ForgotPassword/>} />
              <Route path='/changePassword' element={<ChangePassword/>} />
              

            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
