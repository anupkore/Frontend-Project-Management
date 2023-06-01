import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";

export default function CreateIssueForm() 
{ 

  const [issueName , setIssueName] = useState('');
  const [description , setDescription] = useState('');
  const [issueStartDate , setIssueStartDate] = useState('');
  const [issueEndDate , setIssueEndDate] = useState('');
  const [issueType , setIssueType] = useState('');
  const [priority , setPriority] = useState('');
  const [assignee , setAssignee] = useState('');
  const [status , setStatus] = useState('');

    function handleInputChangeIssueName(event) 
     {
        setIssueName(event.target.value);
     }

     function handleInputChangeDescription(event) 
     {
        setDescription(event.target.value);
     }

     function handleInputChangeIssueStartDate(event) 
     {
        setIssueStartDate(event.target.value);
     }

     function handleInputChangeIssueEndDate(event) 
     {
        setIssueEndDate(event.target.value);
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

     function handleInputChangeStatus(event) 
     {
        setStatus(event.target.value);
     }

     function handleCreateIssue(event)
     {
      event.preventDefault();
      var payload = 
      {
        issue_name: issueName,
        description: description,
        issuestartdate: issueStartDate,
        issueenddate: issueEndDate,
        issuetype: issueType,
        issuepriority: priority,
        assignee: assignee,
        status: status
      }
    console.log(payload);
    AuthenticationService.createIssue(payload).then(()=>{
      console.log("Hi Create Issue");
    })
     }

  return (
    <>
      <Container>
        <Row>
          <Col sm>
            <div className="mx-auto">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-0">
                <div className="text-center">
                  <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    Create New Issue
                  </h1>
                </div>
              </div>

              <form className="m-auto mt-20 max-w-l sm:mt-20 ">

                <div className="grid  gap-x-8 gap-y-3 sm:grid-cols-2">
                  <div className="mt-2">
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Issue Name
                    </label>

                    <div className="mt-0">
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
                  <div className="mt-2">
                    <label
                      htmlFor="Description"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Description
                    </label>

                    <div className="mt-0">
                      <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={handleInputChangeDescription}
                        autoComplete="given-name"
                        className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 text-lg"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue Start Date
                    </label>
                    <div className="mt-0">
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
                  <div className="mt-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue End Date
                    </label>
                    <div className="mt-0">
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
                  <div className="mt-0">

                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue Type
                    </label>
                   

                  <select value={issueType} onChange={handleInputChangeIssueType} className="appearance-none w-100 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-md leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value='Task'>Task</option>
                      <option value='Defects'>Defects</option>
                      
                    </select>

                  </div>
                  <div className="mt-0">

                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Priority
                    </label>
                   

                  <select value={priority} onChange={handleInputChangePriority} className="appearance-none w-100 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-md leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value='High'>High</option>
                      <option value='Medium'>Medium</option>
                      <option value='Low'>Low</option>
                    </select>

                  </div>
                  <div className="mt-0">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Assign To
                    </label>
                    <div className="mt-0">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={assignee}
                        onChange={handleInputChangeAssignee}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Status
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={status}
                        onChange={handleInputChangeStatus}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-3.5 d-flex align-items-center justify-content-center ">
                  {" "}
                  <Button onClick={handleCreateIssue} variant="contained" className="justify-content-center flex items-center">
                    Create
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
