import React from "react";
import IssueCard from "./IssueCard";
import { Link } from "react-router-dom";
import { issues } from "./TEST/Issues";

function IssueCardHolder(props) {
  const issueCards = issues.filter((issue) => issue.status === props.iss);

  return (
    <div id="content" className="mx-auto ">
      <div className="flex badge bg-light sticky justify-center space-x-2 py-2.5 ">
        <span className="text-dark">{props.iss}</span>
        <span className="badge bg-dark">{issueCards.length}</span>
      </div>
      <div className="w-64 h-[36rem] overflow-y-scroll">
        <div className="rounded-b-4 bg-lime-100 space-y-3 px-2 py-4 ">
          {issueCards.map((proj) => (
            <IssueCard pro={proj} key={proj.id} />
          ))}
          <div className="flex justify-end">
            <Link to={`/issue/${props.iss}`}>
              <h1 className="font-semibold">See More</h1>
            </Link>
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
