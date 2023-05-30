import IssueCard from "./IssueCard";
import { Link } from "react-router-dom";
import { issues } from "./TEST/Issues";

function IssueCardHolder(props) {
  const issueCards = issues.filter((issue) => issue.status === props.iss);
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

  return (
    <>
      <div id="content" className="scroll-pl-6 snap-x mx-auto">
        <div className="w-64 rounded-4 bg-lime-100 h-max space-y-3 px-2 pb-2">
          <div className="flex space-x-10 pt-3">
            <div class="flex mx-auto space-x-2">
              <span className="">{props.iss}</span>
              <span className="badge bg-dark">{issueCards.length}</span>
            </div>
          </div>
          {issueCards.slice(0, 4).map((proj) => (
            <IssueCard pro={proj}></IssueCard>
          ))}
          <div className="flex justify-end">
            <Link to={`/issue/${props.iss}`}>
              <h1 className="font-semibold">See More</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default IssueCardHolder;
