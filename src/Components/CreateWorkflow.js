import React, { useState, useEffect } from "react";
import FormDialog from "./Dialog";
import GraphVisualization from "./GraphVisualization";
import AuthenticationService from "../Services/AuthenticationService";
import { toast } from "react-toastify";

const CreateWorkflow = ({proj,type}) => {

  console.log(proj);
  console.log(type);
  const [inputValues, setInputValues] = useState([[]]);
  const [workflow, setWorkflow] = useState([]);
  const [submittedRows, setSubmittedRows] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [isWorkflowSubmitted, setIsWorkflowSubmitted] = useState(false);
  const [workflowName, setWorkflowName] = useState("");
  const [worflowNameSubmitted, setWorflowNameSubmitted] = useState(false);
  const [workflowData , setWorkflowData] = useState();
  useEffect(() => {
    if (workflow.length > 0) {
      const firstColumnValues = workflow.flatMap((row) => row.slice(1)); // Exclude first element of each row
      setDropdownOptions([...new Set(firstColumnValues)]);
    }
  }, [workflow]);

  const handleInputChange = (rowIndex, colIndex, event) => {
    const { value } = event.target;
    const isUppercase = value === value.toUpperCase();
    if(!isUppercase){
      alert("enter the fields in capital")
    }
  
    setInputValues((prevInputValues) => {
      const newInputValues = prevInputValues.map((row, rIndex) => {
        if (rIndex === rowIndex) {
          return row.map((col, cIndex) =>
            cIndex === colIndex && isUppercase ? value : col
          );
        }
        return row;
      });
      return newInputValues;
    });
  };
  

  const [canAddRow, setCanAddRow] = useState(true);
  const addRow = () => {
    if (canAddRow) {
      setInputValues((prevInputValues) => [...prevInputValues, [""]]);
      setCanAddRow(false);
      console.log("Row added");
    }
  };

  const handleSubmitRow = (rowIndex) => {
    const rowStates = inputValues[rowIndex].filter(
      (value) => value.trim() !== ""
    );
    if (rowStates.length > 0) {
      setWorkflow((prevWorkflow) => [...prevWorkflow, rowStates]);
      setSubmittedRows((prevSubmittedRows) => [...prevSubmittedRows, rowIndex]);
      setCanAddRow(true);
      console.log("Row submitted " + rowIndex);
    }
  };

  // Check if the previous row is submitted before allowing the addition of a new row
  useEffect(() => {
    if (
      submittedRows.length === 0 ||
      (submittedRows.length > 0 &&
        submittedRows[submittedRows.length - 1] !== inputValues.length - 1)
    ) {
      setCanAddRow(false);
    } else {
      setCanAddRow(true);
    }
  }, [inputValues, submittedRows]);

  // Disable adding a new row if the first row is not submitted

  const handleEditRow = (rowIndex) => {
    setEditRowIndex(rowIndex);
  };

  const handleUpdateRow = (rowIndex) => {
    const rowStates = inputValues[rowIndex].filter(
      (value) => value.trim() !== ""
    );
    if (rowStates.length > 0) {
      setWorkflow((prevWorkflow) => {
        const newWorkflow = [...prevWorkflow];
        newWorkflow[rowIndex] = rowStates;
        return newWorkflow;
      });
      setEditRowIndex(null);
    }
  };

  const addColumn = (rowIndex) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[rowIndex] = [...newInputValues[rowIndex], ""];
      return newInputValues;
    });
    console.log("column added");
  };

  const deleteColumn = (rowIndex, colIndex) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[rowIndex] = newInputValues[rowIndex].filter(
        (col, index) => index !== colIndex
      );
      return newInputValues;
    });
    console.log("colum deleted");
  };

  const handleWorkflowSubmit = () => {
    const workflowData1 = {
      wf: workflowName,
      array: inputValues,
    };
    setWorkflowData(workflowData1);
    setWorkflow(inputValues);
    setIsWorkflowSubmitted(true);
  };
 
   

  useEffect(() => {
    if (isWorkflowSubmitted) {
      AuthenticationService.addworkflow(workflowData)
        .then((response) => {
          console.log(response.data);
          toast.success('Workflow Added Sucessfully!!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          console.log("Workflow created Succesfully!!");
        })
        .catch((error) => {
          console.log("ERROR" + error);

          toast.error("Failed to create");

        });
    }
  }, [isWorkflowSubmitted]);
  
  return (
    
    <>
      <div>
        <div className="flex justify-center p-2 my-2 ">
          <h2 className="font-bold underline decoration-sky-400 decoration-8 text-3xl">
            Workflow For : {type}
          </h2>
          
        </div>
        <h1>Project Name : {proj}</h1>
        <div className="container-lg border-2 rounded-md mx-auto p-4">
          <div className="flex p-3 ">
            <input
              type="text"
              value={workflowName}
              onChange={(event) => setWorkflowName(event.target.value)}
              className="border rounded py-1 px-2 mr-2"
              placeholder="Workflow Name"
              required
              disabled={isWorkflowSubmitted || worflowNameSubmitted}
            />
            <button
              className={`text-white font-bold py-2 px-4 rounded ${
                isWorkflowSubmitted || worflowNameSubmitted
                  ? " cursor-not-allowed bg-blue-300"
                  : "hover:bg-blue-700 bg-blue-500"
              }`}
              onClick={() => setWorflowNameSubmitted(true)}
              disabled={isWorkflowSubmitted || worflowNameSubmitted}
            >
              Submit
            </button>
          </div>
          <div className="flex px-3">
            <button
              className={`text-white font-bold py-2 px-4 rounded ${
                isWorkflowSubmitted || !canAddRow
                  ? " cursor-not-allowed bg-blue-300"
                  : "hover:bg-blue-700 bg-blue-500"
              }`}
              onClick={addRow}
              disabled={isWorkflowSubmitted || !canAddRow}
            >
              Add Row
            </button>
          </div>
          <div className="">
            <div className="overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar">
              <div className="max-w-[300rem] w-max py-2">
                {inputValues.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="px-3 flex items-center gap-4 py-2"
                  >
                    {row.map((value, colIndex) => (
                      <div key={colIndex} className="flex gap-2">
                        {colIndex === 0 && rowIndex > 0 ? (
                          <select
                            value={value}
                            onChange={(event) =>
                              handleInputChange(rowIndex, colIndex, event)
                            }
                            disabled={
                              submittedRows.includes(rowIndex) &&
                              rowIndex !== editRowIndex
                            }
                            className="border rounded py-1 px-2 w-48"
                          >
                            <option value="">Select a State</option>
                            {dropdownOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <div>
                            <input
                              type="text"
                              value={value}
                              onChange={(event) =>
                                handleInputChange(rowIndex, colIndex, event)
                              }
                              disabled={
                                submittedRows.includes(rowIndex) &&
                                rowIndex !== editRowIndex
                              }
                              className="border rounded py-1 px-2 mr-2"
                            />
                          </div>
                        )}
                        {!submittedRows.includes(rowIndex) && (
                          <div>
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                              onClick={() => deleteColumn(rowIndex, colIndex)}
                            >
                              -
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                    {!submittedRows.includes(rowIndex) && (
                      <>
                        <div>
                          <button
                            className={`text-white font-bold py-2 px-4 rounded ${
                              (!row.every((val) => val.trim() !== "") || !worflowNameSubmitted)
                                ? " cursor-not-allowed bg-blue-300"
                                : "hover:bg-blue-700 bg-blue-500"
                            }`}
                            onClick={() => addColumn(rowIndex)}
                            disabled={!row.every((val) => val.trim() !== "") || !worflowNameSubmitted}
                          >
                            Add Column
                          </button>
                        </div>
                        <div>
                          <button
                            className={`text-white font-bold py-2 px-4 rounded ${
                              !row.every((val) => val.trim() !== "")
                                ? " cursor-not-allowed bg-blue-300"
                                : "hover:bg-blue-700 bg-blue-500"
                            }`}
                            onClick={() => handleSubmitRow(rowIndex)}
                            disabled={!row.every((val) => val.trim() !== "")}
                          >
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                    {submittedRows.includes(rowIndex) &&
                      rowIndex !== editRowIndex && (
                        <div>
                          <button
                            className={`text-white font-bold py-2 px-4 rounded ${
                              isWorkflowSubmitted
                                ? " cursor-not-allowed bg-blue-300"
                                : "hover:bg-blue-700 bg-blue-500"
                            }`}
                            onClick={() => handleEditRow(rowIndex)}
                            disabled={isWorkflowSubmitted}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    {submittedRows.includes(rowIndex) &&
                      rowIndex === editRowIndex && (
                        <div>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => handleUpdateRow(rowIndex)}
                          >
                            Update
                          </button>
                        </div>
                      )}
                  </div>
                ))}
              </div>
              <div className="p-5 ">
                {workflow.map((rowStates, index) => (
                  <div key={index}>
                    {rowStates.map((state, stateIndex) => (
                      <span key={stateIndex}>
                        {state} {"\u2192"}{" "}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end p-4 gap-4">
              <button
                className={`text-white font-bold py-2 px-4 rounded ${
                  isWorkflowSubmitted || submittedRows.length === 0
                    ? " cursor-not-allowed bg-blue-300"
                    : "hover:bg-blue-700 bg-blue-500"
                }`}
                onClick={handleWorkflowSubmit}
                disabled={isWorkflowSubmitted || submittedRows.length === 0}
              >
                Submit Workflow
              </button>
              
              {submittedRows.length !== 0 && (
                <div className=" my-auto">
                <FormDialog
                  prop={
                    <GraphVisualization
                      workflow={workflow}
                    ></GraphVisualization>
                  }
                  style={"md"}
                  ic="true"
                  // buttonTitle={"Preview"}
                  icon={"./Images/eye-fill.svg"}
                  variant={""}
                />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default InputGrid;
=======
export default CreateWorkflow;
>>>>>>> bfd1fab78cfb753bcd66d3b7acc57d116986d75b
