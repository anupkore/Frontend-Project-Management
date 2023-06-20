import React, { useRef, useState } from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "react-bootstrap";
import { SyncLoader } from "react-spinners";
import AuthenticationService from "../Services/AuthenticationService";
import { useEffect } from "react";
import getAdjacentStates from "./States";
// import { isVisible } from "@testing-library/user-event/dist/utils";
import { toast } from "react-toastify";

export default function IssueDescription({ i_id ,p_id ,p_name}) {
  const comment = useRef("");
  const [isSaveVisible, setSaveVisible] = useState(false);
  const [isAddVisible, setAddVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control popover open/closed
  const [isOpen1, setIsOpen1] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [workflowData, setWorkflowData] = useState([]);
  const UserID = localStorage.getItem("UserID");
  const [issue, setIssue] = useState({
    Title: "",
    Description: "",
    Priority: "",
    Estimated_time: "",
    severity: "",
    Task_ID: 0,
    defect_ID: 0,
  });
  const [type, setType] = useState("");
  const [currentState, setCurrentState] = useState("");
  const proj_id = Number(localStorage.getItem("ProjectID"));
  const [workflowString, setWorkflowString] = useState("");
  const [workflow, setWorkflow] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [showLatestComment, setShowLatestComment] = useState(false);
  const [assignedTo, setAssignedTo] = useState("Unassigned");
  const [teamData, setTeamData] = useState([]);
  const [description, setDescription] = useState("Description");
  const Role = localStorage.getItem("Role");
  const user_email = localStorage.getItem("UserEmail");
  console.log("IID", i_id);
  // const id = Number(i_id);
  const payload = { issue_id: i_id };
  console.log(payload);
  const payload2 = { id: i_id };
  console.log(payload2);

  const payload1 = { project_id: proj_id };
  console.log(payload1);
  // Function to handle opening the popover
  const openPopover = () => {
    setIsOpen(true);
  };

  // Function to handle closing the popover
  const closePopover = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    // toggleDropdown();
  };

  // Function to handle opening the popover
  const openPopover1 = () => {
    setIsOpen1(true);
  };

  // Function to handle closing the popover
  const closePopover1 = () => {
    setIsOpen1(false);
  };

  const handleOptionSelect1 = (value) => {
    setAssignedTo(value);
  };

  const handlePostDescription = (event) => {
    event.preventDefault();

    if (type === "task") {
      const payload = {
        task_id: issue.Task_ID,
        description: description,
      };
      console.log(payload);
      AuthenticationService.updateTaskDescription(payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          
        });
    } else {
      const payload = {
        defect_id: issue.defect_ID,
        description: description,
      };
      console.log(payload);
      AuthenticationService.updateDefectDescription(payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const payload = {
      issue_id: i_id,
      status: selectedValue,
    };
    if (!isLoading) {
      console.log(payload);
      AuthenticationService.updateIssueState(payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedValue, proj_id, i_id]);

  useEffect(() => {
    const payload4 = {
      email_id: assignedTo[0],
      project_id: proj_id,
      issue_id: i_id,
    };
    if (assignedTo.length > 0) {
      console.log(payload4);
      AuthenticationService.assignMemberToIssue(payload4)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [assignedTo, proj_id, i_id]);

  const handleDescriptionFocus = () => {
    setSaveVisible(true);
  };

  const handleDescriptionBlur = () => {
    setSaveVisible(false);
  };

  const handleCommentFocus = () => {
    setAddVisible(true);
  };

  const handleCommentBlur = () => {
    setAddVisible(false);
  };
  useEffect(() => {
    if (Role !== "Self") {
      const fetchData = async () => {
        try {
          const response1 = AuthenticationService.projectWiseWorkflow(payload1);
          const response2 =
            AuthenticationService.particularIssueDetails(payload);
          const response3 = AuthenticationService.allComment(payload2);
          const response4 = AuthenticationService.getAllProjectMember(payload1);
          const [data1, data2, data3, data4] = await Promise.all([
            response1,
            response2,
            response3,
            response4,
          ]);

          console.log("data1", data1);
          console.log("data2", data2);
          console.log("data3", data3);
          console.log("data4", data4);
          setWorkflowData(data1.data);

          const work = data2.data.issue_details[0];
          // console.log("Work", work);
          setAllComment(data3.data);
          setIssue(work);
          setType(work.type);
          setCurrentState(work.status);
          setSelectedValue(work.status);
          setDescription(work.Description);
          setTeamData(data4.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }else{
      const fetchData = async () => {
        const payload3 = { project_id: p_id };
        console.log(payload3);
        try {
          const response1 = AuthenticationService.projectWiseWorkflow(payload3);
          const response2 =
            AuthenticationService.particularIssueDetails(payload);
          const response3 = AuthenticationService.allComment(payload2);
          // const response4 = AuthenticationService.getAllProjectMember(payload1);
          const [data1, data2, data3] = await Promise.all([
            response1,
            response2,
            response3
          ]);

          console.log("data1", data1);
          console.log("data2", data2);
          console.log("data3", data3);
          // console.log("data4", data4);
          setWorkflowData(data1.data);

          const work = data2.data.issue_details[0];
          // console.log("Work", work);
          setAllComment(data3.data);
          setIssue(work);
          setType(work.type);
          setCurrentState(work.status);
          setSelectedValue(work.status);
          setDescription(work.Description);
          // setTeamData(data4.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      console.log("Workflow....");

      if (type === "task" && workflowData[0].issue_type === "task") {
        console.log("Task_ID is available in the issue object.");
        setWorkflowString(workflowData[0].workflow);
        const w = workflowData[0].workflow;
        const workflow = JSON.parse(w.replace(/'/g, '"'));
        setWorkflow(workflow);
      } else {
        console.log("Defect available in the issue object.");
        setWorkflowString(workflowData[1].workflow);
        const w = workflowData[1].workflow;
        const workflow = JSON.parse(w.replace(/'/g, '"'));
        setWorkflow(workflow);
      }
    }
  }, [type, workflowData, isLoading]);

  function handlePostComment(event) {
    console.log("object created");
    event.preventDefault();
    var payload = {
      id: i_id,
      user_id: Number(UserID),
      description: comment.current.value,
    };
    console.log("commentttt", payload);
    AuthenticationService.postComment(payload)
      .then((response) => {
        console.log(response.data);
        console.log("addeddddd");
        toast.success("Comment Added Sucessfully!! ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        const newComment = {
          comment_id: response.data.comment_id,
          author_name: response.data.author_name,
          description: payload.description,
          date: new Date().toISOString(),
        };

        // setAllComment(response);

        setAllComment((prevComments) => [newComment, ...prevComments]);
        console.log("Comments", allComment);
        setShowLatestComment(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleMenuToggle = (index) => {
    setAllComment((prevState) =>
      prevState.map((comment, i) => {
        if (i === index) {
          return {
            ...comment,
            showMenu: !comment.showMenu,
          };
        }
        return comment;
      })
    );
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
    console.log("Edit comment:", id);
  };

  const handleDelete = (comment_id) => {
    console.log("Delete");
    AuthenticationService.deleteComment({ comment_id })
      .then((response) => {
        console.log(response.data);
        setAllComment((prevComments) => {
          const updatedComments = prevComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
          return updatedComments;
        });
        // setShowDeletePopup(true);
        toast.success("Comment Deleted Sucessfully!! ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log("ERROR..." + error.data);
      });
  };

  const { previousStates, nextStates } = getAdjacentStates(
    workflow,
    currentState
  );
  const solutions = [...previousStates, ...nextStates, currentState];
  console.log("Solution", solutions);
  console.log("Previous States:", previousStates);
  console.log("Next States:", nextStates);

  console.log("Issue", issue);
  console.log("Type", type);
  console.log("WorkflowData", workflowData);
  console.log("WorkflowString", workflowString);
  console.log("Workflow", workflow);
  console.log("Current State", currentState);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center">
          <SyncLoader color="#1976d2" size={10} />
        </div>
      )}
      <div
        className={`w-[80rem] max-h-[36rem] h-[30rem] gap-4 ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <div className="flex flex-row">
          <div className=" basis-2/3">
            <div className="m-4 ">
              <div className="flex py-2">
                <h1 className="text-slate-500 underline decoration-2 decoration-sky-400">
                  {Role !=="Self" ? (localStorage.getItem("ProjectName")) : (p_name)}
                </h1>
              </div>
              <div>
                <h1 className="text-xl text-black font-semibold">
                  {issue.Title}
                </h1>
              </div>
            </div>
            <div className="overflow-y-auto max-h-84 h-72 scrollbar-thin scrollbar-thumb-slate-200 ">
              <div className="mb-4 mx-4">
                <div className="flex py-2">
                  <h1 className="font-medium">Description</h1>
                </div>
                <div className="max-h-96">
                  <div className="flex align-center  hover:bg-slate-100 focus:bg-transparent rounded-sm">
                    <textarea
                      type="text"
                      className="w-full h-12 focus:h-28 max-h-40 border-none bg-transparent"
                      onFocus={handleDescriptionFocus}
                      onBlur={handleDescriptionBlur}
                      // placeholder={issue.Description}
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    >
                      {description}
                    </textarea>
                  </div>
                  <div className="flex my-2 justify-start gap-2">
                    <>
                      <button
                        className="bg-blue-700 px-3 py-1 hover:bg-blue-600 rounded-sm shadow-md"
                        onClick={handlePostDescription}
                      >
                        <span className="text-white font-semibold">Save</span>
                      </button>

                      <button className="hover:bg-slate-100 px-3 py-1 hover:rounded-sm">
                        <span className="text-black font-semibold">Cancel</span>
                      </button>
                    </>
                  </div>
                </div>
              </div>
              <div className="m-4  max-h-96">
                <div className="flex gap-2 py-3">
                  <div>
                    <h1 className="rounded-md bg-slate-500 px-3 ml-10 py-1 text-white font-semibold">
                      Comments
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      fill="#0052CC"
                      className="bi bi-person-circle my-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="inherit"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    <textarea
                      type="text"
                      className="w-full h-12 focus:h-18 max-h-28 rounded-sm border-solid border-slate-200"
                      placeholder="Add a new Comment"
                      onFocus={handleCommentFocus}
                      onBlur={handleCommentBlur}
                      ref={comment}
                    ></textarea>
                  </div>
                  <div className="mt-2 ml-10">
                    <button
                      className="bg-blue-700 px-3 py-1 hover:bg-blue-600 rounded-sm shadow-md"
                      onClick={handlePostComment}
                    >
                      <span className="text-white font-semibold">Add</span>
                    </button>
                  </div>
                </div>
                <div className=" ml-10 mt-2">
                  {Array.isArray(allComment) &&
                    allComment.map((data, index) => (
                      <article
                        className="p-2 text-base bg-white rounded-lg dark:bg-gray-900"
                        key={index}
                      >
                        <footer className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <p className="inline-flex items-center text-sm text-[#42526E]">
                              <img
                                className="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Michael Gough"
                              />
                              {data.author_name}
                            </p>
                            {/* <p></p> */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                              <time
                                pubdate=""
                                dateTime={data.date}
                                title={data.date}
                              >
                                {new Date(data.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  }
                                )}
                                {/* {data.date} */}
                              </time>
                            </p>
                          </div>
                          {/* Three-dot menu */}
                          {/* <div className="relative inline-block text-left">
                          <button
                            className="focus:outline-none"
                            onClick={() => handleMenuToggle(index)}
                          >
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 9a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z"
                                clipRule="evenodd"
                              />
                              h1
                            </svg>
                          </button>
                          {data.showMenu && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              <ul className="py-1">
                                <li>
                                  <button
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                    onClick={() => handleEdit(data.comment_id)}
                                  >
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700"
                                    onClick={() =>
                                      handleDelete(data.comment_id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div> */}
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                          {data.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <button
                            className="text-[#6B778C] hover:underline hover:text-blue-400"
                            onClick={() => handleEdit(data.comment_id)}
                          >
                            Edit
                          </button>
                          <button
                            className="text-[#6B778C] hover:underline hover:text-blue-400"
                            onClick={() => handleDelete(data.comment_id)}
                          >
                            Delete
                          </button>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="m-4 ">
              <div>
                <Popover className="relative">
                  <Popover.Button
                    onClick={isOpen ? closePopover : openPopover}
                    className="inline-flex items-center hover:bg-slate-200 bg-slate-100 py-2 px-4 rounded-md focus:border-transparent text-sm font-semibold text-gray-900"
                  >
                    <span>{selectedValue}</span>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/4 flex w-64 max-w-max -translate-x-1/2 px-8">
                      <div className="w-screen flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="py-4 px-2">
                          {solutions.map((item) => (
                            <div
                              key={item}
                              className="group relative flex gap-x-6 rounded-r-lg p-2 hover:bg-gray-50 hover:border-l-4 hover:border-l-[#0052CC]"
                              //   style={{
                              //     boxShadow: 'inset 2px 0px 0px #0052CC',
                              //   }}
                              onClick={() => {
                                handleOptionSelect(item);
                                closePopover();
                              }}
                            >
                              <div>
                                <h1 className="font-semibold text-gray-900">
                                  {item}
                                  <span className="absolute inset-0" />
                                </h1>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </div>
              <div className="border-2 border-slate-200 h-72 w-full mt-4 border-solid">
                <div className="flex">
                  <h1 className="p-2 font-medium">Issue Details</h1>
                </div>
                <div className="ml-2 grid grid-rows-4 grid-flow-col  mt-3">
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Assignee
                    </dt>
                    <div className="basis-1/2">
                      <div>
                        <Popover className="relative">
                          <Popover.Button
                            onClick={isOpen1 ? closePopover1 : openPopover1}
                            className="inline-flex items-center hover:bg-slate-200 bg-slate-100 py-2 px-4 rounded-md focus:border-transparent text-sm font-semibold text-gray-900"
                            disabled={Role === "Self"}
                          >
                            <span>{Role !== "Self" ? (assignedTo) : (user_email)}</span>
                            <ChevronDownIcon
                              className="ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                          {Role !== 'Self' && <Transition
                            show={isOpen1}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 flex w-64 max-w-max -translate-x-1/2 px-2">
                              <div className="w-screen flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                <div className="py-4 px-2">
                                  {teamData.map((item) => (
                                    <div
                                      key={item}
                                      className="group relative flex gap-x-6 rounded-r-lg p-2 hover:bg-gray-50 hover:border-l-4 hover:border-l-[#0052CC]"
                                      //   style={{
                                      //     boxShadow: 'inset 2px 0px 0px #0052CC',
                                      //   }}
                                      onClick={() => {
                                        handleOptionSelect1(item);
                                        closePopover1();
                                      }}
                                    >
                                      <div>
                                        <h1 className="font-semibold text-gray-900">
                                          {item}
                                          <span className="absolute inset-0" />
                                        </h1>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>}
                          
                        </Popover>
                      </div>
                      {/* <button className="px-3 py-1 my-1">
                        <span className="text-blue-700">Assign To</span>
                      </button> */}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Priority
                    </dt>
                    <dd className="basis-1/2">{issue.Priority}</dd>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Expected Time
                    </dt>
                    <dd className="basis-1/2">{issue.Estimated_time}</dd>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Severity
                    </dt>
                    <dd className="basis-1/2">{issue.severity}</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
