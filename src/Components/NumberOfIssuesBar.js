import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

function NumberOfIssuesBar(props) {
    const { data } = props;

    return (
        <div className='w-full max-w-3xl min-h-[20rem] mx-auto shadow mt-5 mb-5'>
            <div className='w-50 mx-auto'>
                <h2 className='text-center text-dark mb-5'>Projects VS Issue Count</h2>
            </div>
            <div className='flex align-items-center justify-content-center'>
                <ResponsiveContainer width="70%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="project" label={{ value: 'Projects', position: 'insideBottom', offset: -10, fontSize: 14, fontWeight: 'bold' }} />
                        <YAxis
                            label={{ value: 'No. of Issues', angle: -90, position: 'insideLeft', offset: 20, fontSize: 14, fontWeight: 'bold' }}
                            tick={{ fontSize: 12 }}
                        />
                        <Legend />                      

                        <Bar dataKey="Issues" name="No. of Issues" fill='blue'  />
                        
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default NumberOfIssuesBar;
