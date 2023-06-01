import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";

export default function UpdateProjectForm() {
  const [projectName , setProjectName] = useState('');
    const [status , setStatus] = useState('');
    const [startDate , setStartDate] = useState('');
    const [endDate , setEndDate] = useState('');
    const [actualStartDate , setActualStartDate] = useState('');
    const [actualEndDate , setActualEndDate] = useState('');
    const [projectLead , setProjectLead] = useState('');
    const [clientName , setClientName] = useState('');
    const [description , setDescription] = useState('');
    const [comments , setComments] = useState('');
    
  
      function handleInputChangeProjectName(event) 
       {
          setProjectName(event.target.value);
       }
  
       function handleInputChangeStatus(event) 
       {
          setStatus(event.target.value);
       }
  
       function handleInputChangeStartDate(event) 
       {
          setStartDate(event.target.value);
       }
  
       function handleInputChangeEndDate(event) 
       {
          setEndDate(event.target.value);
       }
  
       function handleInputChangeActualStartDate(event) 
       {
          setActualStartDate(event.target.value);
       }
  
       function handleInputChangeActualEndDate(event) 
       {
          setActualEndDate(event.target.value);
       }
  
       function handleInputChangeProjectLead(event) 
       {
          setProjectLead(event.target.value);
       }
  
       function handleInputChangeClientName(event) 
       {
          setClientName(event.target.value);
       }
       function handleInputChangeDescription(event) 
       {
          setDescription(event.target.value);
       }
       function handleInputChangeComments(event) 
       {
          setComments(event.target.value);
       }
  
       function handleUpdateProject(event)
       {
        event.preventDefault();
        var payload = 
        {
          issue_name: projectName,
          issuestartdate: status,
          issueenddate: startDate,
          issuetype: endDate,
          issuetype: actualStartDate,
          issuepriority: actualEndDate,
          assignee: projectLead,
          assignee: clientName,
          issuepriority: description,
          issuepriority: comments
          }
      console.log(payload);
      AuthenticationService.UpdateProjectForm(payload).then(()=>{
        console.log("Project details updated");
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
                    Update Project Details
                  </h1>
                </div>
              </div>

              <form
                action="#"
                method="POST"
                className="m-auto mt-20 max-w-l sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Project Name
                    </label>

                    <div className="mt-1  w-full col-10">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={projectName}
                      onChange={handleInputChangeProjectName}
                        autoComplete="given-name"
                        className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Status
                    </label>
                    <div className="mt-1">
                      <select onChange={handleInputChangeStatus} className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value={"Open"}>Open</option>
                        <option value={"In Progress"}>In progress</option>
                        <option value={"Done"}>Done</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
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
                        value={startDate}
                      onChange={handleInputChangeStartDate}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
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
                        value={endDate}
                      onChange={handleInputChangeEndDate}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Actual Start Date
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="first-name"
                        id="first-name"
                        value={actualStartDate}
                      onChange={handleInputChangeActualStartDate}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Actual End Date
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="last-name"
                        id="last-name"
                        value={actualEndDate}
                      onChange={handleInputChangeActualEndDate}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Project Lead
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={projectLead}
                      onChange={handleInputChangeProjectLead}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Client Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={clientName}
                      onChange={handleInputChangeClientName}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Comments
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={comments}
                      onChange={handleInputChangeComments}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-5 d-flex align-items-center justify-content-center ">
                  {" "}
                  <Button onClick={handleUpdateProject}
                    variant="contained"
                    className="justify-content-center flex items-center"
                  >
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
