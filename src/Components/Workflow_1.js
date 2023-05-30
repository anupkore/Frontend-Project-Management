function Workflow_1(prop1)
{
    const WorkflowImages=[{
        W_ID:1,
        W_Name:"/Images/workflow-1.png",
        W_Path:`/Images/workflow-1.png`,
    } , {
        W_ID:2,
        W_Name:"workflow-2.png",
        W_Path:`/Images/workflow-2.png`,
    } , {
        W_ID:3,
        W_Name:"workflow-3.png",
        W_Path:`/Images/workflow-3.png`,
    } , {
        W_ID:4,
        W_Name:"workflow-4.png",
        W_Path:`/Images/workflow-4.png`,
    }];
    
    
    return(
        <>
            <div className="d-flex align-items-center justify-content-center" >
            {/* {prop1.path} */}
                {/* <img src={WorkflowImages[1].W_Path} ></img> */}
                <img src={`/Images/${prop1.path}.png`} ></img>
            </div>
        </>
    );
}

export default Workflow_1;