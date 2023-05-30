import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import FormDialog from "./Dialog";
import Comments from "./Comments";
import { projects1 } from "./TEST/Projects";

export const ProjectExplore = () => {
  const maxWidth = 'md';
  const { id1 } = useParams();
  const ProjectData = projects1.find((proj) => proj.id === Number(id1));
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
          <div>
            <Comments></Comments>
          </div>
        </div>
          
    </div>

      
    </>
  );
};
