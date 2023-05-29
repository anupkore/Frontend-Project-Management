import { PaperClipIcon } from "@heroicons/react/20/solid";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import { issues } from "./TEST/Issues";
import { useEffect, useState } from "react";
import FormDialog from "./Dialog";
import UpdateIssueForm from "./UpdateIssueForm";

export default function IssueDes() {
  const { issueId } = useParams();
  console.log(Number(issueId));
  const issue = issues.find((issue) => issue.id === Number(issueId));
  const maxWidth ='md';

  // useEffect(() => {
  //   // Simulating an asynchronous API call to fetch the issue details
  //   const fetchIssueDetails = () =>{
  //     try {
  //       const response = issues.find(issue => issue.id === issueId);
  //       setIssue(response);
  //       console.log(response);
  //     }catch(e){
  //         console.log(e);
  //     }
  //   }
  // });

  // useEffect(() => {
  //   // Simulating an asynchronous API call to fetch the issue details
  //   const fetchIssueDetails = async () => {
  //     try {
  //       // Make your API request here to fetch the issue details based on the issueId
  //       // For example:
  //       // const response = await fetch(`/api/issues/${issueId}`);
  //       // const data = await response.json();
  //       // setIssue(data);
  //
  //     } catch (error) {
  //       console.error('Error fetching issue details:', error);
  //     }
  //   };

  //   fetchIssueDetails();
  // }, [issueId]);

  return (
    <>
      <div className="flex">
        <div>
          <SideBar></SideBar>
        </div>
        <div className="border-solid rounded-md border-2 mx-auto my-2">
          <p
            className={`text-center ${
              issue.priority === "High"
                ? "bg-red-600"
                : issue.priority === "Medium"
                ? "bg-red-400"
                : "bg-red-200"
            }`}
          >
            Priority :{issue.priority}
          </p>
          <div className=" border-gray-100">
            <div className={`sm:px-0 `}>
              <h3 className="text-base font-bold text-center leading-7 text-gray-900">
                Issue Details
              </h3>
              <p className="mt-1 text-base font-bold text-center leading-7 text-gray-500">
                {issue.title}
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
                      {issue.name}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Type
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {issue.type}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {issue.status}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Assigned To
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {issue.assignedTo}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Start Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {issue.startDate}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      End Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {issue.endDate}
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
                      {issue.description}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Comments
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {issue.comments.map((comment) => (
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
                        {issue.attachments.map((attachments) => (
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
                              <a
                                href="#"
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
            <div className="flex justify-center my-8 mx-auto"><FormDialog prop={<UpdateIssueForm></UpdateIssueForm>} style={maxWidth} buttonTitle={"Update"}></FormDialog></div>
          </div>
        </div>
        
      </div>
    </>
  );
}
