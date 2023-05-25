import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";

const projects = [
    {
      id: 1,
      title: "Project 1",
      startDate: "2023-05-01",
      endDate: "2023-06-01",
      status: "In Progress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      assignedTo: "John Doe",
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
      title: "Project 2",
      startDate: "2023-07-01",
      endDate: "2023-08-01",
      status: "Completed",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      assignedTo: "Jane Smith",
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
        title: "Project 3",
        startDate: "2023-07-01",
        endDate: "2023-08-01",
        status: "Completed",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        assignedTo: "Jane Smith",
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
        id: 4,
        title: "Project 4",
        startDate: "2023-07-01",
        endDate: "2023-08-01",
        status: "Completed",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        assignedTo: "Jane Smith",
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
        id: 5,
        title: "Project 5",
        startDate: "2023-07-01",
        endDate: "2023-08-01",
        status: "Completed",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        assignedTo: "Jane Smith",
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
        id: 6,
        title: "Project 6",
        startDate: "2023-07-01",
        endDate: "2023-08-01",
        status: "Completed",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        assignedTo: "Jane Smith",
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
        id: 7,
        title: "Project 7",
        startDate: "2023-07-01",
        endDate: "2023-08-01",
        status: "Completed",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        assignedTo: "Jane Smith",
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

    // Additional project objects...
  ];
  

export const ProjectExplore = () => {
  const { id1 } = useParams();
  const ProjectData = projects.find((proj) => proj.id === Number(id1));

  return (


    <>
      <div className="flex">
        <div>
          <SideBar></SideBar>
        </div>
        <div className="border-solid rounded-md border-2 mx-auto">
        
          <div className=" border-gray-100">
            <div className={`sm:px-0 `}>
              <h3 className="text-base font-bold text-center leading-7 text-gray-900">
              ProjectData Details
              </h3>
              <p className="mt-1 text-base font-bold text-center leading-7 text-gray-500">
                {ProjectData.title}
              </p>
            </div>
            <div className="flex flex-row divide-x">
              <div className="basis-2/5">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Issue Name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.name}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Type
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.type}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.status}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Assigned To
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.assignedTo}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Start Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.startDate}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      End Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.endDate}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="basis-3/5">
                <dl className="divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.description}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Comments
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {ProjectData.comments.map((comment) => (
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          {" "}
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
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
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                              {/* <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              /> */}
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
                              <a
                                href="#x"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Download
                              </a>
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
        </div>
      </div>
    </>
  );
};
