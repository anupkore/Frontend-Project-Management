import {  Col, Container, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";

export default function UpdateIssueForm() 
  { 

    const [issueName , setIssueName] = useState('');
    const [issueStartDate , setIssueStartDate] = useState('');
    const [issueEndDate , setIssueEndDate] = useState('');
    const [status , setStatus] = useState('');
    const [issueType , setIssueType] = useState('');
    const [priority , setPriority] = useState('');
    const [assignee , setAssignee] = useState('');
    const [description , setDescription] = useState('');
    const [attachment , setAttachment] = useState('');
    const [comments , setComments] = useState('');
    
  
      function handleInputChangeIssueName(event) 
       {
          setIssueName(event.target.value);
       }
  
       function handleInputChangeIssueStartDate(event) 
       {
          setIssueStartDate(event.target.value);
       }
  
       function handleInputChangeIssueEndDate(event) 
       {
          setIssueEndDate(event.target.value);
       }
  
       function handleInputChangeStatus(event) 
       {
          setStatus(event.target.value);
       }
  
       function handleInputChangeIssueType(event) 
       {
          setIssueType(event.target.value);
       }
  
       function handleInputChangePriority(event) 
       {
          setPriority(event.target.value);
       }
  
       function handleInputChangeAssignee(event) 
       {
          setAssignee(event.target.value);
       }
  
       function handleInputChangeDescription(event) 
       {
          setDescription(event.target.value);
       }
       function handleInputChangeAttachment(event) 
       {
          setAttachment(event.target.value);
       }
       function handleInputChangeComments(event) 
       {
          setComments(event.target.value);
       }
  
       function handleUpdateIssue(event)
       {
        event.preventDefault();
        var payload = 
        {
          issue_name: issueName,
          issuestartdate: issueStartDate,
          issueenddate: issueEndDate,
          issuetype: status,
          issuetype: issueType,
          issuepriority: priority,
          assignee: assignee,
          issuepriority: description,
          issuepriority: attachment,
          status: comments  }
      console.log(payload);
      AuthenticationService.updateIssue(payload).then(()=>{
        console.log("Issue updated");
      })
       }
  
  return (
    <>
       <Container>
        <Row>
        
        <Col sm>
        <div className="w-full">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-0">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Update Issue Form
          </h1>
        </div>
       
      </div>
            
            <form action="#" method="POST" className="m-auto mt-20 max-w-l sm:mt-20 ">
              <div className="mt-3">
                
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Issue Name
                  </label>

                  <div className="mt-1  w-100 col-10">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={issueName}
                      onChange={handleInputChangeIssueName}
                      autoComplete="given-name"
                      className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 text-lg"
                    />
                  </div>
              </div>
 
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                <div className="mt-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Start Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="first-name"
                      id="first-name"
                      value={issueStartDate}
                      onChange={handleInputChangeIssueStartDate}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    End Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="last-name"
                      id="last-name"
                      value={issueEndDate}
                      onChange={handleInputChangeIssueEndDate}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                     Status
                  </label>
                  <div className="mt-1">
                  <select  
                       className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      
                      <option value={'Open'}>Open</option>
                      <option value={'In Progress'}>In progress</option>
                      <option value={'Done'}>Done</option>
                    </select>
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                     Type
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={issueType}
                      onChange={handleInputChangeIssueType}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Priority
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={priority}
                      onChange={handleInputChangePriority}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Assigned to
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={assignee}
                      onChange={handleInputChangeAssignee}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={description}
                      onChange={handleInputChangeDescription}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Attachment
                  </label>
                  <div className="mt-1">
                    <input
                      type="file"
                      name="last-name"
                      id="last-name"
                      value={attachment}
                      onChange={handleInputChangeAttachment}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-0">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Comments
                  </label>
                  <div className="mt-1 w-100 col-10">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={comments}
                      onChange={handleInputChangeComments}
                      autoComplete="given-name"
                      className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 text-lg"
                    />
                  </div>
                </div>

              </div>
             <div className="mx-auto mt-3 d-flex align-items-center justify-content-center "> <Button onClick={handleUpdateIssue} variant="contained" className="justify-content-center flex items-center" >
        Update 
      </Button>
      </div>
            </form>
        </div>
        </Col>
        </Row>
        </Container>
    </>
  );
}
