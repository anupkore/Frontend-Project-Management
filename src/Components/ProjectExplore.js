import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import FormDialog from "./Dialog";
import Comments from "./Comments";
import { projects1 } from "./TEST/Projects";
import AuthenticationService from "../Services/AuthenticationService";
import CreateWorkflow from "./CreateWorkflow";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

export const ProjectExplore = () => {
  const maxWidth = "md";

  const { id1 } = useParams();
  const ProjectData = projects1.find((proj) => proj.id === Number(id1));
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState([]);
  const Project_ID = id1;
  localStorage.setItem("ProjectID", Project_ID);
  const payload = { Project_ID: Number(localStorage.getItem("ProjectID"))};
  const [projectData, setProjectData] = useState([]);
  const [projectID, setProjectID] = useState();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate  = useNavigate();

  // useEffect(() => {
  //   console.log(payload);
  //   AuthenticationService.projectExplore(payload)
  //     .then((response) => {
  //       setProjectDetails((existingData) => {
  //         console.log(response.data);
  //         setProjectData(response.data);
  //         setIsLoading(false);
  //         console.log("projectData", projectData);
  //         // console.log(allProjectData.Project_name);
  //         // setProjectID(allProjectData.Project_ID);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       toast.error("Internal Server Error")
  //       setIsLoading(false);
  //     });
  // }, []);
           
  const [isFetching, setIsFetching] = useState(true);
  const [myError, setMyError] = useState('');

  useEffect(() => {
      
    const fetchData = async () => {
      console.log("12345555");
      try {
        const response = await AuthenticationService.projectExplore(payload);
        if (response && response.data) {
          setProjectDetails((existingData) => {
            console.log("projectdata",response.data);
            setProjectData(response.data);
            setIsLoading(false);
            console.log("projectData", projectData);
          console.log('Status code:', response.status); // Display the status code in the console
          // toast.error("No Internal Server Error"); 
          })
          // Check for specific error codes in the response
          if (response.status !== 200) {
            // Handle 400 error code
            console.log('Bad Request Error12233:', response.data);
            // toast.error("Internal Server Error");
          }
          // Add more conditionals for other error codes if needed
        }
      } catch (error) {
        setMyError(error.message);
        setIsFetching(true);
        setIsLoading(false);
        console.error('Error:', myError); // Display the error message in the console
        
  
        // Check for specific error codes in the error object
        if (error.response && error.response.status !== 200) {
          // Handle 400 error code
          console.log('Bad Request Error:', error.response.data);
          // toast.error('Bad Request Error:.');
        } else if (error.message === 'Network Error') {
          // Handle CORS error

          toast.error('CORS Error: Unable to make a request due to CORS restrictions.');
        } else {
          // Handle other errors
          toast.error(`Error...: ${error.message}`);
        }
        // Add more conditionals for other error codes if needed
      }
    };
  
     // Call the fetchData function
    console.log("yjb....");
    // Cleanup function to clear any existing toasts
  return () => {
    toast.dismiss();
    fetchData();
    toast.dismiss();
  };
  
  }, []);

  const ProjectName = projectData.Project_name;
  localStorage.setItem("ProjectName",ProjectName)

  const handleUpdateProject = (updatedData) => {
    // Make an API call to update the project with the updatedData
    console.log(updatedData);
    AuthenticationService.updateProject(updatedData)
      .then((response) => {
        // Handle the success response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response
        console.log(error.response.data);
        // toast.error("Internal Server Error")
      });
  };

 
  function handleDeleteProject() {
    // payload={Project_ID:Project_ID}
    // Display confirmation box
    const confirmDelete = window.confirm("Are you sure you want to delete this Project?");
    console.log("deleteing...",payload);
  
    if (confirmDelete) {
      // Perform the delete operation using the userId parameter
      console.log(`Deleting user with ID: ${Project_ID}`);
       // Make an API call to delete the project
    AuthenticationService.deleteProject(payload)
    .then((response) => {
      // Handle the success response
      console.log(response.data);
      // Redirect the user to the project list or perform any necessary actions
      navigate("/allProjects");
    })
    .catch((error) => {
      // Handle the error response
      console.log(error.response.data);
      toast.error("Internal Server Error")
    });
    }
  }
  
  const handleShowDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
  };

  const handleShowUpdateForm = () => {
    setShowModal(true);
  };

  const handleCloseUpdateForm = () => {
    setShowModal(false);
  };

  const [statusValue, setStatusValue] = useState("");
  const [statusAlreadyExists, setStatusAlreadyExists] = useState(false);

  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };
  
  
  const handleSubmit1 = () => {
    const payload = {
      id: Number(localStorage.getItem("ProjectID")),
      status: statusValue
    };
    console.log(payload);
    // Check if the status already exists
    if (statusValue === "" || statusAlreadyExists) {
      AuthenticationService.update_status(payload)
        .then((response) => {
          console.log("upate status addddd",response.data);
          // Handle the success response
          setStatusValue(response.data[0]);
        })
        .catch((error) => {
          console.log(error.response.data);
          // Handle the error response
        });
    } else {
      AuthenticationService.addStatus(payload)
        .then((response) => {
          console.log("new status addddd",response.data);
          setStatusAlreadyExists(true);
          setStatusValue(response.data[0]);
          // Handle the success response
        })
        .catch((error) => {
          console.log(error.response.data);
          // Handle the error response
        });
    }
    toast.dismiss();
  };
  
  

  // useEffect(() => {
  //   console.log("Displaying status...");
  //   const payload = {
  //     id: Number(localStorage.getItem("ProjectID")),
  //   };
  //   AuthenticationService.status_display(payload)
  //     .then((response) => {
  //       console.log("statusData...", response.data[0]);
  //       setStatusValue((prevStatusValue) => {
  //         if (response.data[0]) {
  //           setStatusAlreadyExists(true);
  //           return response.data[0];
  //         } else {
  //           setStatusAlreadyExists(false);
  //           return prevStatusValue;
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }, []);
  
  useEffect(() => {
    console.log("Displaying status...");
    const payload = {
      id: Number(localStorage.getItem("ProjectID")),
    };
   
    const fetchData = async () => {
      try {
        const response = await  AuthenticationService.status_display(payload)
        if (response && response.data) {
          console.log("statusData...", response.data[0]);
          setStatusValue((prevStatusValue) => {
            if (response.data[0]) {
              setStatusAlreadyExists(true);
              return response.data[0];
            } else {
              setStatusAlreadyExists(false);
              return prevStatusValue;
            }
          });
          // Check for specific error codes in the response
          if (response.status !== 200) {
            // Handle 400 error code
            console.log('Bad Request Error12233:', response.data);
            // toast.error("Internal Server Error");
          }
          // Add more conditionals for other error codes if needed
        }
      } catch (error) {
        setMyError(error.message);
        setIsFetching(true);
        setIsLoading(false);
        console.error('Error:', myError); // Display the error message in the console
        
  
        // Check for specific error codes in the error object
        if (error.response && error.response.status !== 200) {
          // Handle 400 error code
          console.log('Bad Request Error:', error.response.data);
          // toast.error('Bad Request Error:.');
        } else {
          // Handle other errors
          toast.error(`Error...: ${error.message}`);
        }
        // Add more conditionals for other error codes if needed
      }
    };
  
     // Call the fetchData function
    console.log("yjb....");
    // Cleanup function to clear any existing toasts
  return () => {
    toast.dismiss();
    fetchData();
    toast.dismiss();
  };
  
  }, []);

  return (
    <>
    {isLoading ?(
      <div className="flex justify-center">
          <HashLoader
            color="#1976d2"
            style={{ marginTop: "10%" }}
            size={100}
            speedMultiplier={1}
          />
          {/* <PacmanLoader color="#1976d2" size={50}/>   */}
        </div>
    ):(
    <>
      <div className="flex">
        <div className="">
          <SideBar p_id={id1}></SideBar>
        </div>
        <div className="mx-auto">
          <div className={`sm:px-0 mt-2`}>
            <h3 className="text-base mx-auto font-bold text-center leading-7 text-gray-900 mb-3">
              Project Details
            </h3>
            <p className="my-2 py-4 font-bold text-center leading-7 text-3xl text-blue-800">
              {projectData.Project_name}
            </p>
          </div>
          <div className="mx-auto">
            <div className="grid grid-rows-3 grid-cols-3 gap-12 ">
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Planned Start Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/* {projectData.planned_sd} */}

                  {new Date(projectData.planned_sd).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                  })}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Planned End Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/* {projectData.planned_ed} */}
                  {new Date(projectData.planned_ed).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                  })}
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/* {ProjectData.type} */}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Actual Start Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/* {projectData.Actual_sd} */}
                  {new Date(projectData.Actual_sd).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                  })}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Actual End Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/* {projectData.Actual_ed} */}
                  {new Date(projectData.Actual_ed).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                  })}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Lead Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.project_lead}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Client Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.client_name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Mitigations
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.mitigation}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  State
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.Status}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Risks
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.risk}
                </dd>
              </div>
          </div>

              <div className="grid grid-rows-1 mt-5 grid-cols-2">
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.description}
                </dd>

                
              </div>
              <div>
        <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <textarea
          id="status"
          rows={3}
          className="px-2 w-full text-sm text-black border-0 focus:ring-1 "
          required
          value={statusValue}
          onChange={handleStatusChange}
          onBlur={handleSubmit1}
        />
      </dd>
        </dd>
      </div>
              {/* <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className=" text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className=" divide-gray-100 rounded-md border border-gray-200"
                  >
                    {ProjectData.attachments.map((attachments) => (
            <li className="flex items-center justify-between text-sm leading-6">
              <div className="flex h-10 items-center">
                <PaperClipIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">{attachments}</span>
                </div>
              </div>
            </li>
          ))}
                  </ul>
                </dd>
              </div> */}
            </div>
          </div>

          <div className="mt-5 mb-5 flex justify-center align-items-center">
          <FormDialog
              prop={<UpdateProjectForm onSubmit={handleUpdateProject}  projectData={projectData}/>}
              style={maxWidth}
              buttonTitle={"Update"}
              ic={"false"}
              icon={"/Images/arrow-repeat.svg"}
            ></FormDialog>
            <button
              className="btn btn-danger ml-3"
             
              onClick={handleDeleteProject}
            >
              DELETE
            </button>
          </div>

          <div>
            <Comments id={projectData.Project_ID} ></Comments>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirmation && (
        <Modal onClose={handleCloseDeleteConfirmation}>
          <div className="p-5">
            <h2 className="text-lg font-bold mb-3">Delete Project</h2>
            <p>Are you sure you want to delete this project?</p>
            <div className="mt-5 flex justify-end">
              <button className="btn btn-primary" onClick={handleDeleteProject}>
                Confirm Delete
              </button>
              <button
                className="btn btn-secondary ml-3"
                onClick={handleCloseDeleteConfirmation}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Update Form Modal */}
      {showModal && (
        <Modal onClose={handleCloseUpdateForm}>
          <div className="p-5">
            <h2 className="text-lg font-bold mb-3">Update Project</h2>
            <UpdateProjectForm
              onSubmit={handleUpdateProject}
              initialValues={projectData}
            />
          </div>
        </Modal>
      )}
    </>
    )}
    </>
  );
};