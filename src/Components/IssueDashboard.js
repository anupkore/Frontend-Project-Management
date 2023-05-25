import IssueCard from "./IssueCard";
import SideBar from "./SideBar";

import { issues } from "./TEST/Issues";

export default function IssueDashboard(props) {

  const todoProjects = issues.filter((project) => project.status === "TO DO");
  const inProgressProjects = issues.filter(
    (project) => project.status === "IN PROGRESS"
  );
  const inReviewProjects = issues.filter(
    (project) => project.status === "IN REVIEW"
  );
  const doneProjects = issues.filter((project) => project.status === "DONE");

  return (
    <>
      <div className="flex ">
        <div >
        <SideBar></SideBar>
        </div>
       <div className="mx-5">
       <div className="flex flex-wrap mx-auto space-x-10">
          <div className="w-64 rounded-4 bg-lime-100 h-max space-y-3 px-2  pb-10">
            <h1 className="text-center my-2 font-bold">TO DO</h1>{
            todoProjects.slice(0, 4).map((proj) => (
              <IssueCard pro={proj}></IssueCard>
            ))}
          </div>
          <div className="w-64 rounded-4 bg-cyan-100 h-max space-y-3 px-2 pb-10">
            <h1 className="text-center my-2 font-bold">IN PROGRESS</h1>
            {inProgressProjects.slice(0, 4).map((proj) => (
  <IssueCard pro={proj}></IssueCard>
))}
          </div>
          <div className="w-64 rounded-4 bg-orange-100 h-fit space-y-3 px-2  pb-10">
            <h1 className="text-center my-2 font-bold">IN REVIEW</h1>
            {inReviewProjects.slice(0, 4).map((proj) => (
  <IssueCard pro={proj}></IssueCard>
))}
          </div>
          <div className="w-64 rounded-4 bg-rose-100 h-max space-y-3 px-2  pb-10">
            <h1 className="text-center my-2 font-bold">DONE</h1>
            {doneProjects.slice(0, 4).map((proj) => (
  <IssueCard pro={proj}></IssueCard>
))}
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
