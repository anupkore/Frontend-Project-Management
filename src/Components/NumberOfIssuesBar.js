
import { CleaningServices } from '@mui/icons-material';
import { useState } from 'react';
import { ResponsiveContainer , BarChart , Bar , XAxis , YAxis, Legend} from 'recharts';
import ReportsDashboard from './ReportsDashboard';

function NumberOfIssuesBar(props)
{
    const data = [
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

    return(
        <>
            
            <div className='w-full max-w-3xl min-h-[20rem] mx-auto shadow mt-5 mb-5'>
                <div className='w-50 mx-auto'>
                    
                    <h2 className='text-center text-dark mb-5'>Projects VS Issue Count</h2>
                </div>
                <div className='flex align-items-center justify-content-center'>
                    <ResponsiveContainer width="70%" aspect={2}>

                        <BarChart data={data}>
                            <XAxis dataKey="project" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="Issues" fill='blue' />
                        </BarChart>

                    </ResponsiveContainer>
                </div>
            </div>

        </>
    );
}

export default NumberOfIssuesBar;