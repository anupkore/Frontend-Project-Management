import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormDialog from "./Dialog";

import AddNewProject from "./AddNewProject";
import { projects } from "./TEST/Projects";
import { FaSortDown, FaSortUp } from "react-icons/fa";

export const AllProjectList = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [sortOrderByStartDate, setSortOrderByStartDate] = useState("Ascending");
  const [sortOrderByEndDate, setSortOrderByEndDate] = useState("Ascending");

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "Ascending" ? "Descending" : "Ascending";
    setSortOrder(newSortOrder);
  };

  const handleSortStartDateToggle = () => {
    const newSortOrderByStartDate =
      sortOrderByStartDate === "Ascending" ? "Descending" : "Ascending";
    setSortOrderByStartDate(newSortOrderByStartDate);
  };
  const handleSortEndDateToggle = () => {
    const newSortOrderByStartDate =
      sortOrderByEndDate === "Ascending" ? "Descending" : "Ascending";
    setSortOrderByEndDate(newSortOrderByStartDate);
  };

  const sortedAndFilteredProjects = [...projects]
    .sort((a, b) => {
      if (sortOrder === "Ascending") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      if (sortOrderByStartDate === "Ascending") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    })
    .filter((project) => {
      if (filterStatus === "All") {
        return true;
      } else {
        return project.status === filterStatus;
      }
    });


  const renderNameHeader = () => {
    const arrowIcon =
      sortOrder === "Ascending" ? <FaSortUp /> : <FaSortDown />;
    return (
      <th className="px-4 py-2">
        Name{" "}
        <button className="sort-button" onClick={handleSortToggle}>
          {arrowIcon}
        </button>
      </th>
    );
  };

  const renderStartDateHeader = () => {
    const arrowIcon =
      sortOrderByStartDate === "Ascending" ? <FaSortUp /> : <FaSortDown />;
    return (
      <th className="px-4 py-2">
        Start Date{" "}
        <button className="sort-button" onClick={handleSortStartDateToggle}>
          {arrowIcon}
        </button>
      </th>
    );
  };
  const renderEndDateHeader = () => {
    const arrowIcon =
      sortOrderByEndDate === "Ascending" ? <FaSortUp /> : <FaSortDown />;
    return (
      <th className="px-4 py-2">
        Start Date{" "}
        <button className="sort-button" onClick={handleSortEndDateToggle}>
          {arrowIcon}
        </button>
      </th>
    );
  };


  
  return (
    <section className="bg-blur-3xl bg-opacity-30 border-solid rounded-lg border-2 w-fit mx-auto p-5">
      <div className="py-4 px-5 flex">
        <h1
          className="text-center mb-0 flex-grow-1 mb-2 items-center text-xl font-bold"
          style={{ fontFamily: "Arial", marginLeft: "80px" }}
        >
          <span className="bg-white px-2 py-2 rounded-md shadow-md text-navy-blue">
            My Projects
          </span>
        </h1>
        <div className="ml-auto justify-right">
          <FormDialog
            prop={<AddNewProject />}
            style="lg"
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
                {renderNameHeader()}
                <th className="px-4 py-2">Status</th>
                {renderStartDateHeader()}
                {renderEndDateHeader()}
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>

            <tbody>
              {sortedAndFilteredProjects.map((project, index) => (
                <tr key={project.id} className="my-4 divide-y space-y-5">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{project.title}</td>
                  <td className="px-4 py-2">{project.status}</td>
                  <td className="px-4 py-2">{project.startDate}</td>
                  <td className="px-4 py-2">{project.endDate}</td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2 underline text-blue-900">
                    <Link to={`/projectexplore/${project.id}`}>Explore</Link>
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
