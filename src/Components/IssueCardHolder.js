import React, { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import { Link } from "react-router-dom";
import CreateIssueForm from "./CreateIssueForm";
import FormDialog from "./Dialog";
import { Badge } from "react-bootstrap";
import AuthenticationService from "../Services/AuthenticationService";
import TaskDetail from "./TaskDetail";

function IssueCardHolder({iss,issues}) {
  console.log("card holderrrr");
  // const [issues,setIssues] = useState([]);
  // const Project_ID = localStorage.getItem("ProjectID");
  // const payload = { Project_ID: Project_ID };
  const issueCards = issues.filter((issue) => issue.status === iss);
  const maxWidth = 'md';
  // const Role = localStorage.getItem("Role");
  // const user_ID = Number(localStorage.getItem("UserID"));
  // const [isLoading,setIsLoading] = useState(true);
  // const Project_ID = 101;
  // const demo = 1;
  // const payload1 = { user_ID: user_ID};
  // console.log(payload1);
  // useEffect(() => {
  //     let apiCallPromise;
  
  //     if (Role !== "Self") {
  //       apiCallPromise = AuthenticationService.allIssues(payload);
  //     } else {
  //       apiCallPromise = AuthenticationService.userWiseIssues(payload1);
  //     }
  
  //     if (apiCallPromise) {
  //       apiCallPromise
  //         .then((response) => {
  //           console.log(response.data);
  //           setIssues(response.data);
  //           setIsLoading(false);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           setIsLoading(false);
  //         })
  //         .finally(() => {
  //           setIsLoading(false);
  //         });
  //     }
  // }, [demo]);
  
  return (
    <div id="content" className="mx-auto ">
      {/* <Link to={`/issue/${props.iss}`}> */}
      <div className="flex bg-light sticky justify-center space-x-2 py-3 ">
        <span className="text-dark my-auto underline decoration-sky-500 decoration-[6px]">{iss}</span>
        {/* <span className="badge bg-dark">{issueCards.length}</span> */}
        <Badge pill bg="secondary">
          {issueCards.length}
        </Badge>
      </div>
      <div className="w-64 h-[36rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-[#f8f9fa] scrollbar-thumb-zinc-300 scrollbar">
        <div className="rounded-b-lg bg-[#f4f5f7] space-y-3 px-3 py-4 ">
          {issueCards.map((proj) => (
            // <CustomizedDialogs card={<IssueCard pro={proj} key={proj.id} /> } ></CustomizedDialogs>
            <CustomizedDialogs card={proj} ></CustomizedDialogs>
            // <Link to={"/issueDesc/"+proj.issue_id}>
            //   <IssueCard pro={proj} key={proj.id}/>
            // </Link>
          ))}
          <div className="flex justify-center">
            <FormDialog
              prop={<CreateIssueForm></CreateIssueForm>}
              style={maxWidth}
              icon={"/Images/plus-lg.svg"}
              ic={"false"}
              variant={""}
              buttonTitle={"Create issue"}
            ></FormDialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueCardHolder;
