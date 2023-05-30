import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import FormDialog from "./Dialog";


const projects = [
  {
    id: 1,
    leadName: "John Doe",
    clientName: "Client 1",
    projectTitle: "Project 1",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
    actualStartDate: "2023-05-01",
    actualEndDate: "2023-06-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    projectStatus: "In Progress",
    assignedTo: [
      {
        name: "John Doe",
        email: "john@example.com",
        role: "Developer",
      },
    ],
    comments: [
      {
        author: "Alice",
        text: "Great work so far!",
      },
      {
        author: "Bob",
        text: "Keep it up!",
      },
    ],
    attachments: ["file1.pdf", "file2.doc"],
  },
  {
    id: 2,
    leadName: "Jane Smith",
    clientName: "Client 2",
    projectTitle: "Project 2",
    startDate: "2023-07-01",
    endDate: "2023-08-01",
    actualStartDate: "2023-07-01",
    actualEndDate: "2023-08-01",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    projectStatus: "Completed",
    assignedTo: [
      {
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Designer",
      },
    ],
    comments: [
      {
        author: "Eve",
        text: "Congratulations on completing the project!",
      },
      {
        author: "Bob",
        text: "Well done!",
      },
    ],
    attachments: ["file3.pdf", "file4.doc"],
  },
  {
    id: 3,
    leadName: "Mark Johnson",
    clientName: "Client 3",
    projectTitle: "Project 3",
    startDate: "2023-06-15",
    endDate: "2023-07-31",
    actualStartDate: "2023-06-15",
    actualEndDate: "2023-07-31",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectStatus: "In Progress",
    assignedTo: [
      {
        name: "Mark Johnson",
        email: "mark@example.com",
        role: "Project Manager",
      },
    ],
    comments: [
      {
        author: "Carol",
        text: "Looking forward to the progress!",
      },
      {
        author: "David",
        text: "Keep up the good work!",
      },
    ],
    attachments: ["file5.pdf", "file6.doc"],
  },
  {
    id: 4,
    leadName: "Sarah Brown",
    clientName: "Client 4",
    projectTitle: "Project 4",
    startDate: "2023-09-01",
    endDate: "2023-10-15",
    actualStartDate: "2023-09-01",
    actualEndDate: "2023-10-15",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    projectStatus: "In Progress",
    assignedTo: [
      {
        name: "Sarah Brown",
        email: "sarah@example.com",
        role: "Developer",
      },
    ],
    comments: [
      {
        author: "Emily",
        text: "Excited about this project!",
      },
      {
        author: "George",
        text: "Let's do our best!",
      },
    ],
    attachments: ["file7.pdf", "file8.doc"],
  },
  {
    id: 5,
    leadName: "Michael Davis",
    clientName: "Client 5",
    projectTitle: "Project 5",
    startDate: "2023-08-01",
    endDate: "2023-09-30",
    actualStartDate: "2023-08-01",
    actualEndDate: "2023-09-30",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectStatus: "In Progress",
    assignedTo: [
      {
        name: "Michael Davis",
        email: "michael@example.com",
        role: "Designer",
      },
    ],
    comments: [
      {
        author: "Olivia",
        text: "Let's make it amazing!",
      },
      {
        author: "Sophia",
        text: "Looking forward to the final outcome!",
      },
    ],
    attachments: ["file9.pdf", "file10.doc"],
  },
  {
    id: 6,
    leadName: "Robert Wilson",
    clientName: "Client 6",
    projectTitle: "Project 6",
    startDate: "2023-08-15",
    endDate: "2023-10-31",
    actualStartDate: "2023-08-15",
    actualEndDate: "2023-10-31",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    projectStatus: "In Progress",
    assignedTo: [
      {
        name: "Robert Wilson",
        email: "robert@example.com",
        role: "Project Manager",
      },
    ],
    comments: [
      {
        author: "Liam",
        text: "Good luck with the project!",
      },
      {
        author: "Emma",
        text: "We're here to support you!",
      },
    ],
    attachments: ["file11.pdf", "file12.doc"],
  },
  // Additional project objects...
];

  

export const ProjectExplore = () => {
  const maxWidth = 'md';
  const { id1 } = useParams();
  const ProjectData = projects.find((proj) => proj.id === Number(id1));
  const [showModal, setShowModal] = useState(false);

  // const handleDelete = () => {
  //   // Perform delete operation or call the onDelete prop
  //   // to handle the deletion in parent component
  //   // onDelete();
  //   setShowModal(false);
  // };

  return (


    <>
      <div className="flex">
        <div className="">
          <SideBar p_id={id1}></SideBar>
        </div>
        <div className="border-solid rounded-md border-2 mx-auto">
        
          <div className=" border-gray-100">
            <div className={`sm:px-0 mt-4`}>
              <h3 className="text-base font-bold text-center leading-7 text-gray-900 mb-3">
              Project Details
              </h3>
              <p className="mt-1 text-base font-bold text-center leading-7 text-gray-500 mb-2">
                {ProjectData.projectTitle}
              </p>
            </div>
            <div className="flex flex-row divide-x">
              <div className="basis-3/6">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Planned Start Date 
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {ProjectData.startDate}
                    </dd>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.name}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Planned End Date 
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {ProjectData.startDate}
                    </dd>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.type}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Actual Start Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {ProjectData.actualStartDate}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Actual End Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.actualEndDate}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Lead Name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.leadName}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Client Name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.clientName}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="basis-3/5">
                <dl className="divide-gray-100">
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.description}
                    </dd>
                  </div>

                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.projectStatus}
                    </dd>
                  </div>

                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Risks
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.description}
                    </dd>
                  </div>

                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Mitigations
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.description}
                    </dd>
                  </div>

                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Comments
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.comments.map((comment) => (
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm">
                          {" "}
                          <div className="ml-2 flex min-w-0 flex-1 ">
                            <span className="truncate font-medium">
                              {comment.author} :
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              {comment.text}
                            </span>
                          </div>
                        </li>
                      ))}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Attachments
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul
                        role="list"
                        className="divide-y divide-gray-100 rounded-md border border-gray-200"
                      >
                        {ProjectData.attachments.map((attachments) => (
                          <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                              <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">
                                  {attachments}
                                </span>
                                {/* <span className="flex-shrink-0 text-gray-400">
                            2.4mb
                          </span> */}
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">

                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

            <div className="mt-3 align-self-center mb-5 d-flex justify-content-center">
            <FormDialog prop={<UpdateProjectForm></UpdateProjectForm>} style={maxWidth} buttonTitle={"Update"}></FormDialog>
              <button className="btn btn-danger ml-3" onClick={()=>setShowModal(true)}>Delete</button>
            </div>
          
        </div>
       
    </div>

      
    </>
  );
};
