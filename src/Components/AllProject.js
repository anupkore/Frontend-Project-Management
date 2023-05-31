import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormDialog from "./Dialog";

// import bgProject from "../images/bg-allproject.jpg";
import bgProject from "../images/cool-background.png";

import AddNewProject from "./AddNewProject";
import { projects, projects1 } from "./TEST/Projects";
import Workflow_1 from "./Workflow_1";

export const AllProjectList = () => {
  const maxWidth = "md";
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredProjects = projects.filter((project) => {
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
      className="bg-blur-3xl bg-opacity-30 border-solid rounded-lg border-2 w-fit mx-auto p-5"
      style={{
        // backgroundColor: "",
        // margin: "5%",
        // borderRadius: "10px",
        // padding: "1rem",
        backgroundImage: `url(${bgProject})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // width: "90vw", // Adjust the width to fit the screen horizontally
        // // height: "100vh", // Adjust the height to fit the screen vertically
      }}
    >
      <div className="py-4 px-5 flex ">
        <h1
          className="text-center mb-0 flex-grow-1 mb-2 items-center text-xl font-bold"
          style={{ fontFamily: "Arial", marginLeft: "80px" }}
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
          style={{ paddingRight: "1.1rem", width: "8rem" }}
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
export default AllProjectList;
