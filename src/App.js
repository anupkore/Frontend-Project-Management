import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import TableOfUsers from './Components/TableOfUsers';

import UpdateUser from './Components/UpdateUser';

import ProtectedRoute from "./Components/ProtectedRoute"
import AssignMember from './Components/AssignMember';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tableofusers" element={<ProtectedRoute element={TableOfUsers} />} />
        <Route path="/allProjects" element={<ProtectedRoute element={AllProjectList} />} />

        {/* /// */}
<Route path="/projectexplore/:id1" element={<ProtectedRoute element={ProjectExplore} />} />
<Route path="/projectexplore/teams/:p_id" element={<ProtectedRoute element={Teams} />} />
<Route path="/dashboard" element={<ProtectedRoute element={AdminDashboard} />} />
<Route path="/cal" element={<ProtectedRoute element={Calender} />} />
<Route path="/projectexplore/issues/:p_id" element={<ProtectedRoute element={IssueDashboard} />} />
<Route path="/issuedes/:issueId" element={<ProtectedRoute element={IssueDes} />} />
<Route path="/issue/:status" element={<ProtectedRoute element={ParticularIssueDashboard} />} />
<Route path="/profile" element={<ProtectedRoute element={Profilepage} />} />
<Route path="/addNewProject" element={<ProtectedRoute element={AddNewProject} />} />

<Route path="*" element={<ProtectedRoute element={ErrorPage} />} />
<Route path="/addWorkflow" element={<ProtectedRoute element={InputGrid} />} />
<Route path="/updateprojectform" element={<ProtectedRoute element={UpdateProjectForm} />} />
<Route path="/addNewMember" element={<ProtectedRoute element={AddNewMember} />} />
<Route path="/forgotPassword" element={<ProtectedRoute element={ForgotPassword} />} />
<Route path="/changePassword" element={<ProtectedRoute element={ChangePassword} />} />
<Route path="/updateissueform" element={<ProtectedRoute element={UpdateIssueForm} />} />
<Route path="/createissueform" element={<ProtectedRoute element={CreateIssueForm} />} />


<Route path="/bar" element={<ProtectedRoute element={NumberOfIssuesBar} />} />
<Route path="/bar2" element={<ProtectedRoute element={IssueTypeBar} />} />
<Route path="/reports" element={<ProtectedRoute element={ReportsDashboard} />} />
<Route path="/urlTest" element={<ProtectedRoute element={URLTesting} />} />
<Route path="/tableofusers" element={<ProtectedRoute element={TableOfUsers} />} />
<Route path='/assignMember' element={<AssignMember></AssignMember>} />


      </Routes>
    </Router>
  );
};

export default App;
