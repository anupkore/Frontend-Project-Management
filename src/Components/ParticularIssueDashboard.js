import { Link, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { issues } from "./TEST/Issues";
import IssueCard from "./IssueCard";
import { Card } from "react-bootstrap";
import { CardContent, Typography } from "@mui/material";

export default function ParticularIssueDashboard() {

  const {status} = useParams();
  console.log(status);
  const AllIssues = issues.filter((issue) => issue.status === status);
  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <SideBar></SideBar>
        </div>
        <div className="w-4/5 mx-auto">
          <h1 className="text-center font-bold mb-5">{status}</h1>
        <div className="grid grid-cols-3 gap-4 ">
        {AllIssues.map((proj) => (
          <div className="overflow-hidden mb-4 shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
          <Card sx={{ minWidth: 300 ,minHeight: 200 }}>
          <Link to={"/issuedes/"+proj.id}>
            <CardContent>
              <Typography gutterBottom  component="div">
                {proj.title}
              </Typography>
              <Typography>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className={`${proj.priority === "High" ? "fill-red-600" : proj.priority === "Medium" ? "fill-red-400" : "fill-red-200"}`} >
        <circle cx="8" cy="8" r="8"/> 
      </svg>
            <p className='text-end'>Start Date : {proj.startDate}</p>
              </Typography>
            </CardContent>
            </Link> 
          </Card>
            </div>  
            ))}
            </div>
        </div>
      </div>
    </>
  );
}
