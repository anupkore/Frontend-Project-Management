import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


function UpdateDefect({ issueId }) 
{
  const [title, setTitle] = useState("");
  const [product , setProduct] = useState("");
  const [component , setComponent] = useState("");
  const [componentDescription, setComponentDescription] = useState("");
  const [version , setVersion] = useState("");
  const [severity, setSeverity] = useState("");
  const [os , setOS] = useState("");
  const [summary , setSummary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log(issueId);

  function handleInputChangeTitle(event) 
  {
    setTitle(event.target.value);
  }

  function handleInputChangePriority(event) 
  {
    setPriority(event.target.value);
  }

  function handleInputChangeProduct(event) 
  {
    setProduct(event.target.value);
  }

  function handleInputChangeVersion(event) 
  {
    setVersion(event.target.value);
  }
  

  function handleInputChangeSeverity(event) 
  {
    setSeverity(event.target.value);
  }

  function handleInputChangeOS(event) 
  {
    setOS(event.target.value);
  }

  function handleInputChangeStartDate(event) 
  {
    setStartDate(event.target.value);
  }

  function handleInputChangeEndDate(event) 
  {
    setEndDate(event.target.value);
  }

  function handleInputChangeEstimatedTime(event) 
  {
    setEstimatedTime(event.target.value);
  }

  function handleInputChangeComponent(event) 
  {
    setComponent(event.target.value);
  }

  function handleInputChangeSummary(event) 
  {
    setSummary(event.target.value);
  }

  function handleInputChangeComonentDescription(event) 
  {
    setComponentDescription(event.target.value);
  }

  
  
  
  
  function handleUpdateDefect(event) {
    setIsLoading(true);
    event.preventDefault();
    var payload = {
      issue_id: issueId,
      title: title,
      product: product,
      component: component,
      component_description: componentDescription,
      version: version,
      severity: severity,
      os: os,
      summary: summary,
      defect_sd: startDate,
      defect_ed: endDate,
      priority: priority,
      estimated_time: estimatedTime,
    };
    console.log(payload);
    AuthenticationService.updateDefect(payload)
      .then(() => {
        console.log("Hi Update Defect");
        toast.success("Defect Added Sucessfully!! ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        //navigate("/allIssues");
        window.location.href = "/allIssues";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
  

        <>
        {isLoading && (
      <div className="flex align-center justify-center">
         <SyncLoader color="#1976d2" size={10}  style={{ marginTop: "10%" }} />
      </div>
    )}
          <div className={`${isLoading ? "blur-xl" : ""}`}>
          <Container fluid="sm" >
            <div className="mx-auto max-w-2xl pb-3">
              <div className="text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Update Defect
                </h1>
              </div>
            </div>
            <Row>
              
              <Col sm>
                <div className="pt-5">
                  <form action="#" method="POST" className="m-auto mt-16 max-w-l sm:mt-20">
                    
                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      
                            <div>
                              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Defect Title
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
                                  disabled={isLoading}
                                />
                              </div>
                            </div>
                            
                            
                            <div>
                              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Priority
                              </label>
                              
                              <div className="mt-2.5">
                                <select
                                  value={priority}
                                  onChange={handleInputChangePriority}
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                                  disabled={isLoading}
                                >
                                  <option value="">Select Priority</option>
                                  <option value="Low">Low</option>
                                  <option value="Medium">Medium</option>
                                  <option value="High">High</option>
                                </select>
                              </div>
                            </div>

                    </div>


                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      
                            <div>
                              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Product
                              </label>

                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  value={product}
                                  onChange={handleInputChangeProduct}
                                  required
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                                  disabled={isLoading}
                                />
                              </div>
                            </div>
                            
                            
                            <div>
                              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Version
                              </label>
                              
                              <div className="mt-2.5">
                              <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  value={version}
                                  onChange={handleInputChangeVersion}
                                  required
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                                  disabled={isLoading}
                                />
                              </div>
                            </div>

                    </div>


                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      
                            <div>
                              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Severity
                              </label>

                              <div className="mt-2.5">
                                  <select
                                    value={severity}
                                    onChange={handleInputChangeSeverity}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                                    disabled={isLoading}
                                  >
                                    <option value="">Select Severity</option>
                                    <option value="Minor">Minor</option>
                                    <option value="Major">Major</option>
                                    <option value="Critical">Critical</option>
                              </select>
                              </div>
                            </div>
                            
                            
                            <div>
                              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Operating System
                              </label>
                              
                              <div className="mt-2.5">
                              <select
                                  value={os}
                                  onChange={handleInputChangeOS}
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                                  disabled={isLoading}
                                >
                                  <option value="">Select Operating System</option>
                                  <option value="Windows">Windows</option>
                                  <option value="Mac">MAC OS</option>
                                  <option value="Linux">Linux</option>
                                </select>
                              </div>
                            </div>

                    </div>
                    
                    
                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      <div className="">
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
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="">
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
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="last-name"
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
                                  required
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                                  disabled={isLoading}
                                />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Component
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={component}
                            onChange={handleInputChangeComponent}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      
                            <div>
                              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Summary
                              </label>

                              
                              <div className="mt-2.5">
                                  <textarea
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    value={summary}
                                    onChange={handleInputChangeSummary}
                                    autoComplete="given-name"
                                    className="h-40 w-full rounded-md border-0 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm text-lg"
                                    disabled={isLoading}
                                  />
                              </div>
                            </div>
                            
                            
                            <div>
                      <label
                        htmlFor="first-name"
                        className="block w-full text-sm font-semibold leading-6 text-gray-900"
                      >
                        Component Description
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          type="text"
                          name="first-name"
                          id="first-name"
                          value={componentDescription}
                          onChange={handleInputChangeComonentDescription}
                          autoComplete="given-name"
                          className="h-40 w-full rounded-md border-0 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm text-lg"
                          disabled={isLoading}
                        />
                      </div>
                      </div>

                    </div>
                    
                  </form>
                </div>
              </Col>
              <div className="flex mt-2 justify-center ">
                <button
                  onClick={handleUpdateDefect}
                  variant="contained"
                  className={`text-white font-bold py-2 px-4 rounded ${
                    isLoading
                      ? " cursor-not-allowed bg-blue-300"
                      : "hover:bg-blue-700 bg-blue-500"
                  }`}
                  disabled={isLoading}
                >
                  Update
                </button>
              </div>
            </Row>
          </Container>
          </div>
        </>
  
  );
}

export default UpdateDefect;