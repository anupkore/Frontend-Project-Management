import SideBar from "./SideBar";

// import { issues } from "./TEST/Issues";
import IssueCardHolder from "./IssueCardHolder";
import { useEffect, useState } from "react";

import { useParams } from "react-router";

import CreateIssueForm from "./CreateIssueForm";
import FormDialog from "./Dialog";
import { Button } from "@mui/material";
import AuthenticationService from "../Services/AuthenticationService";
import { HashLoader } from "react-spinners";

export default function IssueDashboard(props) {
  const { p_id } = useParams();
  const Project_ID = localStorage.getItem("ProjectID");
  const payload = { Project_ID: Project_ID };
  console.log(payload);
const [isLoading, setIsLoading] = useState(true);
  const [issues,setIssues] = useState([]);
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  const [statusValues, setStatusValues] = useState([]);
  const demo = 1;
  // const proj_id = Number(localStorage.getItem("ProjectID"));
  // const payload1 = { Project_ID: proj_id };
  // const [workflowData , setWorkflowData] = useState([]);
  const maxWidth = 'md';

  // useEffect(() => {
  //   AuthenticationService.projectIssueStates(payload)
  //     .then((response) => {
  //       console.log(response.data);
  //       setStatusValues(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // },[demo]);
  
  useEffect(() => {
      AuthenticationService.allIssues(payload)
        .then((response) => {
          console.log(response.data);
          setIssues(response.data);
const issuesData = response.data;
          const uniqueStatusValues = [...new Set(issuesData.map((item) => item.status))];
          console.log(uniqueStatusValues);
          setStatusValues(uniqueStatusValues);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },[demo]);

 
  console.log("Issues: ", issues);
  console.log("Status: ", statusValues);
  // console.log("Workflowata", workflowData);
  
  return (
    <>
    {isLoading ?(
      <div className="flex justify-center">
          <HashLoader
            color="#1976d2"
            style={{ marginTop: "10%" }}
            size={100}
            speedMultiplier={1}
          />
          {/* <PacmanLoader color="#1976d2" size={50}/>   */}
        </div>
    ):(
      issues.length === 0 ? (
          <>
          <div className="flex">
          <div className="h-screen">
          <SideBar p_id={p_id}></SideBar>
        </div>
              <div className="mx-auto ">
                <div className="flex justify-center">
                  <h1 className="text-5xl font-bold">
                    Create Your First Issue
                  </h1>
                </div>
                <div className="flex border-dashed container-md justify-center mt-20 w-screen h-96 border-2 rounded-md">
                  <div className="m-auto">
                    <FormDialog
                      prop={<CreateIssueForm></CreateIssueForm>}
                      style={maxWidth}
                      icon={"./Images/plus-lg.svg"}
                      // buttonTitle="Create Project"
                      largebutton={"true"}
                      variant={""}
                      ic={"true"}
                    />
                  </div>
                </div>
              </div>

          </div>
          
          </>
            ) :(
    <>
      <div className="flex bg-[#ffffff]">
      <div className="h-screen">
          <SideBar p_id={p_id}></SideBar>
        </div>
        <div className="w-9/12 mx-auto ">
          {/* <FormDialog prop={<CreateIssueForm></CreateIssueForm>} style={maxWidth} buttonTitle={"Create Issue"}></FormDialog> */}
          <div>
            <h1 className="font-bold underline decoration-[6px] decoration-pink-500 text-xl">
              PROJECT NAME
            </h1>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div className="">
                <button
                  onClick={scrollLeft}
                  className="p-2 m-2 rounded-full bg-white shadow-lg "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="blue"
                    className="fill-blue-600  bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="mx-auto py-4 text-xl font-bold">
                Issue Workflow
              </div>
              {/* <FormDialog prop={<CreateIssueForm></CreateIssueForm>} style={maxWidth} icon={"/Images/plus-lg.svg"} ic={"false"} variant={""} buttonTitle={"Create issue"}></FormDialog> */}
              <div className="">
                <button
                  onClick={scrollRight}
                  className="p-2 m-2 rounded-full bg-white shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="blue"
                    className="fill-blue-600 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div
                id="content"
                className="carousel p-5 flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar"
              >
                {statusValues.map((status) => (
                  <div className="mx-3 ">
                    <IssueCardHolder iss={status} issues={issues}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
            )
    )}
    </>
  );
}