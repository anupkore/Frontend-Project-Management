import { useEffect } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import FormDialog from "./Dialog";
import GraphVisualization from "./GraphVisualization";
import { useState } from "react";
import Modal from "./Modal";
import { HashLoader } from "react-spinners";
export default function WorkflowCard() {
  // const workflow = [
  //   ["START", "IN PROGRESS", "REVIEW", "DONE", "COMPLETED"],
  //   ["REVIEW", "RESOLVED", "DONE"],
  //   ["DONE", "RE-OPENED", "RE-ASSIGN", "IN PROGRESS"],
  // ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [workflowData, setWorkflowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [workflow ,setWorkflow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthenticationService.getWorkFlow();
        setWorkflowData(response.data);
        setIsLoading(false);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching workflow data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (workflowData.length > 0) {
      console.log("Workflow", workflowData);
    } else {
      console.log("Workflow data is empty");
    }
  }, [workflowData]);

  console.log(workflowData);
  // console.log(workflow);

  // const [workflowData, setWorkflowData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [workflow, setWorkflow] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await AuthenticationService.getWorkFlow();
  //       setWorkflowData(response.data);
  //       setIsLoading(false);
  //       return response.data;
  //     } catch (error) {
  //       // Handle error if needed
  //       console.error("Error fetching workflow data:", error);
  //       setIsLoading(false);
  //       throw error;
  //     }
  //   };

  //   fetchData()
  //     .then(() => {
  //       console.log("Fetching data",workflowData);
  //       // if (data.length > 0) {
  //       //   const wfData = data[0];
  //       //   if (wfData.array) {
  //       //     console.log(wfData.array);
  //       //     const workflowString = wfData.array;
  //       //     console.log(workflowString);
  //       //     const wf = workflowString.replace(/'/g, '"');
  //       //     const wfArray = JSON.parse(wf);
  //       //     setWorkflow(wfArray);
  //       //     console.log("W_ARRAY: " + wf);
  //       //   } else {
  //       //     console.log("No 'array' property found in workflowData[0]");
  //       //   }
  //       // } else {
  //       //   console.log("Workflow data is empty");
  //       // }

  //     })
  //     .catch((error) => {
  //       // Handle error if needed
  //       console.error("Error in subsequent logic:", error);
  //     });
  // }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <HashLoader
            color="#1976d2"
            style={{ marginTop: "10%" }}
            size={100}
            speedMultiplier={1}
          />
          {/* <PacmanLoader color="#1976d2" size={50}/>   */}
        </div>
      ) : (
        <>
        {workflowData.map((m, index) => {
          const workflow = JSON.parse(m.array.replace(/'/g, '"'));
          return(
          <div className="card w-96 glass" key={index}>
            <figure>
              <GraphVisualization workflow={workflow}></GraphVisualization>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{m.array_name}</h2>
              <div className="bg-gray-100 rounded-md px-4 py-3 sm:flex space-x-20  sm:flex-row sm:px-6">
                <FormDialog
                  prop={
                    <GraphVisualization
                      workflow={workflow}
                    ></GraphVisualization>
                  }
                  style={"md"}
                  ic="false"
                  buttonTitle={"Preview"}
                  icon={"./Images/eye-fill-white.svg"}
                  variant={"contained"}
                />
                <button
                  className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-red-600 sm:mt-0 sm:w-auto"
                  type="submit"
                  onClick={toggleModal}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          );
        })}
        </>
      )}

      {isModalOpen && <Modal />}
    </>
  );
}
