import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormDialog from "./Dialog";

// import bgProject from "../images/bg-allproject.jpg";
import bgProject from "../images/cool-background.png";

import AddNewProject from "./AddNewProject";
import AddNewMember from "./AddNewMember";


const projects1 = [
  {
    id: 1,
    title: "Project 1",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
    status: "In Progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur.",
  },
  {
    id: 2,
    title: "Project 2",
    startDate: "2023-06-01",
    endDate: "2023-07-01",
    status: "Completed",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Project 3",
    startDate: "2023-07-01",
    endDate: "2023-08-01",
    status: "Planned",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 4,
    title: "Project 4",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
    status: "In Progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur .",
  },
  {
    id: 5,
    title: "Project 5",
    startDate: "2023-06-01",
    endDate: "2023-07-01",
    status: "Completed",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Project 6",
    startDate: "2023-07-01",
    endDate: "2023-08-01",
    status: "Planned",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  }
  // Add more project objects...
];




export const AllProjectList = () => {
  const maxWidth = 'md';
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredProjects = projects1.filter((project) => {
    if (filterStatus === "All") {
      return true;
    } else {
      return project.status === filterStatus;
    }
  });

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  return (
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
        // height: "100vh", // Adjust the height to fit the screen vertically
      }}
    >
      <div className="py-4 px-5 flex ">
        <h1
          className="text-center mb-0 flex-grow-1 mb-2 items-center text-xl font-bold"
          style={{ fontFamily: "Arial",marginLeft:"80px" }}
        >
          <span className="bg-white px-2 py-2 rounded-md shadow-md text-navy-blue ">
            My Projects
          </span>
        </h1>
        <div className="ml-auto justify-right">
          <FormDialog
            prop={<AddNewProject />}
            style={maxWidth}
            buttonTitle="Create Project"
          />
        </div>
      </div>

      <div className="flex justify-left mt-1">
        <label htmlFor="filterStatus" className="mr-2">
          Filter by Status:
        </label>
        <select
  id="filterStatus"
  className="px-2 py-1 border rounded-md mr-5 text-sm"
  style={{ paddingRight: '1.1rem', width: '8rem' }}
  value={filterStatus}
  onChange={handleFilterChange}
>
  <option value="All">All Projects</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
  <option value="Planned">Planned</option>
</select>
      </div>

      <section>
        <div className="flex flex-col items-center mt-4">
          <table className="table-auto w-full mx-auto bg-white rounded-md shadow-md">
            <thead>
              <tr>
                <th className="px-4 py-2">Sr.No</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Details</th>
                {/* <th className="px-4 py-2">Issues</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={project.id} className="my-4 divide-y space-y-5">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{project.title}</td>
                  <td className="px-4 py-2">{project.status}</td>
                  <td className="px-4 py-2">{project.startDate}</td>
                  <td className="px-4 py-2">{project.endDate}</td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2 underline text-blue-900">
                    <Link to={`/projectexplore/${project.id}`}> Explore</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

const ProjectCard = ({
  id,
  title,
  startDate,
  endDate,
  status,
  description,
}) => {
  return (
    <div
      className="max-w-md mx-auto overflow-hidden mb-4 shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105"
      style={{
        //borderLeft: "2px solid grey",
        //borderRight: "2px solid black",
        //borderBottom: "2px solid black",
        borderRadius: "15px",
      }}
    >
      <div className="p-4 bg-white rounded-md ">
        <div className="bg-gray-100 p-2 mb-2">
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-sm text-red-800 font-medium">Start Date</p>
            <p className="italic">{startDate}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-green-800 font-medium">Status</p>
            <p className="italic">{status}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-red-800 font-medium">End Date</p>
            <p className="italic">{endDate}</p>
          </div>
        </div>
        <p className="mt-2 text-darkblue-900 text-center">{description}</p>
        <div className="flex justify-center mt-4">
          <Link
            to={`/projectexplore/${id}`}
            className="flex items-center px-4 py-2 text-sm font-medium text-white btn btn-primary rounded-md hover:bg-indigo-500"
          >
            Explore -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProjectList;
