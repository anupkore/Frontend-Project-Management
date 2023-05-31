import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import FormDialog from "./Dialog";
import Workflow_1 from "./Workflow_1";
import { useState } from "react";

import AuthenticationService from "../Services/AuthenticationService";

export default function AddNewProject() 
{


  const [taskWorkflow, setTaskWorkflow] = useState("");
  const [defectWorkflow, setDefectWorkflow] = useState("");

  const projectName = useState("");
  const description = useState("");
  const clientName = useState("");
  const leadName = useState("");
  const plannedStartDate = useState("");
  const plannedEndDate = useState("");
  const risks = useState("");
  const mitigations = useState("");
  const workflowTask = useState("");
  const workflowDefects = useState("");

  const taskWorkflowChange = (event) => {
    setTaskWorkflow(event.target.value);
  };
  const defectWorkflowChange = (event) => {
    setDefectWorkflow(event.target.value);
  };


  function handleAddProject(event)
  {
    event.preventDefault();
    var payload = 
    {
        project_name: projectName.current.value,
        project_description: description.current.value,
        planned_sd: plannedStartDate.current.value,
        planned_ed: plannedEndDate.current.value,
        client_name: clientName.current.value,
        project_lead: leadName.current.value,
        risk: risks.current.value,
        mitigation: mitigations.current.value,
        workflowTask: workflowTask.current.value,
        workflowDefects: workflowDefects.current.value
    }

    AuthenticationService.createProject(payload).then(()=>{
      console.log("Hi Create Project");
    })
  }
  
  

  return (
    <>
      <div className="flex">
        <div className="flex justify-items-end align-items-center">
          <img src="/Images/projectmag.png" width={600} height={550}></img>
        </div>

        <div className="">
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
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                            ref={projectName}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="textarea"
                            name="last-name"
                            id="last-name"
                            ref={description}
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                            ref={clientName}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
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
                            ref={leadName}
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

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
                              ref={plannedStartDate}
                              autoComplete="organization"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
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
                              ref={plannedEndDate}
                              autoComplete="organization"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
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
                            ref={risks}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
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
                            ref={mitigations}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Choose Workflow For Task
                        </label>
                        <div className="mt-2.5 flex">
                          <select
                            className="appearance-none w-100 bg-white border border-gray-300 hover:border-gray-500 pl-4  py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            value={taskWorkflow}
                            onChange={taskWorkflowChange}
                          >
                            <option value="">Select Task WorkFlow</option>
                            <option ref={workflowTask} value="workflow-1">
                              Workflow-1
                            </option>
                            <option ref={workflowTask} value="workflow-2">
                              Workflow-2
                            </option>
                            <option ref={workflowTask} value="workflow-3">
                              Workflow-3
                            </option>
                            <option ref={workflowTask} value="workflow-4">
                              Workflow-4
                            </option>
                          </select>
                          <div className=" ml-3 ">
                            <FormDialog
                              prop={<Workflow_1 path={taskWorkflow} />}
                              style={"md"}
                              // buttonTitle={"Preview"}
                              icon={"./Images/eye-fill.svg"}
                              variant={""}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Choose Workflow For Defects
                        </label>
                        <div className="mt-2.5 flex">
                          <select
                            className="appearance-none w-100 bg-white border border-gray-300 hover:border-gray-500 pl-4  py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            value={defectWorkflow}
                            onChange={defectWorkflowChange}
                          >
                            <option value="">Select defect WorkFlow</option>
                            <option ref={workflowDefects} value="workflow-1">
                              Workflow-1
                            </option>
                            <option ref={workflowDefects} value="workflow-2">
                              Workflow-2
                            </option>
                            <option ref={workflowDefects} value="workflow-3">
                              Workflow-3
                            </option>
                            <option ref={workflowDefects} value="workflow-4">
                              Workflow-4
                            </option>
                          </select>
                          <div className=" ml-3 ">
                            <FormDialog
                              prop={<Workflow_1 path={defectWorkflow} />}
                              style={"md"}
                              // buttonTitle="Preview"
                              icon={"./Images/eye-fill.svg"}
                variant={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-5 justify-center ">
                      <Button onClick={handleAddProject} variant="contained" className="">
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
