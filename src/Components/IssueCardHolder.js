import React, { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import { Link } from "react-router-dom";
import CreateIssueForm from "./CreateIssueForm";
import FormDialog from "./Dialog";
import { Badge } from "react-bootstrap";
import AuthenticationService from "../Services/AuthenticationService";
import TaskDetail from "./TaskDetail";

function IssueCardHolder(props) {
  const [issues, setIssues] = useState([]);
  const Project_ID = localStorage.getItem("ProjectID");
  const payload = { Project_ID: Project_ID };
  const issueCards = issues.filter((issue) => issue.status === props.iss);
  const maxWidth = 'md';
  const Role = localStorage.getItem("Role");
  const user_ID = Number(localStorage.getItem("UserID"));
  const payload1 = { user_ID: user_ID };

  useEffect(() => {
    if (Role !== "Self") {
      AuthenticationService.allIssues(payload)
        .then((response) => {
          console.log(response.data);
          setIssues(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      AuthenticationService.userWiseIssues(payload1)
        .then((response) => {
          console.log(response.data);
          setIssues(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user_ID, Project_ID]);

  return (
    <div id="content" className="mx-auto ">
      <div className="flex bg-light sticky justify-center space-x-2 py-3">
        <span className="text-dark my-auto underline decoration-sky-500 decoration-[6px]">{props.iss}</span>
        <Badge pill bg="secondary">
          {issueCards.length}
        </Badge>
      </div>
      <div className="w-64 h-[36rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-[#f8f9fa] scrollbar-thumb-zinc-300 scrollbar">
        <div className="rounded-b-lg bg-[#f4f5f7] space-y-3 px-3 py-4 ">
          {issueCards.map((proj) => (
            <Link to={`/allIssues/${proj.issue_id}`} key={proj.issue_id}>
              <IssueCard card={proj} />
            </Link>
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
