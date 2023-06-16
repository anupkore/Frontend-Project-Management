import React, { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import { Link } from "react-router-dom";
// import { issues } from "./TEST/Issues";
import CreateIssueForm from "./CreateIssueForm";
import FormDialog from "./Dialog";
import { Badge } from "react-bootstrap";
import AuthenticationService from "../Services/AuthenticationService";

function IssueCardHolder(props) {
  const [issues,setIssues] = useState([]);
  const project_id = localStorage.getItem("ProjectID");
  const payload = { project_id: project_id };
  const issueCards = issues.filter((issue) => issue.Status === props.iss);
  const maxWidth = 'md';
  useEffect(() => {
    AuthenticationService.allIssues(payload)
      .then((response) => {
        console.log(response.data);
        setIssues(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }, []);
  return (
    <div id="content" className="mx-auto ">
      <Link to={`/issue/${props.iss}`}>
      <div className="flex bg-light sticky justify-center space-x-2 py-3 ">
        <span className="text-dark my-auto underline decoration-sky-500 decoration-[6px]">{props.iss}</span>
        {/* <span className="badge bg-dark">{issueCards.length}</span> */}
        <Badge pill bg="secondary">
        {issueCards.length}
      </Badge>
      </div>
      </Link>
      <div className="w-64 h-[36rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-[#f8f9fa] scrollbar-thumb-zinc-300 scrollbar">
        <div className="rounded-b-lg bg-[#f4f5f7] space-y-3 px-3 py-4 ">
          {issueCards.map((proj) => (
            <IssueCard pro={proj} key={proj.id} />
          ))}
          <div className="flex justify-center">
            {/* <Link to={`/issue/${props.iss}`}>
              <h1 className="font-semibold">See More</h1>
            </Link> */}
            <FormDialog prop={<CreateIssueForm></CreateIssueForm>} style={maxWidth} icon={"/Images/plus-lg.svg"} ic={"false"} variant={""} buttonTitle={"Create issue"}></FormDialog>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div id="content" className="mx-auto rounded-4 bg-lime-100">
    //     <div className="w-64 h-[42rem] max-h-md px-2 pb-2">

    //     </div>
    //   </div>
    // </>
  );
}

export default IssueCardHolder;
