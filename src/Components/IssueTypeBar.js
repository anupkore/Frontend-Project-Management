

import { ResponsiveContainer , BarChart , Bar , XAxis , YAxis, Legend ,Text, CartesianGrid} from 'recharts';

function IssueTypeBar()
{
    const data = [
        {
            Issue: "Issue-1",
            Tasks: 5,
            Defects: 7,
            
        },
        {
            Issue: "Issue-2",
            Tasks: 5,
            Defects: 7,
           
        },
        {
            Issue: "Issue-3",
            Tasks: 5,
            Defects: 7,
            
        },
        {
            Issue: "Issue-4",
            Tasks: 5,
            Defects: 7,
            
        }
    ]

    const color = ["indigo" , "Orange" , "green" , "Red" ,"Blue"]

    

    return(
        <>
            
            <div>
                        
            <div className='w-full max-w-3xl min-h-[25rem] mx-auto shadow mt-5'>
                <h2 className='text-center text-dark mb-3'>Issue Types VS  Count</h2>

                
        
                <div className='flex align-items-center justify-content-center mt-5'>
                    
                    <ResponsiveContainer width="70%" aspect={2}  >
        
                        <BarChart data={data}>
                            <CartesianGrid>
                            </CartesianGrid>
                            <XAxis dataKey="Issue" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="Tasks" fill={color[2]} />
                            <Bar dataKey="Defects" fill={color[1]} />
                            
                        </BarChart>

                    </ResponsiveContainer>
                </div>
            </div>
            </div>
        </>
    );
}

export default IssueTypeBar;