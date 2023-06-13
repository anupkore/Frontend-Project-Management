import { useEffect } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import FormDialog from "./Dialog";
import GraphVisualization from "./GraphVisualization";
import { useState } from "react";
import Modal from "./Modal";

export default function WorkflowCard() {
  const workflow = [
    ["START", "IN PROGRESS", "REVIEW", "DONE", "COMPLETED"],
    ["REVIEW", "RESOLVED", "DONE"],
    ["DONE", "RE-OPENED", "RE-ASSIGN", "IN PROGRESS"],
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AuthenticationService.getWorkFlow().then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="card w-96 glass">
        <figure>
          <GraphVisualization workflow={workflow}></GraphVisualization>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Workflow Name</h2>
          <div className="bg-gray-100 rounded-md px-4 py-3 sm:flex space-x-20  sm:flex-row sm:px-6">
            <FormDialog
              prop={
                <GraphVisualization workflow={workflow}></GraphVisualization>
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
      {isModalOpen && <Modal />}
    </>
  );
}
