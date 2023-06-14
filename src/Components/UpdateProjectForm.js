import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import { Navigate, useNavigate } from "react-router-dom";

export default function UpdateProjectForm(props) {
  const { projectData } = props;
  // const [project_id, setProject_id] = useState(projectData.project_id);
  const [projectName, setProjectName] = useState(projectData.Project_name);
  const [status, setStatus] = useState(projectData.Status);
  const [startDate, setStartDate] = useState(projectData.planned_sd);
  const [endDate, setEndDate] = useState(projectData.planned_ed);
  const [actualStartDate, setActualStartDate] = useState(projectData.Actual_sd);
  const [actualEndDate, setActualEndDate] = useState(projectData.Actual_ed);
  const [projectLead, setProjectLead] = useState(projectData.project_lead);
  const [clientName, setClientName] = useState(projectData.client_name);
  const [project_description, setDescription] = useState(projectData.description);
  const navigate = useNavigate();
  
  const { id1 } = localStorage.getItem("ProjectID");
  // function handleInputChangeProjectId(event) {
  //   setProject_id(projectData.project_id);
  // }

  function handleInputChangeProjectName(event) {
    setProjectName(event.target.value);
  }

  function handleInputChangeStatus(event) {
    setStatus(event.target.value);
  }

  function handleInputChangeStartDate(event) {
    setStartDate(event.target.value);
  }

  function handleInputChangeEndDate(event) {
    setEndDate(event.target.value);
  }

  function handleInputChangeActualStartDate(event) {
    setActualStartDate(event.target.value);
  }

  function handleInputChangeActualEndDate(event) {
    setActualEndDate(event.target.value);
  }

  function handleInputChangeProjectLead(event) {
    setProjectLead(event.target.value);
  }

  function handleInputChangeClientName(event) {
    setClientName(event.target.value);
  }

  function handleInputChangeDescription(event) {
    setDescription(event.target.value);
  }

  // function handleUpdateProject(event) {
  //   event.preventDefault();
  //   console.log("iddddddddd",projectData.Project_id);
  //   // console.log("iddddddddd",projectData.project_id});
  //   var updateData = {
  //     project_id: projectData.Project_id,
  //     project_name: projectName,
  //     status: status,
  //     planned_sd: startDate,
  //     planned_ed: endDate,
  //     actual_sd: actualStartDate,
  //     actual_ed: actualEndDate,
  //     project_lead: projectLead,
  //     client_name: clientName,
  //     project_description: project_description,
  //   };

  //   console.log(updateData);

  //   AuthenticationService.updateProject(updateData).then(() => {
  //     console.log(`Project details updated...........${id1}......../projectexplore/:${projectData.Project_id}`);
  //     // navigate(`/projectexplore/:${projectData.Project_id}`);
  //     window.location.href =`/projectexplore/${projectData.Project_id}`;
  //     // navigate(`/allProjects`);
  //   });
  // }
  function handleUpdateProject(event) {
    event.preventDefault();

    // Create the updateData object
    console.log("iddddddddd",projectData.Project_id);
    // console.log("iddddddddd",projectData.project_id});
    var updateData = {
      project_id: projectData.Project_id,
      project_name: projectName,
      status: status,
      planned_sd: startDate,
      planned_ed: endDate,
      actual_sd: actualStartDate,
      actual_ed: actualEndDate,
      project_lead: projectLead,
      client_name: clientName,
      project_description: project_description,
    };

    console.log(updateData);
    AuthenticationService.updateProject(updateData).then(() => {
      console.log(`Project details updated...........${id1}......../projectexplore/:${projectData.Project_id}`);
      // navigate(`/projectexplore/${projectData.Project_id}`);
      window.location.href = `/projectexplore/${projectData.Project_id}`;
    });
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
                  {/* <div>
                    <input
                      type="di"
                      name="project-id"
                      id="project-id"
                      value={project_id}
                      onChange={handleInputChangeProjectId}
                    />
                  </div> */}

                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Project Name
                    </label>

                    <div className="mt-1  w-full col-10">
                      <input
                        type="text"
                        name="project-name"
                        id="project-name"
                        value={projectName}
                        onChange={handleInputChangeProjectName}
                        autoComplete="given-name"
                        className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="status"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Status
                    </label>
                    <div className="mt-1">
                      <select
                        name="status"
                        id="status"
                        value={status}
                        onChange={handleInputChangeStatus}
                        className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="start-date"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Start Date
                    </label>
                    <div className="mt-1">
                    <input
                      type="date"
                      name="start-date"
                      id="start-date"
                      value={startDate}
                      onChange={handleInputChangeStartDate}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="end-date"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      End Date
                    </label>
                    <div className="mt-1">
                    <input
                      type="date"
                      name="start-date"
                      id="start-date"
                      value={endDate}
                      onChange={handleInputChangeEndDate}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="actual-start-date"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Actual Start Date
                    </label>
                    <div className="mt-1">
                     <input
                        type="date"
                        name="start-date"
                        id="start-date"
                        value={actualStartDate}
                        onChange={handleInputChangeActualStartDate}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />

                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="actual-end-date"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Actual End Date
                    </label>
                    <div className="mt-1">
                    <input
                      type="date"
                      name="start-date"
                      id="start-date"
                      value={actualEndDate}
                      onChange={handleInputChangeActualEndDate}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project-lead"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Project Lead
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="project-lead"
                        id="project-lead"
                        value={projectLead}
                        onChange={handleInputChangeProjectLead}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Client Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="client-name"
                        id="client-name"
                        value={clientName}
                        onChange={handleInputChangeClientName}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project-description"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Project Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="project-description"
                        id="project-description"
                        rows="3"
                        value={project_description}
                        onChange={handleInputChangeDescription}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* <div className="flex items-center justify-center mt-6">
                  <Button
                    onClick={handleUpdateProject}
                    variant="contained"
                    color="primary"
                  >
                    Update Project1
                  </Button>
                </div> */}


                <div className="flex items-center justify-center mt-6">
        <Button onClick={handleUpdateProject} variant="contained" color="primary">
          Update Project
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
