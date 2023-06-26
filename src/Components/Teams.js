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
  // const Project_ID = TeamData.find((proj) => proj.id === Number(p_id));
  const maxWidth = "sm";
  const id = Number(localStorage.getItem("ProjectID"));
  const id2 = 12;
  var payload = { Project_ID: id }
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(5);
  const [teamDetails, setTeamDetails] = useState([]);
  // const[teamData,setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(id);
  // AuthenticationService.teamDetails(payload).then((response)=>{
  //   setTeamDetails(response.data.users)
  //    console.log(response.data);
  //   // console.log(response.data.users[0])
  //   // console.log(response.data.users[0].email)
  //   // console.log(teamDetails);
  // })

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

  // useEffect(()=>{
  //   if (teamDetails.length >0) {
  //     console.log(teamDetails);
  //   } else {
  //     console.log("No Team is there!!")
  //   }
   
  // },[teamDetails])
  //  console.log("Teams",teamDetails);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = TeamData.slice(indexOfFirstMember, indexOfLastMember);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
//  const [userList, setUserList] = useState([]);
//   useEffect(() => {
//     AuthenticationService.allUsersTable()
//       .then((response) => {
//         setUserList(response.data);
//         console.log("userList....", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
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
                  </tr>
                </thead>
                
                      <tbody>
                        
                      {teamDetails.map((member, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2">{index + 1}</td>
                          <td className="px-4 py-2">{member.name}</td>
                          <td className="px-4 py-2">{member.Email_ID}</td>
                          <td className="px-4 py-2">{member.role}</td>
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
