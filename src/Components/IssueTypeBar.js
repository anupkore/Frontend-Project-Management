import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import AuthenticationService from '../Services/AuthenticationService';
import { dataIssue as data } from './TEST/Data';

function IssueTypeBar(props) 
{
  const { selectedOption } = props;
  
  const filteredData = data.filter(item => item.filterType === selectedOption);

  
    AuthenticationService.getDataForIssues().then((response)=>{
          console.log(response.data);
    })  

  return (
    <div className='w-full max-w-3xl min-h-[25rem] mx-auto shadow mt-5'>
      <h2 className='text-center text-dark mb-3'>Issue Types VS Count</h2>
      <div className='flex align-items-center justify-content-center mt-5'>
        <ResponsiveContainer width="70%" height={300}>
          <BarChart data={filteredData}>
            <XAxis dataKey="Issue" />
            <YAxis />
            <Legend />
            <Bar dataKey="Tasks" fill="indigo" />
            <Bar dataKey="Defects" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default IssueTypeBar;
