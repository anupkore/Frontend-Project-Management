import { useRef, useState } from "react"
import AuthenticationService from "../Services/AuthenticationService";

export default function AddNewMember() 
{
    const name = useRef('');
    const email = useRef('');
    const contact = useRef('');
    const role = useRef('');
    const[errorName , setErrorName] = useState('');
    const[errorEmail , setErrorEmail] = useState('');
    const[errorContact , setErrorContact] = useState('');

    function validateName(name) 
    {
      const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
      return nameRegex.test(name);
    }

    function validateEmail(email) 
    {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function validateContact(contact) 
    {
      const contactRegex = /^\d{10}$/;
      return contactRegex.test(contact);
    }

    function handleInputChangeName()
    {
      setErrorName('');
    }
    function handleInputChangeEmail()
    {
      setErrorEmail('');
    }
    function handleInputChangeContact()
    {
      setErrorContact('');
    }

    function handleSignUp(event)
    {
      event.preventDefault();

      if (!validateName(name.current.value)) 
      {
        setErrorName('Please Enter Valid Name');
        return;
      }
      if (!validateEmail(email.current.value)) 
      {
        setErrorEmail('Please Enter Valid Email');
        return;
      }
      if (!validateContact(contact.current.value)) 
      {
        setErrorContact('Please Enter Valid Contact');
        return;
      }
      
      var payload = 
      {
          name: name.current.value,
          email_id: email.current.value,
          contact: contact.current.value,
          role: role.current.value
      }
      console.log(payload);
      AuthenticationService.signUp(payload).then(()=>{
        console.log("New User Created");
      })
    }


    return (
      <>
        
        <div className="grid grid-cols-2 gap-4">
          
          <div className="flex align-items-center justify-content-end">
            <img src="/Images/Team1.png" alt="Team Image"></img>
          </div>
          
          <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
              
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center my-auto text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Add  New Member
                </h2>
              </div>
  
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method="POST">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Name  
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          ref={name}
                          onChange={handleInputChangeName}
                          autoComplete="name"
                          required
                          className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="text-danger">{errorName}</span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          ref={email}
                          onChange={handleInputChangeEmail}
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="text-danger">{errorEmail}</span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                        Role
                      </label>
                      <div className="mt-2">
                      <select
                          className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          ref={role}
                      >
                          <option value="">Select Role</option>
                          <option  value="Manager">
                              Project Manager
                          </option>
                          <option  value="User">
                              Team Member
                          </option>
                      </select>
                        
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Contact
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="contact"
                          name="contact"
                          type="text"
                          ref={contact}
                          onChange={handleInputChangeContact}
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="text-danger">{errorContact}</span>
                      </div>
                    </div>

                    <div>
                      <button onClick={handleSignUp} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Add
                      </button>
                    </div>
            
                </form>
              </div>
            </div>
          </div>
      </div>
        
      </>
    )
  }
  
