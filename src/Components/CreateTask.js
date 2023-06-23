import { useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateTask({ issueId }) {
  const [title, setTitle] = useState("");
  //const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log(issueId);

  function handleInputChangeTitle(event) {
    setTitle(event.target.value);
  }

  // function handleInputChangeDescription(event) {
  //   setDescription(event.target.value);
  // }

  function handleInputChangeStartDate(event) {
    setStartDate(event.target.value);
  }

  function handleInputChangeEndDate(event) {
    setEndDate(event.target.value);
  }

  function handleInputChangePriority(event) {
    setPriority(event.target.value);
  }

  function handleInputChangeEstimatedTime(event) {
    setEstimatedTime(event.target.value);
  }

  function handleCreateTask(event) {
    setIsLoading(true);
    event.preventDefault();
    var payload = {
      issue_id: issueId,
      title: title,
      task_sd: startDate,
      task_ed: endDate,
      priority: priority,
      estimated_time: estimatedTime,
    };
    console.log(payload);
    AuthenticationService.createTask(payload).then(() => {
      toast.success("Task Added Sucessfully!! ", {
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
      // navigate("/allIssues");
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
          <SyncLoader color="#1976d2" size={10} style={{ marginTop: "10%" }} />
        </div>
      )}

      <div 
      className={`${isLoading ? "blur-xl" : ""}`}
      >
        <Container fluid="sm">
          <div className="mx-auto max-w-2xl pb-3">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Create New Task
              </h1>
            </div>
          </div>
          <Row>
            <Col sm>
              <img
                src="/Images/projectmag.png"
                className="my-auto"
                alt="Task Form"
              ></img>
            </Col>
            <Col sm>
              <div>
                <form
                  action="#"
                  method="POST"
                  className="m-auto mt-16 max-w-l sm:mt-20"
                >
                  <div className="grid grid-cols-1 ">
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
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
                    <div className="">
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
                    <div className="">
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
                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
                    
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        priority
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
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          type="textarea"
                          name="last-name"
                          id="last-name"
                          value={description}
                          onChange={handleInputChangeDescription}
                          autoComplete="family-name"
                          className="h-40 w-full rounded-md border-0 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm text-lg"
                          disabled={isLoading}
                        />
                      </div>
                  </div> */}
                  <div className="flex mt-5 justify-center ">
                    <button
                      onClick={handleCreateTask}
                      variant="contained"
                      className={`text-white font-bold py-2 px-4 rounded ${
                        isLoading
                          ? " cursor-not-allowed bg-blue-300"
                          : "hover:bg-blue-700 bg-blue-500"
                      }`}
                      disabled={isLoading}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CreateTask;