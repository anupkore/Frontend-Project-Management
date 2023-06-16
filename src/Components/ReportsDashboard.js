import { useState } from "react";
import IssueTypeBar from "./IssueTypeBar";
import NumberOfIssuesBar from "./NumberOfIssuesBar";
import SideBar from "./SideBar";
import { data } from "./TEST/Data";
import AuthenticationService from "../Services/AuthenticationService";
import { useEffect } from "react";

function ReportsDashboard(props) {
  const [selectedOption, setSelectedOption] = useState("Weekly"); // Initialize with "Weekly"

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="flex">
        <div className="max-w-2/12">
          <SideBar />
        </div>
        <div className="ml-2 w-full">
          <div className="flex justify-center space-x-4">
          <button
              onClick={() => handleOptionChange("Daily")}
              className={`${
                selectedOption === "Daily"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Daily
            </button>
            <button
              onClick={() => handleOptionChange("Weekly")}
              className={`${
                selectedOption === "Weekly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Weekly
            </button>
            <button
              onClick={() => handleOptionChange("Monthly")}
              className={`${
                selectedOption === "Monthly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleOptionChange("Quarterly")}
              className={`${
                selectedOption === "Quarterly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Quarterly
            </button>
          </div>
          <div className="mt-3">
            <IssueTypeBar selectedOption={selectedOption} />
          </div>
          {/* <div className="mb-3">
            <NumberOfIssuesBar data={filteredData} />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ReportsDashboard;
