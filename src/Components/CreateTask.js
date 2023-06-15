import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import { Button, Col, Container, Row } from "react-bootstrap";

function CreateTask({issueId})
{
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [estimatedTime , setEstimatedTime] = useState("");
  console.log(issueId);
    
    function handleInputChangeTitle(event) 
     {
        setTitle(event.target.value);
    }

     function handleInputChangeDescription(event) 
     {
        setDescription(event.target.value);
        
     }

     function handleInputChangeStartDate(event) 
     {
        setStartDate(event.target.value);
        
     }

     function handleInputChangeEndDate(event) 
     {
        setEndDate(event.target.value);
        
     }

     function handleInputChangePriority(event) 
     {
        setPriority(event.target.value);
        
     }

     function handleInputChangeEstimatedTime(event) 
     {
        setEstimatedTime(event.target.value);
        
     }

  function handleCreateTask(event)
  {
    event.preventDefault();
    var payload = 
    {
        issue_id : issueId,
        title: title,
        description: description,
        planned_sd: startDate,
        planned_ed: endDate,
        priority: priority,
        estimatedTime: estimatedTime,
    }
    console.log(payload);
    AuthenticationService.createTask(payload).then(()=>{
      console.log("Hi Create Task");
      window.location.href = '/allIssues';
    })
  }
  
  

  return (
    <>
      <div className="flex">
        <div className="flex justify-items-end align-items-center">
          <img src="/Images/projectmag.png" width={600} height={550}></img>
        </div>

        <div className="">
          <Container>
            <Row>
              <Col lg>
                <div>
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Create New Task
                    </h2>
                  </div>
                  <form
                    action="#"
                    method="POST"
                    className="m-auto mt-16 max-w-l sm:mt-20"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Task Title
                        </label>

                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={title}
                            onChange={handleInputChangeTitle}
                            required
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="textarea"
                            name="last-name"
                            id="last-name"
                            value={description}
                            onChange={handleInputChangeDescription}
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          
                        </div>
                      </div>
                    </div>

                    
                      <div className="grid grid-cols-1 gap-x-50 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Planned Start Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="company"
                              id="company"
                              value={startDate}
                              onChange={handleInputChangeStartDate}
                              autoComplete="organization"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
                            
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-50 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Planned End Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="company"
                              id="company"
                              value={endDate}
                              onChange={handleInputChangeEndDate}
                              autoComplete="organization"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
                            
                          </div>
                        </div>
                      
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          priority
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={priority}
                            onChange={handleInputChangePriority}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Estimated Time
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={estimatedTime}
                            onChange={handleInputChangeEstimatedTime}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                          />
                          
                        </div>
                      </div>

                    </div>
                    <div className="flex mt-5 justify-center ">
                      <button className="btn btn-primary"  onClick={handleCreateTask} variant="contained">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CreateTask;