import { Link, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { issues } from "./TEST/Issues";
import IssueCard from "./IssueCard";
import { Card } from "react-bootstrap";
import { CardContent, Typography } from "@mui/material";
import AuthenticationService from "../Services/AuthenticationService";
import { useEffect, useState } from "react";
import IssueCardHolder from "./IssueCardHolder";
import { HashLoader } from "react-spinners";

export default function MyIssues() {
  localStorage.setItem("Role", "Self");
  const user_ID = Number(localStorage.getItem("UserID"));
  // const Project_ID = 101;
  const payload = { user_ID: user_ID};
  console.log(payload);
  const [isLoading, setIsLoading] = useState(true);
  const [issues, setIssues] = useState([]);
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  const [statusValues, setStatusValues] = useState([]);
  // const proj_id = Number(localStorage.getItem("ProjectID"));
  // const payload1 = { Project_ID: proj_id };
  // const [workflowData , setWorkflowData] = useState([]);

  useEffect(() => {
    AuthenticationService.userWiseIssues(payload)
      .then((response) => {
        console.log(response.data);
        setIssues(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [user_ID]);

  useEffect(() => {
    if (issues.length > 0) {
      const uniqueStatusValues = [
        ...new Set(issues.map((item) => item.Status)),
      ];
      console.log(uniqueStatusValues);
      setStatusValues(uniqueStatusValues);
    } else {
      console.log("EMPTY!!");
    }
  }, [issues]);

  console.log("Issues: ", issues);
  console.log("Status: ", statusValues);

  // const AllIssues = issues.filter((issue) => issue.status === status);
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
        issues.length !== 0 ? (
       
        <>
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
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </button>
            </div>
            <div className="mx-auto py-4 text-xl font-bold">Issue Workflow</div>
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
                  <IssueCardHolder iss={status} />
                </div>
              ))}
            </div>
          </div>  
        </>
        ) :(
          <div className="flex align-center justify-center">
            <h1 className="text-3xl font-bold my-auto">No Issues Assigned To You</h1>
          </div>
        )
      )}
    </>
  );
}
