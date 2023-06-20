import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, Label, LabelList } from 'recharts';
import AuthenticationService from '../Services/AuthenticationService';
import { useEffect, useState } from 'react';

function IssueTypeBar({ selectedOption }) {
  const payload = { Project_ID: Number(localStorage.getItem("ProjectID"))};
  const [taskData, setTaskData] = useState([]);
  const [defectData, setDefectData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log(payload);

    if (selectedOption === 'Weekly') {
      AuthenticationService.IssueByWeek(payload)
        .then((response) => {
          console.log('data...', response.data);
          setTaskData(response.data.task);
          setDefectData(response.data.defect);
          console.log('weekly : task and defect', taskData, 'and', defectData);
          setFilteredData([{ Issue: 'Weekly', task: response.data.task, defect: response.data.defect }]);
        })
        .catch((error) => {
          console.log('ERROR', error.data);
        });
    } else if (selectedOption === 'Monthly') {
      AuthenticationService.IssueByMonth(payload)
        .then((response) => {
          console.log('data...', response.data);
          setTaskData(response.data.task);
          setDefectData(response.data.defect);
          console.log('monthly : task and defect', taskData, 'and', defectData);
          setFilteredData([{ Issue: 'Monthly', task: response.data.task, defect: response.data.defect }]);
        })
        .catch((error) => {
          console.log('ERROR', error.data);
        });
    } else if (selectedOption === 'Daily'){
      AuthenticationService.IssueByDaily(payload)
        .then((response) => {
          console.log('data...', response.data);
          setTaskData(response.data.task);
          setDefectData(response.data.defect);
          console.log('Daily : task and defect', taskData, 'and', defectData);
          setFilteredData([{ Issue: 'Daily', task: response.data.task, defect: response.data.defect }]);
        })
        .catch((error) => {
          console.log('ERROR', error.data);
        });
    } else{
      AuthenticationService.IssueByQuarter(payload)
        .then((response) => {
          console.log('data...', response.data);
          setTaskData(response.data.task);
          setDefectData(response.data.defect);
          console.log('quarter:task and defect', taskData, 'and', defectData);
          setFilteredData([{ Issue: 'Quarterly', task: response.data.task, defect: response.data.defect }]);
        })
        .catch((error) => {
          console.log('ERROR', error.data);
        });
    }
  }, [selectedOption]);

  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;

    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    );
  };

  const calculateYAxisDomain = () => {
    const maxValue = Math.max(
      ...filteredData.map((data) => Math.max(data.task, data.defect))
    );
    const buffer = 2; // Adjust the buffer value as needed

    return [0, maxValue + buffer];
  };

  return (
    <div className="w-full max-w-3xl min-h-[25rem] mx-auto shadow mt-5">
      <h2 className="text-center text-dark mb-3">Issue Types VS Count</h2>
      <div className="flex align-items-center justify-content-center mt-5">
        <ResponsiveContainer width="70%" height={300}>
          <BarChart data={filteredData}>
            <XAxis dataKey="Issue" />
            <YAxis domain={calculateYAxisDomain()}>
              <Label value="Count" angle={-90} position="insideLeft" />
            </YAxis>
            <Legend />
            <Bar dataKey="task" fill="indigo">
              <LabelList dataKey="task" position="top" content={renderCustomizedLabel} />
            </Bar>
            <Bar dataKey="defect" fill="orange">
              <LabelList dataKey="defect" position="top" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default IssueTypeBar;
