import { useEffect } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import FormDialog from "./Dialog";
import GraphVisualization from "./GraphVisualization";
import { useState } from "react";
import Modal from "./Modal";
import { HashLoader } from "react-spinners";
import CreateWorkflow from "./CreateWorkflow";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
export default function WorkflowCard() {
  const workflow1 = [
    ["START", "IN PROGRESS", "REVIEW", "DONE", "COMPLETED"],
    ["REVIEW", "RESOLVED", "DONE"],
    ["DONE", "RE-OPENED", "RE-ASSIGN", "IN PROGRESS"],
  ];
  const maxWidth1 = "lg";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const proj_id = localStorage.getItem("ProjectID");
  const [taskArray, setTaskArray] = useState([]);
  const [defectArray, setDefectArray] = useState([]);
  const [workflowData, setWorkflowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSaved, setIsSaved] = useState(false);
  // const [workflow ,setWorkflow] = useState([]);
  const [taskWf, setTaskWf] = useState("");
  const [defectWf, setDefectWf] = useState("");
  const payload1 = { wfn: taskWf };
  const payload2 = { wfn: defectWf };
  console.log(payload1);
  console.log(payload2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthenticationService.getWorkFlow();
        setWorkflowData(response.data);
        setIsLoading(false);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching workflow data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (workflowData.length > 0) {
      console.log("Workflow", workflowData);
    } else {
      console.log("Workflow data is empty");
    }
  }, [workflowData]);

  // console.log(workflowData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthenticationService.getWorkflowByName(
          payload1
        );
        // console.log(response.data);
        const temp = JSON.parse(response.data);
        setTaskArray(temp);
        setIsLoading(false);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching workflow data:", error);
        setIsLoading(false);
      }
    };

    // Call the API whenever taskWf changes
    if (taskWf) {
      fetchData();
    }
  }, [taskWf]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthenticationService.getWorkflowByName(
          payload2
        );
        const temp = JSON.parse(response.data);
        setDefectArray(temp);
        setIsLoading(false);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching workflow data:", error);
        setIsLoading(false);
      }
    };

    // Call the API whenever taskWf changes
    if (defectWf) {
      fetchData();
    }
  }, [defectWf]);

  const handleSaveWorkflow = () => {
    const payload = { project_id: proj_id, task: taskWf, defect: defectWf };
    console.log(payload);
    AuthenticationService.assignWorkflow(payload)
      .then((response) => {
        console.log(response.data);
        setIsSaved(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Internal Server Error")
      });
  };

  console.log("TASK", taskArray);
  console.log("DEFECT", defectArray);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <HashLoader
            color="#1976d2"
            style={{ marginTop: "10%" }}
            size={100}
            speedMultiplier={1}
          />
          {/* <PacmanLoader color="#1976d2" size={50}/>   */}
        </div>
      ) : (
        <>
        <div className="flex">
        <div className="">
          <SideBar></SideBar>
        </div>
          {/* <h1 className="text-xl text-center font-bold ">Workflows</h1> */}
          <div className="">
            <div className="flex mx-auto gap-4 mt-8 justify-center">
              <div className="py-4">
                <div className="flex gap-4 px-2">
                  <span className="my-auto font-semibold text-md">
                    Select Workflow for Task
                  </span>
                  <div className="mx-auto">
                    <select
                      className="rounded-md shadow-md border-1"
                      placeholder="Select your workflow"
                      name="Workflow Name"
                      id="Workflow"
                      value={taskWf}
                      onChange={(event) => setTaskWf(event.target.value)}
                      disabled={isSaved}
                    >
                      <option>Select Your Workflow</option>
                      {workflowData.map((name) => (
                        <option value={name.array_name}>
                          {name.array_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="m-auto">
                    <FormDialog
                      prop={
                        <GraphVisualization
                          workflow={taskArray}
                        ></GraphVisualization>
                      }
                      style={"md"}
                      ic="false"
                      buttonTitle={"Preview"}
                      icon={"./Images/eye-fill-white.svg"}
                      variant={"contained"}
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2 mt-2 ml-24">
                  <span className="my-auto font-medium">
                    Or Create Your Own Workflow
                  </span>
                  <div
                    className={` font-bold ${
                      isSaved
                        ? " cursor-not-allowed bg-blue-300"
                        : ""
                    }`}
                    type="submit"
                    disabled={isSaved}
                  >
                    <FormDialog
                      prop={
                        <CreateWorkflow
                          // proj={projectData.Project_name}
                          type={"task"}
                        ></CreateWorkflow>
                      }
                      style={maxWidth1}
                      buttonTitle={"Task Workflow"}
                      ic={"false"}
                      icon={"/Images/plus-lg.svg"}
                      variant={""}
                    ></FormDialog>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <div className="flex gap-4 px-2">
                  <span className="my-auto font-semibold text-md">
                    Select Workflow for Defect
                  </span>
                  <div className="mx-auto">
                    <select
                      className="rounded-md shadow-md border-1 overflow-y-scroll max-h-16"
                      placeholder="Select your workflow"
                      name="Workflow Name"
                      id="Workflow"
                      value={defectWf}
                      onChange={(event) => setDefectWf(event.target.value)}
                      disabled={isSaved}
                    >
                      <option>Select Your Workflow</option>
                      {workflowData.map((name) => (
                        <option className="" value={name.array_name}>
                          {name.array_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="m-auto">
                    <FormDialog
                      prop={
                        <GraphVisualization
                          workflow={defectArray}
                        ></GraphVisualization>
                      }
                      style={"md"}
                      ic="false"
                      buttonTitle={"Preview"}
                      icon={"./Images/eye-fill-white.svg"}
                      variant={"contained"}
                    />
                  </div>
                </div>
                <div className="flex py-2 mt-2 ml-24">
                  <span className="my-auto font-medium">
                    Or Create Your Own Workflow
                  </span>
                  <div
                    className={` font-bold ${
                      isSaved
                        ? " cursor-not-allowed bg-blue-300"
                        : ""
                    }`}
                    type="submit"
                    disabled={isSaved}
                  >
                    <FormDialog
                      prop={
                        <CreateWorkflow
                          // proj={projectData.Project_name}
                          type={"defect"}
                        ></CreateWorkflow>
                      }
                      style={maxWidth1}
                      buttonTitle={"Defect Workflow"}
                      ic={"false"}
                      icon={"/Images/plus-lg.svg"}
                      variant={""}
                    ></FormDialog>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-3 mx-auto">
              <button
                className={`text-white font-bold py-2 px-4 rounded ${
                  isSaved
                    ? " cursor-not-allowed bg-blue-300"
                    : "hover:bg-blue-700 bg-blue-500"
                }`}
                type="submit"
                onClick={handleSaveWorkflow}
                disabled={isSaved}
              >
                Save Workflows
              </button>
            </div>
            <div>
              <h1 className="text-xl pb-5 text-center font-bold ">Workflows</h1>
              <div className="flex flex-wrap mx-auto basis-10/12 justify-center gap-6">
                {workflowData.map((m, index) => {
                  const workflow = JSON.parse(m.array.replace(/'/g, '"'));
                  return (
                    <div className="card w-96 h-72" key={index}>
                      <figure className="max-h-40">
                        <GraphVisualization
                          workflow={workflow}
                        ></GraphVisualization>
                      </figure>
                      <div className="card-body h-32">
                        <h2 className="card-title">{m.array_name}</h2>
                        <div className="bg-gray-100 rounded-md px-4 py-3 sm:flex space-x-20  sm:flex-row sm:px-6">
                          <FormDialog
                            prop={
                              <GraphVisualization
                                workflow={workflow}
                              ></GraphVisualization>
                            }
                            style={"md"}
                            ic="false"
                            buttonTitle={"Preview"}
                            icon={"./Images/eye-fill-white.svg"}
                            variant={"contained"}
                          />
                          <button
                            className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-red-600 sm:mt-0 sm:w-auto"
                            type="submit"
                            onClick={toggleModal}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
              </div>
        </>
      )}

      {isModalOpen && <Modal />}
    </>
  );
}
