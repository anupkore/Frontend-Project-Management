import React, { useState, useEffect } from "react";

const InputGrid = () => {
  const [inputValues, setInputValues] = useState([[]]);
  const [workflow, setWorkflow] = useState([]);
  const [submittedRows, setSubmittedRows] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [isWorkflowSubmitted, setIsWorkflowSubmitted] = useState(false);

  useEffect(() => {
    if (workflow.length > 0) {
      const firstColumnValues = workflow.flatMap((row) => row.slice(1)); // Exclude first element of each row
      setDropdownOptions([...new Set(firstColumnValues)]);
    }
  }, [workflow]);

  const handleInputChange = (rowIndex, colIndex, event) => {
    const { value } = event.target;

    setInputValues((prevInputValues) => {
      const newInputValues = prevInputValues.map((row, rIndex) => {
        if (rIndex === rowIndex) {
          return row.map((col, cIndex) => (cIndex === colIndex ? value : col));
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
  };

  const deleteColumn = (rowIndex, colIndex) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[rowIndex] = newInputValues[rowIndex].filter(
        (col, index) => index !== colIndex
      );
      return newInputValues;
    });
  };

  const handleWorkflowSubmit = () => {
    setWorkflow(inputValues);
    setIsWorkflowSubmitted(true);
    console.log("Workflow:", JSON.stringify(workflow));
  };

  return (
    <>
      <div>
        <div className="flex justify-center p-2 my-2 ">
          <h2 className="font-bold underline decoration-sky-400 decoration-8 text-3xl">Create a Workflow</h2>
        </div>
        <div className="container-lg border-2 rounded-md mx-auto p-4">
          <div className="flex px-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
                            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded"
                            onClick={() => addColumn(rowIndex)}
                            disabled={!row.every((val) => val.trim() !== "")}
                          >
                            Add Column
                          </button>
                        </div>
                        <div>
                          <button
                            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded"
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
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
              <div className="flex justify-start p-5 ">
                {workflow.map((rowStates, index) => (
                  <div key={index}>
                    {rowStates.map((state, stateIndex) => (
                      <span key={stateIndex}>
                        {state} {"\u2192"}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end p-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleWorkflowSubmit}
                disabled={isWorkflowSubmitted || submittedRows.length === 0}
              >
                Submit Workflow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputGrid;
