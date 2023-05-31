
import { ResponsiveContainer , BarChart , Bar , XAxis , YAxis, Legend} from 'recharts';

function NumberOfIssuesBar()
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
            
            <div className='w-full max-w-3xl min-h-[20rem] mx-auto shadow'>
                <div className='flex align-items-center justify-content-center'>
                    <ResponsiveContainer width="70%" aspect={2}>

                        <BarChart data={data}>
                            <XAxis dataKey="project" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="Issues" fill='indigo' />
                        </BarChart>

                    </ResponsiveContainer>
                </div>
            </div>

        </>
    );
}

export default NumberOfIssuesBar;