import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormDialog from "./Dialog";

import AddNewProject from "./AddNewProject";
import { projects, projects1 } from "./TEST/Projects";
import { red } from "@mui/material/colors";


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
    <>
      <div>
        <div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[120deg] bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                // backgroundImage: `url("/Images/cool-background.svg")` ,
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              >
          </div>
          <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-180deg] bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                // backgroundImage: `url("/Images/cool-background.svg")` ,
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div className="container-lg">
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
          <div className="flex justify-left my-2">
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
          <div className="container-lg bg-blur-3xl bg-opacity-30 rounded-lg  p-4 ">
            <div className="w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar" >
              <div className="flex max-h-[28] min-w-[200rem] items-center py-2">
                <table className="table-fixed bg-white rounded-3xl w-auto mx-auto shadow-md">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Sr.No</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Start Date</th>
                      <th className="px-4 py-2">End Date</th>
                      <th className="px-4 py-2">Client Name</th>
                      <th className="px-4 py-2">Lead Name</th>
                      <th className="px-4 py-2">Risks</th>
                      <th className="px-4 py-2">Mitigations</th>
                      <th className="px-4 py-2">Details</th>
                      {/* <th className="px-4 py-2">Issues</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((project, index) => (
                      <tr key={project.id} className="my-4 divide-y space-y-5">
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{project.description}</td>
                        <td className="px-4 py-2">{project.status}</td>
                        <td className="px-4 py-2">{project.startDate}</td>
                        <td className="px-4 py-2">{project.endDate}</td>
                        <td className="px-4 py-2">JP Morgan</td>
                        <td className="px-4 py-2">Yashwant Singh</td>
                        <td className="px-4 py-2">
                          {project.description}
                          {project.description}
                        </td>
                        <td className="px-4 py-2">{project.description}</td>
                        <td className="px-4 py-2 underline text-blue-900">
                          <Link to={`/projectexplore/${project.id}`}>
                            {" "}
                            Explore
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
export default AllProjectList;
