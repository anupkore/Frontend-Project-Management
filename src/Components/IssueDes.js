import { PaperClipIcon } from "@heroicons/react/20/solid";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import { issues } from "./TEST/Issues";
import { useEffect, useState } from "react";
import FormDialog from "./Dialog";
import UpdateIssueForm from "./UpdateIssueForm";
import Comments from "./Comments";
import AuthenticationService from "../Services/AuthenticationService";

export default function IssueDes() {
  const { issueId } = useParams();
  // console.log(Number(issueId));
  const issue = issues.find((issue) => issue.id === Number(issueId));
  const maxWidth = "md";
  const [workflow1 , setWorkflow1] = useState([]);
  const getAdjacentStates = (workflow, currentState) => {
    const graph = {};

    // Build the graph from the workflow array
    workflow.forEach((row) => {
      for (let i = 1; i < row.length; i++) {
        const prevNode = row[i - 1];
        const currNode = row[i];

        if (!graph[currNode]) {
          graph[currNode] = { prev: [], next: [] };
        }

        if (!graph[prevNode]) {
          graph[prevNode] = { prev: [], next: [] };
        }

        graph[currNode].prev.push(prevNode);
        graph[prevNode].next.push(currNode);
      }
    });

    const previousStates = graph[currentState]?.prev || [];
    const nextStates = graph[currentState]?.next || [];

    return { previousStates, nextStates };
  };

  const workflowString = "[['START', 'IN PROGRESS', 'REVIEW', 'DONE'], ['REVIEW', 'RESOLVED', 'DONE'], ['DONE', 'RE-OPENED', 'RE-ASSIGN', 'COMPLETED']]";

  const workflow = JSON.parse(workflowString.replace(/'/g, '"'));
  
  // console.log(workflow);
  

  const currentState = "DONE";
  const { previousStates, nextStates } = getAdjacentStates(
    workflow,
    currentState
  );

  // console.log("Previous States:", previousStates);
  // console.log("Next States:", nextStates);

  // useEffect(() => {
  //   // Simulating an asynchronous API call to fetch the issue details
  //   const fetchIssueDetails = () =>{
  //     try {
  //       const response = issues.find(issue => issue.id === issueId);
  //       setIssue(response);
  //       console.log(response);
  //     }catch(e){
  //         console.log(e);
  //     }
  //   }
  // });

  // useEffect(() => {
  //   // Simulating an asynchronous API call to fetch the issue details
  //   const fetchIssueDetails = async () => {
  //     try {
  //       // Make your API request here to fetch the issue details based on the issueId
  //       // For example:
  //       // const response = await fetch(`/api/issues/${issueId}`);
  //       // const data = await response.json();
  //       // setIssue(data);
  //
  //     } catch (error) {
  //       console.error('Error fetching issue details:', error);
  //     }
  //   };

  //   fetchIssueDetails();
  // }, [issueId]);
  useEffect(() => {
    AuthenticationService.getWorkFlow().then((response) => {
      console.log(response.data);
      setWorkflow1(JSON.parse(response.data.replace(/'/g, '"')));
      // console.log(JSON.stringify(response.data));
      
      console.log("WORKFLOWDATA : " +workflow1 +"generated");
    });
  }, []);
  return (
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
              {issue.title}
            </p>
          </div>
          <div className="mx-auto">
            <div className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-4 mt-3 mx-auto ">
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Issue Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.name}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Type
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.type}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Status
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.status}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Assigned To
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.assignedTo}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Start Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.startDate}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  End Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.endDate}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-3 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {issue.description}
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
                    {issue.attachments.map((attachments) => (
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
                    ))}
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
  );
}
