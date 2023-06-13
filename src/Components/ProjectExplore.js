import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import FormDialog from "./Dialog";
import Comments from "./Comments";
import { projects1 } from "./TEST/Projects";
import AuthenticationService from "../Services/AuthenticationService";

export const ProjectExplore = () => {
  const maxWidth = "md";
  const { id1 } = useParams();
  const ProjectData = projects1.find((proj) => proj.id === Number(id1));
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState([]);
  const project_id = id1;
  localStorage.setItem("ProjectID", project_id);
  const payload = { project_id: project_id };
  const [projectData, setProjectData] = useState([]);
  const [projectID, setProjectID] = useState();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    AuthenticationService.projectExplore(payload)
      .then((response) => {
        setProjectDetails((existingData) => {
          console.log(response.data);
          setProjectData(response.data);
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleUpdateProject = (updatedData) => {
    // Make an API call to update the project with the updatedData
    AuthenticationService.updateProject(updatedData)
      .then((response) => {
        // Handle the success response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response
        console.log(error.response.data);
      });
  };

 
  function handleDeleteProject(project_id) {
    payload={project_id:project_id}
    // Display confirmation box
    const confirmDelete = window.confirm("Are you sure you want to delete this Project?");
  
    if (confirmDelete) {
      // Perform the delete operation using the userId parameter
      console.log(`Deleting user with ID: ${project_id}`);
       // Make an API call to delete the project
    AuthenticationService.deleteProject(payload)
    .then((response) => {
      // Handle the success response
      console.log(response.data);
      // Redirect the user to the project list or perform any necessary actions
      Navigate("/allProjects");
    })
    .catch((error) => {
      // Handle the error response
      console.log(error.response.data);
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

  return (
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
            <p className="mt-1 text-base font-bold text-center leading-7 text-blue-800 mb-4">
              {projectData.Project_name}
            </p>
          </div>
          <div></div>
          <div className="mx-10">
            <div className="grid grid-rows-4 grid-cols-3 gap-4 ">
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Planned Start Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.planned_sd}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Planned End Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.planned_ed}
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
                  {projectData.Actual_sd}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Actual End Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.Actual_ed}
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
                  Status
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
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {projectData.description}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className=" text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className=" divide-gray-100 rounded-md border border-gray-200"
                  >
                    {/* {ProjectData.attachments.map((attachments) => (
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
          ))} */}
                  </ul>
                </dd>
              </div>
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
             
              onClick={() => handleDeleteProject(projectData.Project_id)}
            >
              Delete 
            </button>
          </div>
          <div>
            <Comments></Comments>
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
  );
};
