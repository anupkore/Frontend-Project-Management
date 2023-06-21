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
import { TrashIcon } from "@heroicons/react/24/outline";

export  const ProjectExplore = () => {
  const maxWidth = "md";

  const { id1 } = useParams();
  const ProjectData = projects1.find((proj) => proj.id === Number(id1));
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState([]);
  const Project_ID = id1;
  localStorage.setItem("ProjectID", Project_ID);
  const payload = { Project_ID: Number(localStorage.getItem("ProjectID")) };
  const [projectData, setProjectData] = useState([]);
  const [projectID, setProjectID] = useState();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthenticationService.projectExplore(payload);
        if (response && response.data) {
          setProjectDetails((existingData) => {
            setProjectData(response.data);
            setIsLoading(false);
          });
          if (response.status !== 200) {
            console.log('Bad Request Error:', response.data);
          }
        }
      } catch (error) {
        console.error('Error:', error.message);
        if (error.response && error.response.status !== 200) {
          console.log('Bad Request Error:', error.response.data);
        } else if (error.message === 'Network Error') {
          toast.error('CORS Error: Unable to make a request due to CORS restrictions.');
        } else {
          toast.error(`Error: ${error.message}`);
        }
      }
    };

    fetchData();
  }, []);

  const handleUpdateProject = (updatedData) => {
    console.log(updatedData);
    AuthenticationService.updateProject(updatedData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  function handleDeleteProject() {
    const confirmDelete = window.confirm("Are you sure you want to delete this Project?");
    if (confirmDelete) {
      AuthenticationService.deleteProject(payload)
        .then((response) => {
          console.log(response.data);
          navigate("/allProjects");
        })
        .catch((error) => {
          console.log(error.response.data);
          toast.error("Internal Server Error");
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
    
    if (isLoading) {
    return (
    <div className="flex justify-center items-center h-screen">
    <HashLoader color={"#1a202c"} />
    </div>
    );
    }
    
    if (!ProjectData) {
    return <Navigate to="/404" />;
    }
    
    return (
    <div className="flex">
    <SideBar />
    <div className="w-full pl-0 md:pl-64">
    <div className="min-h-screen bg-gray-100 p-8">
    <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">{projectData.title}</h1>
    <div className="flex space-x-2">
    <button
                 onClick={handleShowUpdateForm}
                 className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
               >
    <PaperClipIcon className="w-5 h-5" />
    <span>Update</span>
    </button>
    <button
                 onClick={handleShowDeleteConfirmation}
                 className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
               >
    <TrashIcon className="w-5 h-5" />
    <span>Delete</span>
    </button>
    </div>
    </div>
    <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h2 className="text-xl font-bold mb-4">Project Details</h2>
    <p className="text-gray-600 mb-2">
    <span className="font-bold">ID:</span> {projectData.id}
    </p>
    <p className="text-gray-600 mb-2">
    <span className="font-bold">Description:</span> {projectData.description}
    </p>
    </div>
    <Comments />
    </div>
    </div>
    {showModal && (
    <Modal onClose={handleCloseUpdateForm}>
    <UpdateProjectForm
             projectData={projectData}
             onUpdateProject={handleUpdateProject}
           />
    </Modal>
    )}
    {showDeleteConfirmation && (
    <FormDialog
           title="Delete Project"
           description="Are you sure you want to delete this Project?"
           onClose={handleCloseDeleteConfirmation}
           onSubmit={handleDeleteProject}
         />
    )}
    </div>
    );
    };
    
    // export default ProjectExplore;
