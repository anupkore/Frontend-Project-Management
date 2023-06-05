import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

function IssueTypeBar(props) {
  const { selectedOption } = props;

  const data = [
    {
      Issue: "Issue-1",
      Tasks: 15,
      Defects: 7,
      filterType: "monthly",
    },
    {
      Issue: "Issue-2",
      Tasks: 5,
      Defects: 7,
      filterType: "weekly",
    },
    {
      Issue: "Issue-3",
      Tasks: 5,
      Defects: 1,
      filterType: "quarterly",
    },
    {
      Issue: "Issue-4",
      Tasks: 35,
      Defects: 7,
      filterType: "daily",
    },
    {
      Issue: "Issue-5",
      Tasks: 10,
      Defects: 3,
      filterType: "monthly",
    },
    {
      Issue: "Issue-6",
      Tasks: 20,
      Defects: 5,
      filterType: "weekly",
    },
    {
        Issue: "Issue-5",
        Tasks: 10,
        Defects: 13,
        filterType: "monthly",
      },
      {
        Issue: "Issue-6",
        Tasks: 2,
        Defects: 5,
        filterType: "weekly",
      },
  ];
  

  const filteredData = data.filter(item => item.filterType === selectedOption);

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
