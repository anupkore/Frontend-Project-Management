import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import FormDialog from "./Dialog";
import CreateTask from "./CreateTask";
import CreateDefect from "./CreateDefect";

export default function CreateIssueForm() {
  const [issueName, setIssueName] = useState("");
  const [description, setDescription] = useState("");
  const [issueType, setIssueType] = useState("task");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [issueId, setIssueId] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const Project_ID = Number(localStorage.getItem("ProjectID"));
  const payload = { Project_ID: Project_ID };
  const maxWidth1 = "md";
  function handleInputChangeIssueName(event) {
    setIssueName(event.target.value);
  }

  function handleInputChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleInputChangeIssueType(event) {
    setIssueType(event.target.value);
  }

  function handleInputChangeStatus(event) {
    setStatus(event.target.value);
  }

  function handleNext(event) {
    setIsLoading(true);
    event.preventDefault();
    var payload = {
      Project_ID: Project_ID,
      issue_name: issueName,
      description: description,
      type: issueType,
      status: status,
    };
    console.log(payload);
    AuthenticationService.createIssue(payload).then((response) => {
      console.log("Hi Create Issue");
      console.log(issueType);
      console.log(response.data);
      setIssueId(response.data.issue_id);
      setIsSaved(true);
      setIsLoading(false);
      toast.success("Issue Added Sucessfully!! ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }

  const [workflowData, setWorkflowData] = useState([]);

  // const getAdjacentStates = (workflow, currentState) => {
  //   const graph = {};

  //   // Build the graph from the workflow array
  //   workflow.forEach((row) => {
  //     for (let i = 1; i < row.length; i++) {
  //       const prevNode = row[i - 1];
  //       const currNode = row[i];

  //       if (!graph[currNode]) {
  //         graph[currNode] = { prev: [], next: [] };
  //       }

  //       if (!graph[prevNode]) {
  //         graph[prevNode] = { prev: [], next: [] };
  //       }

  //       graph[currNode].prev.push(prevNode);
  //       graph[prevNode].next.push(currNode);
  //     }
  //   });

  //   const previousStates = graph[currentState]?.prev || [];
  //   const nextStates = graph[currentState]?.next || [];

  //   return { previousStates, nextStates };
  // };

  // const workflowString = "[['START', 'IN PROGRESS', 'REVIEW', 'DONE'], ['REVIEW', 'RESOLVED', 'DONE'], ['DONE', 'RE-OPENED', 'RE-ASSIGN', 'COMPLETED']]";
  // // const workflowString = workflowData[0].array;
  // const workflow = JSON.parse(workflowString.replace(/'/g, '"'));

  // // const work = workflowData.map((e)=> e.array_name);
  // // console.log(work);

  // const currentState = "DONE";
  // const { previousStates, nextStates } = getAdjacentStates(
  //   workflow,
  //   currentState
  // );
  // console.log(workflow);
  // console.log("Previous States:", previousStates);
  // console.log("Next States:", nextStates);

  useEffect(() => {
    setIsLoading(true);
    AuthenticationService.projectWiseWorkflow(payload)
      .then((response) => {
        console.log(response.data);
        setWorkflowData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log(issueType);
      if (workflowData.length > 0) {
        if (workflowData[0].issue_type === issueType) {
          const workflowString = workflowData[0].workflow;
          const wf = JSON.parse(workflowString.replace(/'/g, '"'));
          console.log("WF", wf[0][0]);
          setStatus(wf[0][0]);
        } else {
          const workflowString = workflowData[1].workflow;
          const wf = JSON.parse(workflowString.replace(/'/g, '"'));
          console.log("WF", wf[0][0]);
          setStatus(wf[0][0]);
        }
      }
    }
  }, [issueType, isLoading, workflowData]);

  return (
    
        <>
        {isLoading  && (
      <div className="flex align-center justify-center">
         <SyncLoader color="#1976d2" size={10}  style={{ marginTop: "10%" }} />
      </div>
    )}
     <div className={`${isLoading ? "blur-sm" : ""}`}>
          <Container>
            <div className="mx-auto max-w-2xl pb-3">
              <div className="text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Create New Issue
                </h1>
              </div>
            </div>
            <Row>
              <Col className="">
                <img src="/Images/project-management.png" className="max-w-[90%] m-auto pt-14" alt="Issue Form" />
              </Col>
              <Col sm>
                <div className="mx-auto">
                  <form className="m-auto mt-20 max-w-l sm:mt-20 ">
                    <div className="grid gap-x-8 gap-y-3 grid-cols-2">
                      <div className="mt-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
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
                            disabled={isSaved}
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Issue Type
                        </label>

                        <select
                          value={issueType}
                          onChange={handleInputChangeIssueType}
                          className="appearance-none w-100 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-md leading-tight focus:outline-none focus:shadow-outline"
                          disabled={isSaved}
                        >
                          <option value="">Select Issue Type</option>
                          <option value="task">Task</option>
                          <option value="defect">Defects</option>
                        </select>
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
                          // onChange={handleInputChangeStatus}
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="mt-0">
                      <label
                        htmlFor="Description"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Description
                      </label>

                      <div className="mt-0">
                        <textarea
                          type="text"
                          name="description"
                          id="description"
                          value={description}
                          onChange={handleInputChangeDescription}
                          autoComplete="given-name"
                          className="h-72 w-full rounded-md border-0 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm text-lg"
                          disabled={isSaved}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
              <div className="mx-auto mt-3.5 flex align-items-end justify-content-end mr-10">
                {!isSaved ? (
                  <button
                    onClick={handleNext}
                    variant="contained"
                    className={`text-white font-bold py-2 px-4 rounded ${
                      isSaved
                        ? " cursor-not-allowed bg-blue-300"
                        : "hover:bg-blue-700 bg-blue-500"
                    }`}
                    disabled={isSaved}
                  >
                    Save
                  </button>
                ) : issueType === "task" ? (
                  <FormDialog
                    prop={<CreateTask issueId={issueId} />}
                    style={maxWidth1}
                    buttonTitle={"Next"}
                    variant={"contained"}
                  ></FormDialog>
                ) : (
                  <FormDialog
                    prop={<CreateDefect issueId={issueId} />}
                    style={maxWidth1}
                    buttonTitle={"Next"}
                    variant={"contained"}
                  ></FormDialog>
                )}
              </div>
            </Row>
          </Container>
    </div>
        </>
  );
}
