import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import FormDialog from "./Dialog";
import Comments from "./Comments";
import { projects1 } from "./TEST/Projects";
import AuthenticationService from "../Services/AuthenticationService";


export const ProjectExplore = () => 
{
  const maxWidth = 'md';
  const { id1 } = useParams();
  const ProjectData = projects1.find((proj) => proj.id === Number(id1));
  const [showModal, setShowModal] = useState(false);

  const [projectDetails , setProjectDetails] = useState([]);

        useEffect(()=>{
            
            AuthenticationService.projectExplore().then((response)=>{
                  setProjectDetails((existingData)=>{
                    return response.data;
                  });
            });

        },[]);

  return (


    <>
      <div className="flex">
        <div className="">
          <SideBar p_id={id1}></SideBar>
        </div>


        <div>
          <div className={`sm:px-0 mt-2`}>
            <h3 className="text-base mx-auto font-bold text-center leading-7 text-gray-900 mb-3">
              Project Details
            </h3>
            <p className="mt-1 text-base font-bold text-center leading-7 text-blue-800 mb-4">
              {ProjectData.projectTitle}
            </p>
          </div>
          <div>
          </div>
          <div className="mx-10">
            <div className="grid grid-rows-4 grid-cols-3 gap-4 ">

              <div>
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

              <div>

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


              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Actual Start Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.actualStartDate}
                </dd>


              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Actual End Date
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.actualEndDate}
                </dd>



              </div>

              <div>

                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Lead Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.leadName}
                </dd>

              </div>


              <div>

                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Client Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.clientName}
                </dd>
              </div>


              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Mitigations
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.description}
                </dd>
              </div>

              <div>

                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Status
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.projectStatus}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Risks
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.description}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {ProjectData.description}
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
                    {ProjectData.attachments.map((attachments) => (
                      <li className="flex items-center justify-between text-sm leading-6">
                      <div className="flex h-10 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            {attachments}
                          </span>

                        </div>
                      </div>

                    </li>
                    ))}
                  </ul>
                </dd>
              </div>






            </div>

          </div>
          <div className="mt-5 mb-5 flex justify-center align-items-center">
            <FormDialog prop={<UpdateProjectForm></UpdateProjectForm>} style={maxWidth} buttonTitle={"Update"} icon={"/Images/arrow-repeat.svg"}></FormDialog>
            <button className="btn btn-danger ml-3" onClick={() => setShowModal(true)}>Delete</button>
          </div>
          <div>
            <Comments></Comments>
          </div>
        </div>

      </div>


    </>
  );
};
