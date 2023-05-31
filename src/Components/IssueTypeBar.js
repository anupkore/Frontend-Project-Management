
import { ResponsiveContainer , BarChart , Bar , XAxis , YAxis, Legend} from 'recharts';

function IssueTypeBar()
{
    const data = [
        {
            Issue: "Issue-1",
            ToDo: 5,
            InProgress: 7,
            InReview: 3
        },
        {
            Issue: "Issue-2",
            ToDo: 5,
            InProgress: 7,
            InReview: 3
        },
        {
            Issue: "Issue-3",
            ToDo: 5,
            InProgress: 7,
            InReview: 3
        },
        {
            Issue: "Issue-4",
            ToDo: 5,
            InProgress: 7,
            InReview: 3
        }
    ]

    const color = ["indigo" , "Orange" , "green" , "Red" ,"Blue"]

    return(
        <>
            <div className='w-full max-w-3xl min-h-[20rem] mx-auto shadow'>
                <div className='flex align-items-center justify-content-center'>
                    <ResponsiveContainer width="70%" aspect={2} >

                        <BarChart data={data}>
                            <XAxis dataKey="Issue" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="ToDo" fill={color[0]} />
                            <Bar dataKey="InProgress" fill={color[1]} />
                            <Bar dataKey="InReview" fill={color[2]} />
                        </BarChart>

                    </ResponsiveContainer>
                </div>
            </div>

        </>
    );
}

export default IssueTypeBar;