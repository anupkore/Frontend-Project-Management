import React from "react";
import { issues } from "./TEST/Issues";
import projectsData from "./TEST/Projects";
import { useParams } from "react-router";
import bgProject from "../images/cool-background.png";
import FormDialog from "./Dialog";
import { Link } from "react-router-dom";

export const Teams = () => {
  const { p_id } = useParams();
  const Project_Id = issues.find((proj) => proj.id === Number(p_id));

  return (
    <>
      {/* <h1>Work in progress: {p_id}</h1>
      <div>{Project_Id.assignedTo}</div> */}

      <section
        className="bg-blur-3xl bg-opacity-30"
        style={{
          backgroundColor: "",
          margin: "5%",
          borderRadius: "10px",
          padding: "1rem",
          backgroundImage: `url(${bgProject})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90vw", // Adjust the width to fit the screen horizontally
          height: "100vh", // Adjust the height to fit the screen vertically
        }}
      >
        <div className="flex pt-4 pb-1 px-5 justify-end">
          <h1 className="text-center mb-0 flex-grow-1 mb-2" style={{ fontFamily: "Arial", fontSize: "20px" }}>
            <span className="bg-white px-4 py-2 rounded-md shadow-md text-navy-blue align-items-center mx-auto text-center">
              Team Members
            </span>
          </h1>
        </div>


        <div className="flex justify-between items-center py-1 px-2">
  <span className="text-xl font-bold">Project Title: {Project_Id.title}</span>
  <div className="flex items-center space-x-4">
  <span className="text-l text-gray-500">
  {/* <Link to="/projectexplore/addmember">
    <button className="rounded-md bg-blue-500 text-white py-2 px-2 hover:bg-blue-600">
      Add Member
    </button>
  </Link> */}
  <div>
    <FormDialog></FormDialog>
  </div>
</span>

    {/* Add any additional elements here */}
  </div>
</div>

<section>
<div className="flex flex-col items-center mt-4">
        
        <table className="table-auto w-full mx-auto bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Satrt Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Issues</th>
            </tr>
          </thead>
         
          {/* <tbody>
            <tr className="my-4">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">{Project_Id.assignedTo[0].name}</td>
              <td className="px-4 py-2">{Project_Id.assignedTo[0].email}</td>
              <td className="px-4 py-2">{Project_Id.assignedTo[0].role}</td>
              <td className="px-4 py-2">{Project_Id.type}</td>
              <td className="px-4 py-2">{Project_Id.startDate}</td>
              <td className="px-4 py-2">{Project_Id.endDate}</td>
              <td className="px-4 py-2 underline text-blue-900"><Link to={"/issuedetails"}>Issue</Link></td>
            </tr>

           

        

          </tbody> */}


          <tbody>
          {issues.map((issue, index) => (
            <tr key={issue.id} className="my-4 divide-y space-y-5">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{issue.assignedTo[0].name}</td>
              <td className="px-4 py-2">{issue.assignedTo[0].email}</td>
              <td className="px-4 py-2">{issue.assignedTo[0].role}</td>
              <td className="px-4 py-2">{issue.type}</td>
              <td className="px-4 py-2">{issue.startDate}</td>
              <td className="px-4 py-2">{issue.endDate}</td>
              <td className="px-4 py-2 underline text-blue-900">
                <Link to="/issues">Issue</Link>
              </td>
            
            </tr>
          ))}
        </tbody>

        </table>
      </div>

</section>

        {/* <TeamTable name={Project_Id.assignedTo} ></TeamTable> */}
      </section>
    </>
  );
};

const TeamTable = (props) => {
    return (
      <div className="flex flex-col items-center mt-4">
        
        <table className="table-auto w-full mx-auto bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Satrt Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-4">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">{props.name}</td>
              <td className="px-4 py-2">Malcolm Lockyer</td>
              <td className="px-4 py-2">Frontend Developer</td>
              <td className="px-4 py-2">ToDo</td>
              <td className="px-4 py-2">01/01/2023</td>
              <td className="px-4 py-2">10/01/2023</td>
              <td className="px-4 py-2 underline text-blue-900"><Link to={"/issuedetails"}>Issue</Link></td>
            </tr>

           

        


         
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    );
  };
  
