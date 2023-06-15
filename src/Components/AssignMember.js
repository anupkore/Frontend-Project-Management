import { useRef, useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";

function AssignMember() {
  const email = useRef('');
  const [errorEmail, setErrorEmail] = useState('');
  const pid = localStorage.getItem("ProjectID");
  const uid = 2002;
  const [userList, setUserList] = useState([]);

  (async () => {
    try {
      const response = await AuthenticationService.allUsersTable();
      setUserList(response.data);
      console.log("userList....", response.data);
    } catch (error) {
      console.log(error);
    }
  })();

  function handleInputChangeEmail() {
    setErrorEmail('');
  }

  function handleAssign(event) {
    event.preventDefault();
    var payload = {
      email_id: email.current.value,
      project_id: pid
    }
    console.log(payload);
    AuthenticationService.assignMember(payload).then(() => {
      console.log("New User added");
      window.alert("New User added");
      window.location.href = "/teams";
    })
  }

  return (
    <>
      <div className="flex align-items-center justify-content-center mt-5">
        <div className="w-full h-full border-1 shadow border-gray-500 ">
          <div className="flex align-items-center justify-content-center">
            <form>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-5">
                  Email address
                </label>
                <div className="mt-2">
                  <select
                    id="email"
                    name="email"
                    ref={email}
                    onChange={handleInputChangeEmail}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select an email</option>
                    {userList.map((user) => (
                      <option key={user.user_id} value={user.Email_id}>{user.Email_id}</option>
                    ))}
                  </select>
                  <span className="text-danger">{errorEmail}</span>
                </div>

                <div className="mt-3">
                  <button onClick={handleAssign} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssignMember;
