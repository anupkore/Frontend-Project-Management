// export default function IssueDescription() {
//   return (
//     <>
//       <div className="w-[70rem] max-h-[60rem] rounded border-2 border-black m-auto align-center">
//         <div className="flex flex-row">
//           <div className="border-red-400 border-2 basis-2/3">
//             <div className="m-4 boredr-solid border">
//               <div className="flex py-2">
//                 <h1 className="text-slate-500 underline decoration-2 decoration-sky-400">
//                   Project Name
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="text-xl text-black font-semibold">Task Name</h1>
//               </div>
//             </div>
//             <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 max-h-[22rem]">
//               <div className="m-4 border-solid border">
//                 <div className="flex border-2 border-solid py-2">
//                   <h1 className="font-medium">Description</h1>
//                 </div>
//                 <div className="max-h-96">
//                   <div className="flex align-center">
//                     <textarea
//                       type="text"
//                       className="w-full h-24 max-h-40 border-slate-200"
//                     ></textarea>
//                   </div>
//                   <div className="flex my-2 justify-start gap-2">
//                     <button className="bg-blue-700 px-3 py-1 hover:bg-blue-600 rounded-sm shadow-md">
//                       <span className="text-white font-semibold ">Save</span>
//                     </button>
//                     <button className="hover:bg-slate-100 px-3 py-1 hover:rounded-sm ">
//                       <span className="text-black font-semibold ">Cancel</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="m-4 border-solid border max-h-96">
//                 <div className="flex gap-2 py-2">
//                   <div>
//                     <h1 className="rounded-md bg-slate-500 px-3 py-1 text-white font-semibold">
//                       Comments
//                     </h1>
//                   </div>
//                 </div>
//                 <div>
//                   <div>
//                     <textarea
//                       type="text"
//                       className="w-full rounded-sm border-solid border-slate-200"
//                       placeholder="Add a new Comment"
//                     ></textarea>
//                   </div>
//                   <div className="mt-2">
//                     <button className="bg-blue-700 px-3 py-1 hover:bg-blue-600 rounded-sm shadow-md">
//                       <span className="text-white font-semibold ">Add</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="h-[30rem] border-red-400 border-2 basis-1/3"></div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "react-bootstrap";

export default function IssueDescription() {
  const [isSaveVisible, setSaveVisible] = useState(false);
  const [isAddVisible, setAddVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("TODO");
  const [isOpen, setIsOpen] = useState(false); // State to control popover open/closed

  // Function to handle opening the popover
  const openPopover = () => {
    setIsOpen(true);
  };

  // Function to handle closing the popover
  const closePopover = () => {
    setIsOpen(false);
  };

  const solutions = [
    { name: "TODO" },
    { name: "INPROGRESS" },
    { name: "INREVIEW" },
    { name: "DONE" },
  ];

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    // toggleDropdown();
  };

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

  return (
    <>
      <div className="w-[80rem] max-h-[32rem] gap-4 rounded border-2 border-slate-400 m-auto align-center">
        <div className="flex flex-row">
          <div className=" basis-2/3">
            <div className="m-4 ">
              <div className="flex py-2">
                <h1 className="text-slate-500 underline decoration-2 decoration-sky-400">
                  Project Name
                </h1>
              </div>
              <div>
                <h1 className="text-xl text-black font-semibold">Task Name</h1>
              </div>
            </div>
            <div className="overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-slate-200 ">
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
                      placeholder="Heyy!! add your description"
                    ></textarea>
                  </div>
                  <div className="flex my-2 justify-start gap-2">
                    {isSaveVisible && (
                      <>
                        <button className="bg-blue-700 px-3 py-1 hover:bg-blue-600 rounded-sm shadow-md">
                          <span className="text-white font-semibold">Save</span>
                        </button>

                        <button className="hover:bg-slate-100 px-3 py-1 hover:rounded-sm">
                          <span className="text-black font-semibold">
                            Cancel
                          </span>
                        </button>
                      </>
                    )}
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
                    ></textarea>
                  </div>
                  <div className="mt-2 ml-10">
                    {isAddVisible && (
                      <button className="bg-blue-700 px-3 py-1 hover:bg-blue-600 rounded-sm shadow-md">
                        <span className="text-white font-semibold">Add</span>
                      </button>
                    )}
                  </div>
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
                    <Popover.Panel className="absolute left-1/3 flex w-64 max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="py-4 px-2">
                          {solutions.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex gap-x-6 rounded-r-lg p-2 hover:bg-gray-50 hover:border-l-4 hover:border-l-[#0052CC]"
                              //   style={{
                              //     boxShadow: 'inset 2px 0px 0px #0052CC',
                              //   }}
                              onClick={() => {
                                handleOptionSelect(item.name);
                                closePopover();
                              }}
                            >
                              <div>
                                <h1 className="font-semibold text-gray-900">
                                  {item.name}
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
              <div className="border-2 border-slate-200 h-72 w-full mt-4 border-solid">
                <div className="flex">
                  <h1 className="p-2 font-medium">Issue Details</h1>
                </div>
                <div className="ml-2 grid grid-rows-4 grid-flow-col  mt-3">
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 ">
                      Assignee
                    </dt>
                    <div className="">
                    <h1 className="mx-auto">Varun garade</h1>
                    <button className="px-3 py-1 my-1">
                        <span className="text-blue-700">Assign To</span>
                    </button>
                    </div>   
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm text-center font-medium text-gray-900 ">
                      Priority
                    </dt>
                    <dd className="">High</dd>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 ">
                      Expected Time
                    </dt>
                    <dd className="">1 Year</dd>
                  </div>
                  <div className="flex flex-row">
                    <dt className="text-sm font-medium text-gray-900 ">
                      Severity
                    </dt>
                    <dd className="">Critical</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
