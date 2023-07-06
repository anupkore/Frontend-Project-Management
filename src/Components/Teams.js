import React from "react";
import { useParams } from "react-router";
import FormDialog from "./Dialog";
import { Link } from "react-router-dom";
import AddNewMember from "./AddNewMember";
import SideBar from "./SideBar";
import { TeamData } from "./TEST/TeamData";
import { useState } from "react";
import Pagination from "./Pagination";
import AssignMember from "./AssignMember";
import AuthenticationService from "../Services/AuthenticationService";
import { useEffect } from "react";
import { index } from "d3-array";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

export const Teams = () => {
  const { p_id } = useParams();
  const maxWidth = "sm";
  const id = Number(localStorage.getItem("ProjectID"));
  var payload = { Project_ID: id }
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(5);
  const [teamDetails, setTeamDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthenticationService.teamDetails(payload);
        console.log(response.data.users);
        const details = response.data.users;
        setTeamDetails(details);
        // console.log(details);
        setIsLoading(false);

      } catch (error) {
        // Handle error if needed
        console.error("Error fetching workflow data:", error);
        toast.error("Internal Server Error")
        setIsLoading(false);
        throw error;
      }
    };
    fetchData();
  }, []);

  function handleRemove(userID)
  {
    var payload2 = {user_ID : userID }
    console.log(payload2);

    AuthenticationService.removeMember(payload2).then((response)=>{
      console.log(response.data);
      // Remove the member from the teamDetails state
      setTeamDetails((prevTeamDetails) =>
        prevTeamDetails.filter((member) => member.user_ID !== userID)
      );
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = TeamData.slice(indexOfFirstMember, indexOfLastMember);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <>
    {isLoading ?(
      <div className="flex justify-center">
          <HashLoader
            color="#1976d2"
            style={{ marginTop: "10%" }}
            size={100}
            speedMultiplier={1}
          />
          {/* <PacmanLoader color="#1976d2" size={50}/>   */}
        </div>
    ):(
      <>
      <div className="flex">
        <div className="h-screen">
          <SideBar p_id={p_id}></SideBar>
        </div>

        <section
          className="bg-blur-3xl bg-opacity-30 flex-wrap h-full w-full mx-20 px-8 py-4 rounded-5 border-solid border-2"

        >
          <div className="flex-wrap pt-4 pb-1 px-5 justify-end">
            <h1 className="text-center mb-0 flex-grow-1 mb-2">
              <span className="bg-white px-4 py-2 rounded-md shadow-md text-navy-blue align-items-center mx-auto text-center">
                Team Members {teamDetails.length}
              </span>
            </h1>
          </div>

          <div className="flex-wrap justify-between items-center py-1 px-2">
            <div className="flex items-center space-x-4">
              <span className="text-l text-gray-500">
                <div>
                  <FormDialog
                    prop={<AssignMember></AssignMember>}
                    style={maxWidth}
                    buttonTitle={"Assign"}
                    icon={"/Images/plus-lg-white.svg"}
                    ic={"false"}
                  ></FormDialog>
                </div>
              </span>
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
                    <th className="px-4 py-2">Remove</th>
                  </tr>
                </thead>
                
                      <tbody>
                        
                      {teamDetails.map((member, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2">{index + 1}</td>
                          <td className="px-4 py-2">{member.name}</td>
                          <td className="px-4 py-2">{member.Email_ID}</td>
                          <td className="px-4 py-2">{member.role}</td>
                          <td className="px-4 py-2"> <button onClick={()=>{handleRemove(member.user_ID)}} className="btn btn-danger">Remove</button> </td>
                        </tr>
                      ))}
                        
                      </tbody>
                  
                

              </table>
              <div className="flex mt-3 mx-auto">

                <div>
                  {/* <Pagination
                    membersPerPage={membersPerPage}
                    totalMembers={TeamData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  ></Pagination> */}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
    )}
    </>
  );
};
