import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import AuthenticationService from "../Services/AuthenticationService";
import Navbar from "./Navbar";
import AddNewMember from "./AddNewMember";
import UpdateUser from "./UpdateUser";
import { toast } from "react-toastify";


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
        toast.error("Internal Server Error")
      });
  }, []);

  function handleUpdate(userId) {
    // Perform the update operation using the userId parameter
    console.log(`Updating user with ID: ${userId}`);
    // Fetch the user data for the specified userId
    const payload = {user_id: userId}
    AuthenticationService.getUser(payload)
      .then((response) => {
        const userData = response.data[0];
        console.log("getting data...",userData[0]);
        // Render the AddNewMember component with the user data
        ReactDOM.render(
          <UpdateUser userData={userData} user_id={userId} />,
          document.getElementById("root")
        );
      })
      .catch((error) => {
        // Code to handle the error
        console.log("An error occurred while fetching user data:", error);
        toast.error("Internal Server Error")
      });
  }

  function handleDelete(user_id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    const payload = {user_id: user_id}
    if (confirmDelete) {
      console.log(`Deleting user with ID: ${user_id}`);
      AuthenticationService.deleteUser(payload)
        .then((result) => {
          console.log(result);
          // Refresh the user list after successful deletion
          AuthenticationService.allUsersTable()
            .then((response) => {
              setUserList(response.data);
            })
            .catch((error) => {
              console.log(error);
              toast.error("Internal Server Error")
            });
        })
        .catch((error) => {
          console.log(`An error occurred while deleting user with ID ${user_id}:`, error);
          toast.error("Internal Server Error")
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