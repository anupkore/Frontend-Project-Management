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

function DemoProjectExplore()
{
    
    const maxWidth = "md";

    const { id1 } = useParams();
    const ProjectData = projects1.find((proj) => proj.id === Number(id1));
    const [showModal, setShowModal] = useState(false);
    const [projectDetails, setProjectDetails] = useState([]);
    const Project_ID = id1;
    localStorage.setItem("ProjectID", Project_ID);
    const payload = { Project_ID: Number(localStorage.getItem("ProjectID"))};
    const [projectData, setProjectData] = useState([]);
    // const [projectID, setProjectID] = useState();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const payload1 = 
        {
            id: Number(localStorage.getItem("ProjectID")),
        };
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

  // useEffect(() => {
  //   AuthenticationService.projectExplore(payload);
  //   const response = await  AuthenticationService.status_display(payload);
  // }, []);

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
  const [statusAlreadyExists, setStatusAlreadyExists] = useState(true);

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
    if (statusValue === "" || statusValue === "200" || statusAlreadyExists) {
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
   
  //   const fetchData = async () => {
  //     try {
        
  //       if (response && response.data) {
  //         console.log("statusData...", response.data[0]);
  //         setStatusValue((prevStatusValue) => {
  //           if (response.data[0]) {
  //             setStatusAlreadyExists(true);
  //             return response.data[0];
  //           } else {
  //             setStatusAlreadyExists(false);
  //             return prevStatusValue;
  //           }
  //         });
  //         // Check for specific error codes in the response
  //         if (response.status !== 200) {
  //           // Handle 400 error code
  //           console.log('Bad Request Error12233:', response.data);
  //           // toast.error("Internal Server Error");
  //         }
  //         // Add more conditionals for other error codes if needed
  //       }
  //     } catch (error) {
  //       setMyError(error.message);
  //       setIsFetching(true);
  //       setIsLoading(false);
  //       console.error('Error:', myError); // Display the error message in the console
        
  
  //       // Check for specific error codes in the error object
  //       if (error.response && error.response.status !== 200) {
  //         // Handle 400 error code
  //         console.log('Bad Request Error:', error.response.data);
  //         // toast.error('Bad Request Error:.');
  //       } else {
  //         // Handle other errors
  //         toast.error(`Error...: ${error.message}`);
  //       }
  //       // Add more conditionals for other error codes if needed
  //     }
  //   };
  
  //    // Call the fetchData function
  //   console.log("yjb....");
  //   // Cleanup function to clear any existing toasts
  // return () => {
  //   toast.dismiss();
  //   fetchData();
  //   toast.dismiss();
  // };
  
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = AuthenticationService.projectExplore(payload);
        const response2 = AuthenticationService.status_display(payload1);
        const [data1, data2] = await Promise.all([
          response1,
          response2
        ]);

        console.log("data1", data1);
        console.log("data22222", data2.data[0]);
        setProjectData(data1.data);
        setStatusValue(data2.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoading]);
    
    
    
    
    return(
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
                <div className="w-1/6">
                    <SideBar></SideBar>
                </div>
            
            
            <div className="w-5/6">
            <div className="flex">                    
                    <div className="flex justify-content-center w-1/3 h-1/2">
                        <div className="flex justify-content-center">
                            <div className="border shadow-md w-100">
                                <div className="mt-3">
                                    <h2 className="text-center m-4 font-bold">Important Dates</h2>
                                </div>

                                <hr></hr>

                                <div className="mt-3 m-2">
                                    <div className="flex">
                                        <h3 className="m-3 font-bold">Planned Start Date</h3>
                                        <h3 className="m-3">
                                        {new Date(projectData.planned_sd).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit"
                                            })
                                        }
                                        </h3>
                                    </div>
                                    <div className="flex">
                                        <h3 className="m-3 font-bold">Planned End Date</h3>
                                        <h3 className="mt-3 ml-5">
                                        {new Date(projectData.planned_ed).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit"
                                            })
                                        }
                                        </h3>
                                    </div>
                                    <div className="flex">
                                        <h3 className="m-3 font-bold">Actual Start Date</h3>
                                        <h3 className="mt-3 ml-7">
                                        {new Date(projectData.Actual_sd).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit"
                                            })
                                        }
                                        </h3>
                                    </div>
                                    <div className="flex">
                                        <h3 className="m-3 font-bold">Actual End Date</h3>
                                        <h3 className="mt-3 ml-8">
                                        {new Date(projectData.Actual_ed).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit"
                                            })
                                        }
                                        </h3>
                                    </div>
                                    
                                
                                </div>
                                <div className="py-2 max-w-2xl mx-auto px-4">
                                    <dt className="flex justify-between items-center mb-4">Status</dt>
                                    
                                    <dd className="py-2 px-4 mb-2 mt-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                        <textarea
                                        id="status"
                                        rows={4}
                                        className="px-0 w-full text-sm text-black border-0 focus:ring-0 focus:outline-none w-72"
                                        placeholder="Write a comment..."
                                        required=""
                                        value={statusValue}
                                        onChange={handleStatusChange}
                                        onBlur={handleSubmit1}
                                        />
                                    </dd>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                        <div className="flex justify-content-start w-2/3 h-1/2">
                                <div className="border shadow-md w-full mr-3 ">
                                    <div className="mt-3">
                                        <h2 className="text-center m-4 font-bold">Project Title : {projectData.Project_name}</h2>
                                    </div>

                                    <hr></hr>

                                    <div className="flex ml-3 mt-5 text-center">
                                        <div className="w-1/3">
                                            <h3 className="font-bold">Client Name</h3>
                                            <h3 className="mt-3">{projectData.client_name}</h3>
                                        </div>
                                        <div className="w-1/3">
                                            <h3 className="font-bold">Lead Name</h3>
                                            <h3 className="mt-3">{projectData.project_lead}</h3>
                                        </div>
                                        <div className="w-1/3">
                                            <h3 className="font-bold">State</h3>
                                            <h3 className="mt-3">{projectData.Status}</h3>
                                        </div>
                                    </div>

                                    <div className="flex ml-3 mt-5 text-center mb-5">
                                        <div className="w-1/3">
                                            <h3 className="font-bold">Risks</h3>
                                            <h3 className="mt-3">{projectData.risk}</h3>
                                        </div>
                                        <div className="w-1/3">
                                            <h3 className="font-bold">Mitigations</h3>
                                            <h3 className="mt-3">{projectData.mitigation}</h3>
                                        </div>
                                        <div className="w-1/3">
                                            <h3 className="font-bold">Description</h3>
                                            <h3 className="mt-3">{projectData.description}</h3>
                                        </div>
                                    </div>

                                    <div className="flex mt-5 text-center mb-3">
                                        <div className="flex mx-auto">
                                        <FormDialog
                                            prop={<UpdateProjectForm onSubmit={handleUpdateProject}  projectData={projectData}/>}
                                            style={maxWidth}
                                            buttonTitle={"Update"}
                                            ic={"false"}
                                        >                   
                                        </FormDialog>

                                        <button className="btn btn-danger ml-5" onClick={handleDeleteProject}>Delete</button>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                        
                        <div className="m-0">
                                <div>
                                    <Comments id={projectData.Project_ID}></Comments>
                                </div>

                        </div>
                </div>
            </div>

            </>
            )}
        </>
    );
}

export default DemoProjectExplore;