import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SideBar from "./SideBar";

import { issues } from "./TEST/Issues";
import IssueCardHolder from "./IssueCardHolder";
import { useEffect, useState } from "react";

const colors = [
  "bg-lime-100",
  "bg-red-100",
  "bg-orange-100",
  "bg-sky-100",
  "bg-green-100",
  "bg-teal-100",
  "bg-violet-100",
  "bg-fuchsia-100",
  "bg-pink-100",
  "bg-purple-100"
];

export default function IssueDashboard(props) {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  const [statusValues, setStatusValues] = useState([]);

  useEffect(() => {
    // Determine unique status values from the data
    const uniqueStatusValues = [...new Set(issues.map(item => item.status))];
    setStatusValues(uniqueStatusValues);
  }, [issues]);




  console.log(JSON.stringify(statusValues));
  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <SideBar></SideBar>
        </div>
        <div className="w-4/5">

          <div className="relative">
            <div className="text-center py-4 text-xl font-bold">Issue Workflow</div>
            <div className="absolute top-5 ">
              <button
                onClick={scrollLeft}
                className="p-2 m-2 rounded-full bg-white"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 m-2 rounded-full bg-white"
              >
                <FiChevronRight />
              </button>
            </div>
            <div>
              <div
                id="content"
                className="carousel p-4 flex space-x-10 overflow-x-auto scroll-smooth scrollbar-hide"
              >
                {statusValues.map((status) => 
                  <div className="">
                    <IssueCardHolder iss={status}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}