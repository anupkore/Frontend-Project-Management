import { useState } from "react";
import IssueTypeBar from "./IssueTypeBar";
import NumberOfIssuesBar from "./NumberOfIssuesBar";
import SideBar from "./SideBar";
import {data} from "./TEST/Data";

function ReportsDashboard(props) {
  const [selectedOption, setSelectedOption] = useState("daily");

  const handleOptionChange = (option) => 
  {
   setSelectedOption(option);
  };

  const filteredData = data.map((item) => {
    const filteredItem = { project: item.project, Issues: item[selectedOption] };
    return filteredItem;
  });

  return (
    <>
      <div className="flex">
        <div className="max-w-2/12">
          <SideBar />
        </div>
        <div className="ml-2 w-full">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleOptionChange("daily")}
              className={`${
                selectedOption === "daily"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Daily
            </button>
            <button
              onClick={() => handleOptionChange("weekly")}
              className={`${
                selectedOption === "weekly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Weekly
            </button>
            <button
              onClick={() => handleOptionChange("monthly")}
              className={`${
                selectedOption === "monthly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              monthly
            </button>
            <button
              onClick={() => handleOptionChange("quarterly")}
              className={`${
                selectedOption === "quarterly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg py-2 px-4`}
            >
              Quarterly
            </button>
          </div>
          <div className="mt-3">
            <IssueTypeBar selectedOption={selectedOption}/>
          </div>
          <div className="mb-3">
            <NumberOfIssuesBar data={filteredData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportsDashboard;
