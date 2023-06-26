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
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function IssueDescription({ i_id, p_id, p_name }) {
  console.log("isueeeee");
  console.log(i_id, p_id, p_name);
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
    component: "",
    component_description: "",
    defect_ed: "",
    defect_id: 0,
    defect_sd: "",
    description: "",
    estimated_time: "",
    file_attachment: null,
    issue_id: 0,
    issue_name: "",
    os: "",
    priority: "",
    product: "",
    severity: "",
    status: "",
    summary: "",
    title: "",
    type: "",
    version: "",
    task_id: 0,
    task_sd: "",
    task_ed: "",
  });
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [currentState, setCurrentState] = useState("");
  const proj_id = Number(localStorage.getItem("ProjectID"));
  const [workflowString, setWorkflowString] = useState("");
  const [workflow, setWorkflow] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [showLatestComment, setShowLatestComment] = useState(false);
  const [assignedTo, setAssignedTo] = useState("");
  const [teamData, setTeamData] = useState([]);
  const [description, setDescription] = useState("Description");
  const Role = localStorage.getItem("Role");
  const user_email = localStorage.getItem("UserEmail");
  console.log("IID", i_id);
  // const id = Number(i_id);
  const payload = { issue_id: i_id };
  console.log(payload);
  const payload2 = { ID: i_id };
  console.log(payload2);
  const demo = 1;
  const payload1 = { Project_ID: proj_id };
  console.log(payload1);
  const payload4 = {
    Email_ID: assignedTo,
    Project_ID: proj_id,
    issue_id: i_id,
  };
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
      const payload = {
        issue_id: issue.issue_id,
        description: description,
      };
      console.log(payload);
      AuthenticationService.updateIssueDescription(payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
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
  }, [selectedValue]);
  useEffect(() => {
    
    if (payload4.Email_ID && assignedTo !== "Unassigned" && assignedTo !== "") {
      console.log(payload4);
      AuthenticationService.assignMemberToIssue(payload4)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [assignedTo]);

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
    let isMounted = true;
  
    if (Role !== "Self") {
      const fetchData = async () => {
        try {
          const response1 = await AuthenticationService.projectWiseWorkflow(payload1);
          const data1 = response1.data;
          console.log("data1", data1);
  
          if (isMounted) {
            setWorkflowData(data1);
          }
  
          const response2 = await AuthenticationService.particularIssueDetails(payload);
          const data2 = response2.data;
          console.log("data2", data2);
          const work = data2.issue_details[0];
  
          if (isMounted) {
            setIssue(work);
            setType(work.type);
            setCurrentState(work.status);
            setSelectedValue(work.status);
            setDescription(work.description);
          }
  
          const response3 = await AuthenticationService.allComment(payload2);
          const data3 = response3.data;
          console.log("data3", data3);
          console.log("data3.......", data3[0].comment_ID);
  
          if (isMounted) {
            setAllComment(data3);
          }
          console.log("aaaaaaaaaa",allComment);
  
          const response4 = await AuthenticationService.getAllProjectMember(payload1);
          const data4 = response4.data;
          console.log("data4", data4);
  
          if (isMounted) {
            setTeamData(data4);
          }
  
          const response5 = await AuthenticationService.issueWiseUser(payload);
          const data5 = response5.data;
          console.log("data5", data5);
  
          if (isMounted) {
            setAssignedTo(data5);
            setIsLoading(false);
          }
        } catch (error) {
          console.error(error);
  
          if (isMounted) {
            setIsLoading(false);
          }
        }
      };
  
      fetchData();
    } else {
      const fetchData = async () => {
        const payload3 = { Project_ID: p_id };
        console.log(payload3);
  
        try {
          const response1 = await AuthenticationService.projectWiseWorkflow(payload3);
          const data1 = response1.data;
          console.log("data1", data1);
  
          if (isMounted) {
            setWorkflowData(data1);
          }
  
          const response2 = await AuthenticationService.particularIssueDetails(payload);
          const data2 = response2.data;
          console.log("data2", data2);
          const work = data2.issue_details[0];
  
          if (isMounted) {
            setIssue(work);
            setType(work.type);
            setCurrentState(work.status);
            setSelectedValue(work.status);
            setDescription(work.description);
          }
  
          const response3 = await AuthenticationService.allComment(payload2);
          const data3 = response3.data;
          console.log("data3", data3);
  
          if (isMounted) {
            setAllComment(data3);
          }
  
          const response5 = await AuthenticationService.issueWiseUser(payload);
          const data5 = response5.data;
          console.log("data5", data5);
  
          if (isMounted) {
            setAssignedTo(data5.email_id);
            setIsLoading(false);
          }
        } catch (error) {
          console.error(error);
  
          if (isMounted) {
            setIsLoading(false);
          }
        }
      };
  
      fetchData();
    }
  
    return () => {
      isMounted = false;
    };
  }, []);
  console.log("1233333",allComment);
  
  useEffect(() => {
    if (!isLoading && workflowData.length > 0) {
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
      ID: i_id,
      user_ID: Number(UserID),
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
    console.log("Deleted.....",comment_id);
    const payload = { comment_ID : comment_id }
    console.log(payload);
    AuthenticationService.deleteComment(payload)
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
  
  const handleUpdateIssue = () => {
    localStorage.setItem("IID",i_id);
    if(type === "task"){
      navigate('/updateTask')
    }else{
      navigate('/updateDefect')
    }
    console.log("Handle Update Issue");
  };
  const handleDeleteIssue = () => {
    const issueDelete = window.confirm("ARe u sure you want to delete ?");
    console.log(issueDelete);
    if(issueDelete){
      AuthenticationService.deleteIssue(payload)
      .then((response) => {
        console.log(response.data);
        // navigate("/allIssues");
        window.location.reload();
        toast.success("Issue Deleted Sucessfully!! ", {
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
        console.error(error);
      })
  }
    console.log("Handle Delete Issue");
  };
  const { previousStates, nextStates } = getAdjacentStates(
    workflow,
    currentState
  );
  const solutions = [...previousStates, ...nextStates, currentState];
  // console.log("Solution", solutions);
  // console.log("Previous States:", previousStates);
  // console.log("Next States:", nextStates);

  console.log("Issue", issue);
  // console.log("Type", type);
  // console.log("WorkflowData", workflowData);
  // console.log("WorkflowString", workflowString);
  // console.log("Workflow", workflow);
  // console.log("Current State", currentState);

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
              {p_id ? (
                <Link to={`/projectexplore/${Number(p_id)}`}>
                <div className="flex py-2">
                  <h1 className="text-slate-500 underline decoration-2 decoration-sky-400">
                    {Role !== "Self"
                      ? localStorage.getItem("ProjectName")
                      : p_name}
                  </h1>
                </div>
                </Link>
              ) :
              (
                <Link to={`/projectexplore/${proj_id}`}>
                <div className="flex py-2">
                  <h1 className="text-slate-500 underline decoration-2 decoration-sky-400">
                    {Role !== "Self"
                      ? localStorage.getItem("ProjectName")
                      : p_name}
                  </h1>
                </div>
                </Link>
              )}
              
              <div>
                <h1 className="text-xl text-black font-semibold">
                  {issue.title}
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
                            onClick={() =>handleDelete(data.comment_ID)}
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
              <div className="border-2 border-slate-200 h-full w-full mt-4 border-solid">
                <div className="flex">
                  <h1 className="p-2 font-medium">Issue Details</h1>
                </div>
                <div className="ml-2 grid grid-rows-5 grid-flow-col  mt-3">
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
                            <span>
                              {Role !== "Self" ? assignedTo : user_email}
                            </span>
                            <ChevronDownIcon
                              className="ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                          {Role !== "Self" && (
                            <Transition
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
                            </Transition>
                          )}
                        </Popover>
                      </div>
                      {/* <button className="px-3 py-1 my-1">
                        <span className="text-blue-700">Assign To</span>
                      </button> */}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Type
                    </dt>
                    <dd className="basis-1/2">{issue.type}</dd>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Priority
                    </dt>
                    <dd className="basis-1/2">{issue.priority}</dd>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 basis-1/2">
                      Expected Time
                    </dt>
                    <dd className="basis-1/2">{issue.estimated_time}</dd>
                  </div>
                  {issue.type === "defect" && (
                    <div className="flex flex-row">
                      <dt className="text-sm font-medium text-gray-900 basis-1/2">
                        Severity
                      </dt>
                      <dd className="basis-1/2">{issue.severity}</dd>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="flex mt-2">
                  {issue.defect_sd ? 
                  <h6 className="text-[#6B778C] text-xs">
                    Created{" "}
                    {new Date(issue.defect_sd).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      weekday: "short",
                    })}
                  </h6>  :
                  <h6 className="text-[#6B778C] text-xs">
                    Created{" "}
                    {new Date(issue.task_sd).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      weekday: "short",
                    })}
                  </h6>
}
                </div>
                <div className="flex ml-auto mt-2 items-center space-x-1">
                <button className="flex space-x-1  items-center hover:underline decoration-[#6B778C] decoration-2" onClick={handleUpdateIssue}>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#6B778C"
                      className="bi bi-gear-wide"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                    </svg>
                  </div>
                  <div className="flex">
                   
                    <span className="text-[#6B778C] text-sm my-auto text-center font-semibold">
                      Configure
                    </span>
                    
                  </div>
                  </button>
                </div>
                
              </div>
              <div className="flex mt-4">
                <div className="flex mx-auto mt-2 items-center space-x-1">
                  <button
                    className="flex space-x-1  hover:text-white items-center rounded-md hover:bg-slate-100 px-32 py-2 decoration-2"
                    onClick={handleDeleteIssue}
                  >
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span className="text-[#6B778C] text-sm my-auto text-center font-semibold">
                        Delete Issue
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}