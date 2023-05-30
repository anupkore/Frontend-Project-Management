
import SideBar from "./SideBar";

import { issues } from "./TEST/Issues";
import IssueCardHolder from "./IssueCardHolder";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import CreateIssueForm from "./CreateIssueForm";
import FormDialog from "./Dialog";
import { useParams } from "react-router";
=======
>>>>>>> parent of 4dad6e4 (Page rendering from IssuesPage To Teams Page with data)

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
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  const [statusValues, setStatusValues] = useState([]);

  useEffect(() => {
    // Determine unique status values from the data
    const uniqueStatusValues = [...new Set(issues.map((item) => item.status))];
    setStatusValues(uniqueStatusValues);
  }, [issues]);
  const maxWidth = 'md';
  console.log(JSON.stringify(statusValues));
  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <SideBar></SideBar>
        </div>
        <div className="w-8/12 mx-auto">
        <FormDialog prop={<CreateIssueForm></CreateIssueForm>} style={maxWidth} buttonTitle={"Create Issue"}></FormDialog>
          <div className="relative">
            <div className="flex items-center">
              <div className="">
                <button
                  onClick={scrollLeft}
                  className="p-2 m-2 rounded-full bg-white"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className=" fill-blue-500 bi bi-caret-left-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
</svg>
                </button>
              </div>
              <div className="mx-auto py-4 text-xl font-bold">
                Issue Workflow
              </div>
              <div className="">
                <button 
                  onClick={scrollRight}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-blue-500 bi bi-caret-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
</svg>
                </button>
              </div>
            </div>
            <div>
              <div
                id="content"
                className="carousel p-4 flex overflow-x-auto scroll-smooth scrollbar-hide"
              >
                {statusValues.map((status) => (
                  <div className="mx-3">
                    <IssueCardHolder iss={status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
