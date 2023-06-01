import { useState } from "react";
import IssueTypeBar from "./IssueTypeBar";
import NumberOfIssuesBar from "./NumberOfIssuesBar";
import SideBar from "./SideBar";


function ReportsDashboard(props)
{
    
    const daily = [
        {
            project: "Project-1",
            Issues: 5
        },
        {
            project: "Project-2",
            Issues: 7
        },
        {
            project: "Project-3",
            Issues: 3
        },
        {
            project: "Project-4",
            Issues: 9
        }
    ]

    const weekly = [
        {
            project: "Project-1",
            Issues: 3
        },
        {
            project: "Project-2",
            Issues: 5
        },
        {
            project: "Project-3",
            Issues: 9
        },
        {
            project: "Project-4",
            Issues: 2
        }
    ]

    const monthly = [
        {
            project: "Project-1",
            Issues: 2
        },
        {
            project: "Project-2",
            Issues: 3
        },
        {
            project: "Project-3",
            Issues: 5
        },
        {
            project: "Project-4",
            Issues: 1
        }
    ]

    const quarterly = [
        {
            project: "Project-1",
            Issues: 1
        },
        {
            project: "Project-2",
            Issues: 1
        },
        {
            project: "Project-3",
            Issues: 1
        },
        {
            project: "Project-4",
            Issues: 1
        }
    ]
    
    const [selectedOption, setSelectedOption] = useState('daily');
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        console.log(option);
        if(option==='Daily')
        {
            localStorage.setItem("data",daily);
        }
        
      };
    
    return(
        <>
        
            <div className="flex">
                <div className="max-w-2/12">
                    <SideBar></SideBar>
                </div>
                
                <div className="ml-2 w-full">

                    <div className='flex justify-content-center'>
                        <div className='ml-3 mr-3 shadow'>
                            <button onClick={() => handleOptionChange('daily')} className={selectedOption === 'daily' ? 'active' : '' }>
                                Daily
                            </button>
                        </div>
                        <div className='ml-3 mr-3 shadow'>
                            <button onClick={() => handleOptionChange('daily')} className={selectedOption === 'daily' ? 'active' : '' }>
                                Weekly
                            </button>
                        </div>
                        <div className='ml-3 mr-3 shadow'>
                            <button onClick={() => handleOptionChange('daily')} className={selectedOption === 'daily' ? 'active' : '' }>
                                Monthly
                            </button>
                        </div>
                        <div className='ml-3 mr-3 shadow'>
                            <button onClick={() => handleOptionChange('daily')} className={selectedOption === 'daily' ? 'active' : '' }>
                                Quarterly
                            </button>
                        </div>
                    </div>


                    <div className="mt-3">
                    <IssueTypeBar></IssueTypeBar>
                    </div>

                    <div className="mb-3">
                    <NumberOfIssuesBar></NumberOfIssuesBar>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ReportsDashboard;