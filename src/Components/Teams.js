import React from "react";
import { issues } from "./TEST/Issues";
import projectsData from "./TEST/Projects";
import { useParams } from "react-router";
import bgProject from "../images/cool-background.png";
import FormDialog from "./Dialog";
import { Link } from "react-router-dom";
import AddNewMember from "./AddNewMember";
import SideBar from "./SideBar";

export const TeamData = [
    {
      id: 1,
      title: "Login Page Alignment Issue",
      name: "Fix login page alignment",
      type: "Bug",
      priority: "Medium",
      status: "TO DO",
      startDate: "2023-05-20",
      endDate: "2023-05-25",
      assignedTo: [
        {
          name: "Jane Smith",
          email: "jane@example.com",
          role: "Frontend Developer",
          department: "Engineering"
        },
        {
          name: "Emily Johnson",
          email: "emily@example.com",
          role: "UI/UX Designer",
          department: "Design"
        }
      ],
      description: "The login page is not aligned properly on mobile devices.",
      comments: [
        { author: "David", text: "This issue affects user experience." }
      ],
      attachments: ["bug_screenshot_1.png"]
    },
    {
      id: 2,
      title: "Button Color Issue",
      name: "Change button color to red",
      type: "Task",
      priority: "Low",
      status: "IN PROGRESS",
      startDate: "2023-05-21",
      endDate: "2023-05-23",
      assignedTo: [
        {
          name: "John Doe",
          email: "john@example.com",
          role: "Frontend Developer",
          department: "Engineering"
        },
        {
          name: "Sarah Lee",
          email: "sarah@example.com",
          role: "UI/UX Designer",
          department: "Design"
        }
      ],
      description: "The button color needs to be changed to red for better visibility.",
      comments: [
        { author: "Emily", text: "Consider using a darker shade of red." }
      ],
      attachments: []
    },
    {
      id: 3,
      title: "Database Connection Error",
      name: "Fix database connection error",
      type: "Bug",
      priority: "High",
      status: "IN PROGRESS",
      startDate: "2023-05-22",
      endDate: "2023-05-24",
      assignedTo: [
        {
          name: "Robert Johnson",
          email: "robert@example.com",
          role: "Backend Developer",
          department: "Engineering"
        },
        {
          name: "Michael Brown",
          email: "michael@example.com",
          role: "Database Administrator",
          department: "Operations"
        }
      ],
      description: "There is an intermittent connection error with the database.",
      comments: [
        { author: "David", text: "Check the database configuration settings." }
      ],
      attachments: []
    },
    {
      id: 4,
      title: "Responsive Layout Issue",
      name: "Improve responsiveness of the website",
      type: "Task",
      priority: "Medium",
      status: "TO DO",
      startDate: "2023-05-23",
      endDate: "2023-05-28",
      assignedTo: [
        {
          name: "Alex Johnson",
          email: "alex@example.com",
          role: "Frontend Developer",
          department: "Engineering"
        },
        {
          name: "Emma Thompson",
          email: "emma@example.com",
          role: "UI/UX Designer",
          department: "Design"
        }
      ],
      description: "The website layout does not adapt well to different screen sizes.",
      comments: [
        { author: "Sarah", text: "Consider using CSS media queries for better responsiveness." }
      ],
      attachments: ["responsive_layout.png"]
    },
    {
      id: 5,
      title: "API Integration Issue",
      name: "Integrate new API endpoint",
      type: "Task",
      priority: "High",
      status: "IN PROGRESS",
      startDate: "2023-05-24",
      endDate: "2023-05-26",
      assignedTo: [
        {
          name: "Robert Johnson",
          email: "robert@example.com",
          role: "Backend Developer",
          department: "Engineering"
        },
        {
          name: "Emily Johnson",
          email: "emily@example.com",
          role: "UI/UX Designer",
          department: "Design"
        }
      ],
      description: "A new API endpoint needs to be integrated into the system.",
      comments: [
        { author: "John", text: "Ensure proper error handling for the API calls." }
      ],
      attachments: []
    },
    {
      id: 6,
      title: "Performance Optimization",
      name: "Optimize website performance",
      type: "Task",
      priority: "High",
      status: "TO DO",
      startDate: "2023-05-25",
      endDate: "2023-05-30",
      assignedTo: [
        {
          name: "Alex Johnson",
          email: "alex@example.com",
          role: "Frontend Developer",
          department: "Engineering"
        },
        {
          name: "Michael Brown",
          email: "michael@example.com",
          role: "Backend Developer",
          department: "Engineering"
        }
      ],
      description: "The website is loading slowly and needs performance optimization.",
      comments: [
        { author: "Emma", text: "Consider using caching techniques to improve performance." }
      ],
      attachments: []
    },
    {
      id: 7,
      title: "Security Vulnerability",
      name: "Fix security vulnerability",
      type: "Bug",
      priority: "High",
      status: "IN PROGRESS",
      startDate: "2023-05-26",
      endDate: "2023-05-29",
      assignedTo: [
        {
          name: "John Doe",
          email: "john@example.com",
          role: "Backend Developer",
          department: "Engineering"
        },
        {
          name: "Sarah Lee",
          email: "sarah@example.com",
          role: "Security Analyst",
          department: "Operations"
        }
      ],
      description: "There is a security vulnerability that needs to be addressed.",
      comments: [
        { author: "Robert", text: "Perform a security audit to identify potential vulnerabilities." }
      ],
      attachments: ["security_scan_report.pdf"]
    }
  ];
  

export const Teams = () => {
  const { p_id } = useParams();
  const Project_Id = TeamData.find((proj) => proj.id === Number(p_id));
    const maxWidth='sm';
  return (
    <>
      {/* <h1>Work in progress: {p_id}</h1>
      <div>{Project_Id.assignedTo}</div> */}
      <div className="flex">
         <div>
          <SideBar p_id={p_id}></SideBar>
        </div>

      <section
        className="bg-blur-3xl bg-opacity-30"
        style={{
          backgroundColor: "",
          margin: "0% 5%",
          borderRadius: "10px",
          padding: "1rem",
          backgroundImage: `url(${bgProject})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90vw", // Adjust the width to fit the screen horizontally
          height: "75vh", // Adjust the height to fit the screen vertically
        }}
      >
        <div className="flex pt-4 pb-1 px-5 justify-end">
          <h1 className="text-center mb-0 flex-grow-1 mb-2" style={{ fontFamily: "Arial", fontSize: "20px" }}>
            <span className="bg-white px-4 py-2 rounded-md shadow-md text-navy-blue align-items-center mx-auto text-center">
              Team Members
            </span>
          </h1>
        </div>


        <div className="flex justify-between items-center py-1 px-2">
  <span className="text-xl font-bold">Project Title: {Project_Id.title}</span>
  <div className="flex items-center space-x-4">
  <span className="text-l text-gray-500">
  {/* <Link to="/projectexplore/addmember">
    <button className="rounded-md bg-blue-500 text-white py-2 px-2 hover:bg-blue-600">
      Add Member
    </button>
  </Link> */}
  <div>
    <FormDialog prop={<AddNewMember></AddNewMember>} style={maxWidth} buttonTitle={"Add Member"}></FormDialog>
  </div>
</span>

    {/* Add any additional elements here */}
  </div>
</div>

<section>
<div className="flex flex-col items-center mt-4">
        
        <table className="table-auto w-full mx-auto bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Satrt Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Issues</th>
            </tr>
          </thead>
         
          {/* <tbody>
            <tr className="my-4">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">{Project_Id.assignedTo[0].name}</td>
              <td className="px-4 py-2">{Project_Id.assignedTo[0].email}</td>
              <td className="px-4 py-2">{Project_Id.assignedTo[0].role}</td>
              <td className="px-4 py-2">{Project_Id.type}</td>
              <td className="px-4 py-2">{Project_Id.startDate}</td>
              <td className="px-4 py-2">{Project_Id.endDate}</td>
              <td className="px-4 py-2 underline text-blue-900"><Link to={"/issuedetails"}>Issue</Link></td>
            </tr>

           

        

          </tbody> */}


          <tbody>
          {TeamData.map((issue, index) => (
            <tr key={issue.id} className="my-4 divide-y space-y-5">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{issue.assignedTo[0].name}</td>
              <td className="px-4 py-2">{issue.assignedTo[0].email}</td>
              <td className="px-4 py-2">{issue.assignedTo[0].role}</td>
              <td className="px-4 py-2">{issue.startDate}</td>
              <td className="px-4 py-2">{issue.endDate}</td>
              <td className="px-4 py-2 underline text-blue-900">
                <Link to="/issues">Issue</Link>
              </td>
            
            </tr>
          ))}
        </tbody>

        </table>
      </div>

</section>

        {/* <TeamTable name={Project_Id.assignedTo} ></TeamTable> */}
      </section>
      </div>
    </>
  );
};

const TeamTable = (props) => {
    return (
      <div className="flex flex-col items-center mt-4">
        
        <table className="table-auto w-full mx-auto bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Satrt Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-4">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">{props.name}</td>
              <td className="px-4 py-2">Malcolm Lockyer</td>
              <td className="px-4 py-2">Frontend Developer</td>
              <td className="px-4 py-2">ToDo</td>
              <td className="px-4 py-2">01/01/2023</td>
              <td className="px-4 py-2">10/01/2023</td>
              <td className="px-4 py-2 underline text-blue-900"><Link to={"/issuedetails"}>Issue</Link></td>
            </tr>

           

        


         
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    );
  };
  
