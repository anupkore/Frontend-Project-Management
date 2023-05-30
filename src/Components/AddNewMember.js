import { useRef } from "react"
import AuthenticationService from "../Services/AuthenticationService";

export default function AddNewMember() 
{
    
    const name = useRef('');
    const email = useRef('');
    const contact = useRef('');

    function handleSignUp(event)
    {
      event.preventDefault();
      var payload = 
      {
          name: name.current.value,
          email: email.current.value,
          contact: contact.current.value
      }

      AuthenticationService.SignUp(payload).then(()=>{
        console.log("Hi");
      })
    }


    return (
      <>
        
        <div className="grid grid-cols-2 gap-4">
          
          
          <div className="flex align-items-end justify-content-end">
            <img src="/Images/Team1.png" alt="Team Image"></img>
          </div>
          
          <div className="">

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
                    id="email"
                    name="email"
                    type="email"
                    ref={name}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
  