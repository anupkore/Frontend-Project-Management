import { useEffect, useRef, useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";

function AssignMember()
{
    const [email,setEmail] = useState('');
    const[errorEmail , setErrorEmail] = useState('');
    const[emailList , setEmailList] = useState([]);
    const pid = Number(localStorage.getItem("ProjectID"));
    const payload = {Project_ID:pid};
    console.log(payload);

    useEffect(()=>{
        AuthenticationService.getAllEmails(payload).then((response)=>{
            console.log(response.data);
            setEmailList(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    
    
    function handleInputChangeEmail(event)
    {
       setEmail(event.target.value);
        
    }

    function handleAssign(event)
    {
        event.preventDefault();
        var payload = 
      {
        Email_ID: email,
        Project_ID: pid
      }
      console.log(payload);
      AuthenticationService.assignMember(payload).then(()=>{
        console.log("New User added");
        window.location.href = "/teams";
      })
    }
    
    return(
        <>
            <div className="flex align-items-center justify-content-center">
                
                <div className="flex align-items-center justify-content-center">
                <form>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                           Assign Member
                        </label>
                        <div className="mt-2">
                            <select
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChangeEmail}
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                            <option value="">Select an email</option>
                            {emailList.map((email) => (
                                <option key={email} value={email}>
                                    {email}
                                </option>
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
    
        </>
    )
}

export default AssignMember;
