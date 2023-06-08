import React from "react";
import { useParams } from "react-router";
import FormDialog from "./Dialog";
import { Link } from "react-router-dom";
import AddNewMember from "./AddNewMember";
import SideBar from "./SideBar";
import { TeamData } from "./TEST/TeamData";
import { useState } from "react";
import Pagination from "./Pagination";

export const Teams = () => {
  const { p_id } = useParams();
  const Project_Id = TeamData.find((proj) => proj.id === Number(p_id));
  const maxWidth = "sm";
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(5);

  //Get Current member
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = TeamData.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="flex">
        <div className="h-screen">
          <SideBar p_id={p_id}></SideBar>
        </div>

        <section
          className="bg-blur-3xl bg-opacity-30 flex-wrap h-full w-full mx-20 px-8 py-4 rounded-5 border-solid border-2"
          // style={{
          //   backgroundImage: `url(${bgProject})`,
          //   backgroundSize: "cover",
          // }}
        >
          <div className="flex-wrap pt-4 pb-1 px-5 justify-end">
            <h1 className="text-center mb-0 flex-grow-1 mb-2">
              <span className="bg-white px-4 py-2 rounded-md shadow-md text-navy-blue align-items-center mx-auto text-center">
                Team Members
              </span>
            </h1>
          </div>

          <div className="flex-wrap justify-between items-center py-1 px-2">
            {/* <span className="text-xl font-bold">
              Project Title: {Project_Id.title}
            </span> */}
            <div className="flex items-center space-x-4">
              <span className="text-l text-gray-500">
                <div>
                  <FormDialog
                    prop={<AddNewMember></AddNewMember>}
                    style={maxWidth}
                    buttonTitle={"Assign"}
                    icon={"/Images/plus-lg-white.svg"}
                    ic={"false"}
                  ></FormDialog>
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
                    <th className="px-4 py-2">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMembers.map((issue, index) => (
                    <tr key={issue.id} className="my-4 divide-y space-y-5">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{issue.assignedTo[0].name}</td>
                      <td className="px-4 py-2">{issue.assignedTo[0].email}</td>
                      <td className="px-4 py-2">{issue.assignedTo[0].role}</td>
                      <td className="px-4 py-2 underline text-blue-900">
                        <Link to="/issues">Issue</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex mt-3 mx-auto">
                <div className="mr-20 my-auto">
                  <span>
                    {currentPage} of{" "}
                    {Math.ceil(TeamData.length / membersPerPage)}
                  </span>
                </div>
                <div>
                  <Pagination
                    membersPerPage={membersPerPage}
                    totalMembers={TeamData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  ></Pagination>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
