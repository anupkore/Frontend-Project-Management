import { PaperClipIcon } from "@heroicons/react/20/solid";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import { issues } from "./TEST/Issues";
import { useEffect, useState } from "react";
import FormDialog from "./Dialog";
import UpdateIssueForm from "./UpdateIssueForm";
import Comments from "./Comments";
import AuthenticationService from "../Services/AuthenticationService";
import { HashLoader } from "react-spinners";

export default function IssueDes(props) {
  const { issueId } = useParams();
  const id = Number(issueId);
  const payload = { issue_id: id };
  console.log(payload);
  // const [workflow , setWorkflow] = useState([]);
  const [currentState, setCurrentState] = useState("");
  // const [issue, setIssue] = useState();
  // const [type, setType] = useState("");
  const maxWidth = "md";
  const [isLoading, setIsLoading] = useState(true);
  const [workflowData, setWorkflowData] = useState([]);
  const [workflow, setWorkflow] = useState("");

    // useEffect(() => {
    //   if (!isLoading) {
    //     console.log("Workflow....");

    //     if (type === "task" && workflowData[0].issue_type === "task") {
    //       console.log("Task_ID is available in the issue object.");
    //       // setWorkflow(workflowData[0].workflow);
    //     } else {
    //       console.log("Defect available in the issue object.");
    //       // setWorkflow(workflowData[1].workflow);
    //     }
    //   }
    // }, [type, workflowData, isLoading]);

    // const handleWorkflowString = async(issue) => {
    //   console.log("Workflow....");

    //   if (issue.type === "task" &&  workflowData[0].issue_type === "task") {
    //     console.log('Task_ID is available in the issue object.');
    //     setWorkflow()

    //   } else {
    //     console.log('Defect available in the issue object.');
    //   }
    // };

    // const workflow = handleWorkflowString(issue);
    // console.log("Workflow Result:", workflow);

    // // const workflowString = "[['START', 'IN PROGRESS', 'REVIEW', 'DONE'], ['REVIEW', 'RESOLVED', 'DONE'], ['DONE', 'RE-OPENED', 'RE-ASSIGN', 'COMPLETED']]";
    // const workflowString = workflowData[0].array

    // JSON.parse(workflowString.replace(/'/g, '"'));

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

    // useEffect(() => {
    //   setIsLoading(true);
    //   // Simulating an asynchronous API call to fetch the issue details
    //   const fetchIssueDetails = async () => {
    //     try {
    //       // Make your API request here to fetch the issue details based on the issueId
    //       // For example:
    //       const response = await AuthenticationService.particularIssueDetails(payload);
    //       // const data = await response.json();
    //       // console.log(response.data);
    //       const work = response.data.issue_details[0];
    //       console.log(work);
    //       setIssue(work);
    //       setType(work.type);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.error("Error fetching issue details:", error);
    //       setIsLoading(false);
    //     }
    //   };

    //   fetchIssueDetails();
    // }, [issueId]);

    // useEffect(() => {
      
    //   if (!isLoading) {
    //     AuthenticationService.projectWiseWorkflow(payload1)
    //     .then((response) => {
    //       console.log(response.data);
    //       setWorkflowData(response.data);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setIsLoading(false);
    //     });
    //   }
    // }, [issue,isLoading]);
    // console.log("WorkflowData", workflowData);
    // console.log("issue details", issue);

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
            <div>
              <SideBar></SideBar>
            </div>
            <div className="mx-auto">
              <div className={`sm:px-0 mt-2`}>
                <h3 className="text-base mx-auto font-bold text-center leading-7 text-gray-900 mb-2">
                  Issue Details
                </h3>
                <p className="mt-1 text-base font-bold text-center leading-7 text-blue-800 mt-4">
                  {/* {issue.title} */}
                </p>
              </div>
              <div className="mx-auto">
                <div className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-4 mt-3 mx-auto ">
                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Issue Name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.Issue} */}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Type
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.type} */}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.status} */}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Assigned To
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.assignedTo} */}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Start Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.startDate} */}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      End Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.endDate} */}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Description
                    </dt>
                    <dd className="mt-3 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* {issue.description} */}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Attachments
                    </dt>
                    <dd className=" text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul
                        role="list"
                        className=" divide-gray-100 rounded-md border border-gray-200"
                      >
                        {/* {issue.attachments.map((attachments) => (
                      <li className="flex items-center justify-between text-sm leading-6">
                        <div className="flex h-10 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              {attachments}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))} */}
                      </ul>
                    </dd>
                  </div>
                </div>
              </div>
              <div className="my-4 flex justify-center align-items-center">
                <FormDialog
                  prop={<UpdateIssueForm></UpdateIssueForm>}
                  style={maxWidth}
                  buttonTitle={"Update"}
                  ic={"false"}
                  icon={"/Images/arrow-repeat.svg"}
                ></FormDialog>
                <button className="btn btn-danger ml-3">Delete</button>
              </div>
              <div>
                <Comments></Comments>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}