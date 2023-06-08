import { useEffect, useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";

function TableOfUsers()
{
    
    const[userList , setUserList] = useState([]);
    function handleAddNewMember()
    {
        window.location.href = '/addNewMember';
    }

    useEffect(() => {
        AuthenticationService.allUsersTable().then((response) => {
          setUserList((existingData) => 
          {
            console.log(response.data);
            setUserList(response.data);
            console.log("Hi");
            console.log(userList);
          });
        }) 
        .catch((error)=>{
            console.log(error.data);
        })
        
      }, []);
    
    return(
        <>
            
            <div className="flex mt-4">

                <div className="w-1/4 mx-auto">
                    <img src="/Images/CreateProject2.jpg"></img>
                </div>

                <div className="w-3/4 container-md">
                    
                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-primary" onClick={handleAddNewMember}>Add New User</button>
                    </div>

                    <table className="table-fixed bg-white rounded-3xl w-auto mx-auto shadow-md">
                        <thead>
                            <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Contact</th>
                            <th className="px-4 py-2">Update</th>
                            <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        
                        <tbody className="mt-3">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Anup</td>
                            <td className="px-4 py-2">anup@infobellit.com</td>
                            <td className="px-4 py-2">8698995577</td>
                            <td> <button className="btn btn-primary mx-auto">Update</button> </td>
                            <td> <button className="btn btn-danger mx-auto">Delete</button>  </td>
                        </tbody>
                    </table>

                </div>

            </div>
            

        </>
    );
}

export default TableOfUsers;