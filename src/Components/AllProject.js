import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormDialog from "./Dialog";
import AddNewProject from "./AddNewProject";
import AuthenticationService from "../Services/AuthenticationService";
import Pagination from "./Pagination";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Button, ButtonGroup } from "@mui/material";
import ParticularIssueDashboard from "./ParticularIssueDashboard";
import MyIssues from "./Myissues";
import { HashLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./Navbar";
import IssueDashboard from "./IssueDashboard";
import ErrorPage from "./ErrorPage";
import {useLocation} from "react-router-dom";


export const AllProjectList = () => {

  
  const maxWidth = "lg";
  const [filterStatus, setFilterStatus] = useState("All");
  const [allList, setAllList] = useState([]);
  const location = useLocation();
  // console.log(location.pathname);
  const [myIssues, setMyIssues] = useState(false);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState("false");
  const userID = localStorage.getItem("UserID");
  console.log("userID", userID);
  var payload = { user_ID: userID };
  console.log(userID);
  localStorage.removeItem("ProjectName");
  localStorage.removeItem("ProjectID");
  // const [showErrorPage, setShowErrorPage] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   AuthenticationService.allProjects(payload)
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllList(response.data);
  //       console.log("Hi");
  //       console.log(allList);
  //     })
  //     .catch((error) => {
  //       setShowErrorPage(true);
  //       console.log("ERROR" + error.data);
  //       // toast.error("Internal Server Error")

  //     })
  //     .finally(() => {
  //       setLoading(false); // Set loading state to false when the request is completed
  //     });
  // }, []);

  const [showErrorPage, setShowErrorPage] = useState(false);

useEffect(() => {
  let timerId = null;

  setLoading(true);

  // Start a timer to track the loading time
  timerId = setTimeout(() => {
    setShowErrorPage(true);
  }, 5000);

  AuthenticationService.allProjects(payload)
    .then((response) => {
      console.log(response.data);
      setAllList(response.data);
      console.log("Hi");
      console.log(allList);
    })
    .catch((error) => {
      setShowErrorPage(true);
      console.log("ERROR" + error.data);
      // toast.error("Internal Server Error")
    })
    .finally(() => {
      clearTimeout(timerId); // Clear the timer when the request is completed
      setLoading(false); // Set loading state to false when the request is completed
    });

  // Clean up the timer if the component unmounts or the effect runs again
  return () => clearTimeout(timerId);
}, []);

  localStorage.removeItem("Role");

  const filteredProjects = allList.filter((project) => {
    if (filterStatus === "All") {
      return true;
    } else {
      return project.status === filterStatus;
    }
  });

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

  const [projectList, setProjectList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(5);

  //Get Current member
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredProjects.slice(
    indexOfFirstMember,
    indexOfLastMember
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [sortOrderByStartDate, setSortOrderByStartDate] = useState("Ascending");
  const [sortOrderByEndDate, setSortOrderByEndDate] = useState("Ascending");

  const sortedAndFilteredProjects = [...allList]
    .sort((a, b) => {
      if (sortOrder === "Ascending") {
        return a.Project_name.localeCompare(b.Project_name);
      } else {
        return b.Project_name.localeCompare(a.Project_name);
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
    const arrowIcon = sortOrder === "Ascending" ? <FaSortUp /> : <FaSortDown />;
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
  // console.log(sortedAndFilteredProjects.length);
  // console.log(allList.length);

  return (
    <>
      {loading ? (
        <>
        <div className="flex justify-center">
          <HashLoader
            color="#1976d2"
            style={{ marginTop: "10%" }}
            size={100}
            speedMultiplier={1}
          />
          {/* {toast.error("Internal Server Error")} */}
          {/* <PacmanLoader color="#1976d2" size={50}/>   */}
        </div>
        
        </>
      ) : (
        showErrorPage ? <ErrorPage error={"Server Unavailabe"} location={location.pathname}></ErrorPage> :
        (
        <div>
          <div>
            <div
              className="absolute h-fit transform-gpu overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] w-[36.125rem] -translate-x-1/2 rotate-[120deg] bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
              <div
                className="relative left-[calc(50%-11rem)] w-[36.125rem] -translate-x-1/2 rotate-[-180deg] bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="container-lg">
            <div className="py-4 px-5 flex flex-row">
              <div className="mx-auto">
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button
                    onClick={() => setMyIssues(false)}
                    disabled={!myIssues}
                  >
                    {" "}
                    <h1
                      className="text-center flex-grow-1 items-center text-xl font-bold"
                      // style={{ fontFamily: "Arial", marginLeft: "80px" }}
                    >
                      <span className="px-2 py-2 text-navy-blue ">
                        My Projects
                      </span>
                    </h1>
                  </Button>
                  <Button onClick={() => setMyIssues(true)} disabled={myIssues}>
                    {" "}
                    <h1
                      className="text-center flex-grow-1 items-center text-xl font-bold"
                      // style={{ fontFamily: "Arial", marginLeft: "80px" }}
                    >
                      <span className="px-2 py-2 text-navy-blue">
                        My Issues
                      </span>
                    </h1>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            {myIssues ? (
              <MyIssues></MyIssues>
            ) : allList.length === 0 ? (
              <div className="mx-auto ">
                <div className="flex justify-center">
                  <h1 className="text-5xl font-bold">
                    Create Your First Project
                  </h1>
                </div>
                <div className="flex border-dashed container-md justify-center mt-20 w-screen h-96 border-2 rounded-md">
                  <div className="m-auto">
                    <FormDialog
                      prop={<AddNewProject />}
                      style={maxWidth}
                      icon={"./Images/plus-lg.svg"}
                      // buttonTitle="Create Project"
                      largebutton={"true"}
                      variant={""}
                      ic={"true"}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-left my-2">
                  <div>
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
                  <div className="my-auto ml-auto">
                    <FormDialog
                      prop={<AddNewProject />}
                      style={maxWidth}
                      icon={"./Images/plus-lg-white.svg"}
                      buttonTitle="Create Project"
                      variant={"outlined"}
                      ic={"false"}
                    />
                  </div>
                </div>


                <div className="container-lg bg-blur-3xl bg-opacity-30 rounded-lg ">
                  <div className="w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar">
                    <div className="flex max-h-[28] min-w-[105em] items-center py-2">
                      <table className="table-fixed bg-white rounded-3xl w-auto shadow-md" >
                        <thead>
                          <tr>
                            <th className="px-4 py-2">Sr.No</th>
                            {renderNameHeader()}
                            <th className="px-4 py-2">States</th>
                            {renderStartDateHeader()}
                            <th className="px-4 py-2">End Date</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Client Name</th>
                            <th className="px-4 py-2">Lead Name</th>
                            <th className="px-4 py-2">Risks</th>
                            <th className="px-4 py-2">Mitigations</th>
                            <th className="px-4 py-2">Details</th>
                            {/* <th className="px-4 py-2">Issues</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {sortedAndFilteredProjects.map((project, index) => (
                            <tr
                              key={project.id}
                              className="my-4 divide-y space-y-5"
                            >
                              <td className="px-4 py-2">{index + 1}</td>
                              <td className="px-4 py-2">
                                {project.Project_name}
                              </td>
                              <td className="px-4 py-2">{project.Status}</td>
                              <td className="px-4 py-2">
                                {new Date(
                                  project.planned_sd
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })}
                              </td>
                              <td className="px-4 py-2">
                                {new Date(
                                  project.planned_ed
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })}
                              </td>
                              <td className="px-4 py-2">
                                {/* {project.status} */}
                                Hi
                              </td>
                              <td className="px-4 py-2">
                                {project.client_name}
                              </td>
                              <td className="px-4 py-2">
                                {project.project_lead}
                              </td>
                              <td className="px-4 py-2">{project.risk}</td>
                              <td className="px-4 py-2">
                                {project.mitigation}
                              </td>
                              <td className="px-4 py-2 underline text-blue-900">
                                <Link
                                  to={`/projectexplore/${project.Project_ID}`}
                                >
                                  Explore
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex mt-3 mx-auto justify-center">
                    <div className="mr-20 my-auto">
                      <span>
                        {currentPage} of{" "}
                        {Math.ceil(filteredProjects.length / membersPerPage)}
                      </span>
                    </div>
                    <div>
                      <Pagination
                        membersPerPage={membersPerPage}
                        totalMembers={filteredProjects.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      ></Pagination>
                    </div>
                  </div>
                </div>


              </>
            )}
          </div>
        </div>
        )
      )}
    </>
  );
};
export default AllProjectList;