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
  "bg-purple-100"
];

  return (
    <>
   
        <div
          id="content"
          className="scroll-pl-6 snap-x  mx-auto space-x-10"
        >
          
          <div className="w-64 rounded-4 bg-lime-100 h-max space-y-3 px-2  pb-10">
            <h1 className="text-center my-2 font-bold">{props.iss}</h1>
            {issueCards.slice(0, 4).map((proj) => (
              <IssueCard pro={proj}></IssueCard>
            ))}
            <Link to={`/issue/${props.iss}`} >See More</Link>
          </div>
      </div>
    </>
  );
}
export default IssueCardHolder;