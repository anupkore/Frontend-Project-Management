
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';
import {AllProjectList}from './Components/AllProject';
import { ProjectExplore } from './Components/ProjectExplore';
import Calender from './Components/Calender';
import IssueDashboard from './Components/IssueDashboard';
import IssueDes from './Components/IssueDes';
import Profilepage from './Components/Profilepage';
import AddNewProject from './Components/AddNewProject';
import AddNewMember from './Components/AddNewMember';
import ParticularIssueDashboard from './Components/ParticularIssueDashboard';

import { Teams } from './Components/Teams';

import UpdateProjectForm from './Components/UpdateProjectForm';
import ForgotPassword from './Components/ForgotPassword';
import ChangePassword from './Components/ChangePassword';
import UpdateIssueForm from './Components/UpdateIssueForm';
import CreateIssueForm from './Components/CreateIssueForm';
import AdminDashboard from './Components/Dashboard';
import NumberOfIssuesBar from './Components/NumberOfIssuesBar';
import IssueTypeBar from './Components/IssueTypeBar';
import ReportsDashboard from './Components/ReportsDashboard';
import URLTesting from './Components/URLTesting';
import InputGrid from './Components/CreateWorkflow';
import UsersTable from './Components/UsersTable';








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
              <Route path='/dashboard' element={<AdminDashboard/>} />
              {/* <Route path='/cal' element={<Calender/>} /> */}
              <Route path='/projectexplore/issues/:p_id' element={<IssueDashboard></IssueDashboard>} />
              <Route path='/issuedes/:issueId' element={<IssueDes/>} />
              <Route path='/issue/:status' element={<ParticularIssueDashboard></ParticularIssueDashboard>}/>
              <Route path='/profile' element={<Profilepage/>} />
              <Route path='/addNewProject'  element={<AddNewProject/>} />

              <Route path='*'  element={<ErrorPage/>} />
              <Route path='/addWorkflow'element={<InputGrid></InputGrid>}/>
              <Route path='/updateprojectform'  element={<UpdateProjectForm></UpdateProjectForm>} />
              <Route path='/addNewMember'   element={<AddNewMember/>} />  
              <Route path='/forgotPassword' element={<ForgotPassword/>} />
              <Route path='/changePassword' element={<ChangePassword/>} />
              <Route path='/updateissueform' element={<UpdateIssueForm/>} />
              <Route path='/createissueform' element={<CreateIssueForm/>} />

              <Route path='/bar' element={<NumberOfIssuesBar/>} />
              <Route path='/bar2' element={<IssueTypeBar/>} />
              <Route path='/reports' element={<ReportsDashboard/>} />

              <Route path='urlTest' element={<URLTesting/>} />
              <Route path='/usersTable' element={<UsersTable/>} />
              

            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
