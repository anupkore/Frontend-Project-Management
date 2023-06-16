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

const colors = [
  "bg-lime-100",
  "bg-red-100",
  "bg-orange-100",
  "bg-sky-100",
  "bg-green-100",
  "bg-teal-100",
  "bg-violet-100",
  "bg-fuchsia-100",
  "bg-pink-100",
  "bg-purple-100",
];

export default function IssueDashboard(props) {
  const { p_id } = useParams();
  const project_id = localStorage.getItem("ProjectID");
  const payload = { project_id: project_id };
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

  useEffect(() => {
    AuthenticationService.allIssues(payload)
      .then((response) => {
        console.log(response.data);
        setIssues(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  
  useEffect(() => {
    if (issues.length > 0) {
      const uniqueStatusValues = [...new Set(issues.map((item) => item.Status))];
      console.log(uniqueStatusValues);
      setStatusValues(uniqueStatusValues);
    } else {
      console.log("EMPTY!!");
    }
  }, [issues]);
  
  console.log("Issues: ", issues);
  console.log("Status: ", statusValues);
  
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
    <>
      <div className="flex bg-[#ffffff]">
        <div className="max-w-2/12">
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
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="mx-auto py-4 text-xl font-bold">
                Issue Workflow
              </div>
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
          </div>
        </div>
      </div>
    </>
    )}
    </>
  );
}
