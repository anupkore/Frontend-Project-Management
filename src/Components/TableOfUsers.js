import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import AuthenticationService from "../Services/AuthenticationService";
import Navbar from "./Navbar";
import AddNewMember from "./AddNewMember";


function TableOfUsers() {
  const [userList, setUserList] = useState([]);

  function handleAddNewMember() {
    window.location.href = "/addNewMember";
  }

  useEffect(() => {
    AuthenticationService.allUsersTable()
      .then((response) => {
        setUserList(response.data);
        console.log("userList", userList);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  function handleUpdate(userId) {
    // Perform the update operation using the userId parameter
    console.log(`Updating user with ID: ${userId}`);
    // Fetch the user data for the specified userId
    AuthenticationService.getUser(userId)
      .then((response) => {
        const userData = response.data;
        // Render the AddNewMember component with the user data
        ReactDOM.render(
          <AddNewMember userData={userData} />,
          document.getElementById("root")
        );
      })
      .catch((error) => {
        // Code to handle the error
        console.log("An error occurred while fetching user data:", error);
      });
  }

  function handleDelete(userId) {
    // Display confirmation box
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  
    if (confirmDelete) {
      // Perform the delete operation using the userId parameter
      console.log(`Deleting user with ID: ${userId}`);
      AuthenticationService.deleteUser(userId)
        .then((result) => {
          // Code to handle successful promise resolution
          console.log(result);
        })
        .catch((error) => {
          // Code to handle the error
          console.log('An error occurred while deleting....:', error);
        });
    }
  }
  

  return (
    <>
            <div className="flex mt-4">
        <div className="w-1/3">
          <img src="/Images/CreateProject2.jpg" alt="Project" />
        </div>

        <div className="container-lg">
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-primary" onClick={handleAddNewMember}>
              Add New User
            </button>
          </div>

          <table className="table-fixed bg-white rounded-3xl w-auto mx-auto shadow-md table-mt-0">
            <thead>
              <tr>
                <th className="px-4 py-2">Sr.No</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Contact</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>

            {userList.map((event, index) => (
              <tbody key={event.user_id} className="mt-3">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{event.name}</td>
                <td className="px-4 py-2">{event.Email_id}</td>
                <td className="px-4 py-2">{event.contact}</td>
                <td className="px-4 py-2">{event.role}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(event.user_id)}
                    className="btn btn-primary mx-auto"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(event.user_id)}
                    className="btn btn-danger mx-auto"
                  >
                    Delete
                  </button>
                </td>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );

}

export default TableOfUsers;
