import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import FormDialog from "./Dialog";
import Workflow_1 from "./Workflow_1";
import { useState } from "react";

import AuthenticationService from "../Services/AuthenticationService";

export default function AddNewProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [leadName, setLeadName] = useState("");
  const [plannedStartDate, setPlannedStartDate] = useState("");
  const [plannedEndDate, setPlannedEndDate] = useState("");
  const [risks, setRisks] = useState("");
  const [mitigations, setMitigations] = useState("");

  const [errorClientName, setErrorClientName] = useState("");
  const [errorLeadName, setErrorLeadName] = useState("");
  const [errorPlannedStartDate, setErrorPlannedStartDate] = useState("");
  const [errorPlannedEndDate, setErrorPlannedEndDate] = useState("");
  const [errorMessageProjectName, setErrorMessageProjectName] = useState("");
  const [errorMessageDescription, setErrorMessageDescription] = useState("");
  const [errorMessageRisks, setErrorMessagRisks] = useState("");
  const [errorMessageMitigations, setErrorMessageMitigations] = useState("");

  function handleInputChangeProjectName(event) {
    setProjectName(event.target.value);
    setErrorMessageProjectName("");
  }

  function handleInputChangeDescription(event) {
    setDescription(event.target.value);
    setErrorMessageDescription("");
  }

  function handleInputChangeClientName(event) {
    setClientName(event.target.value);
    setErrorClientName("");
  }

  function handleInputChangeLeadName(event) {
    setLeadName(event.target.value);
    setErrorLeadName("");
  }

  function handleInputChangePlannedStartDate(event) {
    setPlannedStartDate(event.target.value);
    setErrorPlannedStartDate("");
  }

  function handleInputChangePlannedEndDate(event) {
    setPlannedEndDate(event.target.value);
    setErrorPlannedEndDate("");
  }

  function handleInputChangeRisks(event) {
    setRisks(event.target.value);
    setErrorMessagRisks("");
  }

  function handleInputChangeMitigations(event) {
    setMitigations(event.target.value);
    setErrorMessageMitigations("");
  }

  function validateClientName(name) {
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return nameRegex.test(name);
  }

  // Function to validate the planned start date
  function validatePlannedStartDate(startDate) {
    const today = new Date();
    const selectedDate = new Date(startDate);

    // Check if the selected date is before today's date
    return selectedDate >= today;
  }

  // Function to validate the planned end date
  function validatePlannedEndDate(startDate, endDate) {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Check if the end date is before the start date
    return endDateObj >= startDateObj;
  }

  function handleAddProject(event) {
    event.preventDefault();

    if (projectName.trim() === "") {
      setErrorMessageProjectName("This field is required");
      return;
    }

    if (description.trim() === "") {
      setErrorMessageDescription("This field is required");
      return;
    }

    if (!validateClientName(clientName)) {
      setErrorClientName("Please Enter Valid Client Name");
      return;
    }
    if (!validateClientName(leadName)) {
      setErrorLeadName("Please Enter Valid Lead Name");
      return;
    }
    if (!validatePlannedStartDate(plannedStartDate)) {
      setErrorPlannedStartDate("Please Enter valid Start Date");
      return;
    }

    if (!validatePlannedEndDate(plannedStartDate, plannedEndDate)) {
      setErrorPlannedEndDate("Please Enter valid End Date");
      return;
    }

    if (risks.trim() === "") {
      setErrorMessagRisks("This field is required");
      return;
    }

    if (mitigations.trim() === "") {
      setErrorMessageMitigations("This field is required");
      return;
    }

    var payload = {
      user_id: localStorage.getItem("UserID"),
      project_name: projectName,
      project_description: description,
      planned_sd: plannedStartDate,
      planned_ed: plannedEndDate,
      client_name: clientName,
      project_lead: leadName,
      risk: risks,
      mitigation: mitigations,
    };
    console.log(payload);
    AuthenticationService.createProject(payload).then(() => {
      console.log("Hi Create Project");
      window.location.href = "/allProjects";
    });
  }

  return (
    <>
      <div className="flex">
        <div className="flex justify-items-start align-items-center">
          <img src="/Images/projectmag.png" width={550} height={550}></img>
        </div>

        <div className="flex justify-items-end align-items-center">
          <Container>
            <Row>
              <Col lg>
                <div>
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Create New Project
                    </h2>
                  </div>
                  <form
                    action="#"
                    method="POST"
                    className="m-auto mt-16 max-w-l sm:mt-20"
                  >
                    <div className=" gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Project Name
                        </label>

                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={projectName}
                            onChange={handleInputChangeProjectName}
                            required
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 mb-2.5"
                          />
                          <span className="text-danger">
                            {errorMessageProjectName}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="grid grid-cols-1 gap-x-50 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Planned Start Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="company"
                              id="company"
                              value={plannedStartDate}
                              onChange={handleInputChangePlannedStartDate}
                              autoComplete="organization"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
                            <span className="text-danger">
                              {errorPlannedStartDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-50 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Planned End Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="company"
                              id="company"
                              value={plannedEndDate}
                              onChange={handleInputChangePlannedEndDate}
                              autoComplete="organization"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
                            <span className="text-danger">
                              {errorPlannedEndDate}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Risks
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={risks}
                            onChange={handleInputChangeRisks}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          <span className="text-danger">
                            {errorMessageRisks}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Mitigations
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={mitigations}
                            onChange={handleInputChangeMitigations}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          <span className="text-danger">
                            {errorMessageMitigations}
                          </span>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Lead Name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            value={leadName}
                            onChange={handleInputChangeLeadName}
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          <span className="text-danger">{errorLeadName}</span>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Client Name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={clientName}
                            onChange={handleInputChangeClientName}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          <span className="text-danger">{errorClientName}</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          value={description}
                          onChange={handleInputChangeDescription}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                        <span className="text-danger">{errorMessageDescription}</span>
                      </div>
                    </div>
                    <div className="flex mt-5 justify-center ">
                      <Button
                        onClick={handleAddProject}
                        variant="contained"
                        className=""
                      >
                        Create
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
