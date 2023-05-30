export const projects = [
    {
      id: 1,
      title: "Project 1",
      startDate: "2023-05-01",
      endDate: "2023-06-01",
      status: "In Progress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur.",
    },
    {
      id: 2,
      title: "Project 2",
      startDate: "2023-06-01",
      endDate: "2023-07-01",
      status: "Completed",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Project 3",
      startDate: "2023-07-01",
      endDate: "2023-08-01",
      status: "Planned",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title: "Project 4",
      startDate: "2023-05-01",
      endDate: "2023-06-01",
      status: "In Progress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur .",
    },
    {
      id: 5,
      title: "Project 5",
      startDate: "2023-06-01",
      endDate: "2023-07-01",
      status: "Completed",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Project 6",
      startDate: "2023-07-01",
      endDate: "2023-08-01",
      status: "Planned",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    }
    // Add more project objects...
  ];



  export const projects1 = [
    {
      id: 1,
      leadName: "John Doe",
      clientName: "Client 1",
      projectTitle: "Project 1",
      startDate: "2023-05-01",
      endDate: "2023-06-01",
      actualStartDate: "2023-05-01",
      actualEndDate: "2023-06-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      projectStatus: "In Progress",
      assignedTo: [
        {
          name: "John Doe",
          email: "john@example.com",
          role: "Developer",
        },
      ],
      comments: [
        {
          author: "Alice",
          text: "Great work so far!",
        },
        {
          author: "Bob",
          text: "Keep it up!",
        },
      ],
      attachments: ["file1.pdf", "file2.doc"],
    },
    {
      id: 2,
      leadName: "Jane Smith",
      clientName: "Client 2",
      projectTitle: "Project 2",
      startDate: "2023-07-01",
      endDate: "2023-08-01",
      actualStartDate: "2023-07-01",
      actualEndDate: "2023-08-01",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectStatus: "Completed",
      assignedTo: [
        {
          name: "Jane Smith",
          email: "jane@example.com",
          role: "Designer",
        },
      ],
      comments: [
        {
          author: "Eve",
          text: "Congratulations on completing the project!",
        },
        {
          author: "Bob",
          text: "Well done!",
        },
      ],
      attachments: ["file3.pdf", "file4.doc"],
    },
    {
      id: 3,
      leadName: "Mark Johnson",
      clientName: "Client 3",
      projectTitle: "Project 3",
      startDate: "2023-06-15",
      endDate: "2023-07-31",
      actualStartDate: "2023-06-15",
      actualEndDate: "2023-07-31",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectStatus: "In Progress",
      assignedTo: [
        {
          name: "Mark Johnson",
          email: "mark@example.com",
          role: "Project Manager",
        },
      ],
      comments: [
        {
          author: "Carol",
          text: "Looking forward to the progress!",
        },
        {
          author: "David",
          text: "Keep up the good work!",
        },
      ],
      attachments: ["file5.pdf", "file6.doc"],
    },
    {
      id: 4,
      leadName: "Sarah Brown",
      clientName: "Client 4",
      projectTitle: "Project 4",
      startDate: "2023-09-01",
      endDate: "2023-10-15",
      actualStartDate: "2023-09-01",
      actualEndDate: "2023-10-15",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      projectStatus: "In Progress",
      assignedTo: [
        {
          name: "Sarah Brown",
          email: "sarah@example.com",
          role: "Developer",
        },
      ],
      comments: [
        {
          author: "Emily",
          text: "Excited about this project!",
        },
        {
          author: "George",
          text: "Let's do our best!",
        },
      ],
      attachments: ["file7.pdf", "file8.doc"],
    },
    {
      id: 5,
      leadName: "Michael Davis",
      clientName: "Client 5",
      projectTitle: "Project 5",
      startDate: "2023-08-01",
      endDate: "2023-09-30",
      actualStartDate: "2023-08-01",
      actualEndDate: "2023-09-30",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      projectStatus: "In Progress",
      assignedTo: [
        {
          name: "Michael Davis",
          email: "michael@example.com",
          role: "Designer",
        },
      ],
      comments: [
        {
          author: "Olivia",
          text: "Let's make it amazing!",
        },
        {
          author: "Sophia",
          text: "Looking forward to the final outcome!",
        },
      ],
      attachments: ["file9.pdf", "file10.doc"],
    },
    {
      id: 6,
      leadName: "Robert Wilson",
      clientName: "Client 6",
      projectTitle: "Project 6",
      startDate: "2023-08-15",
      endDate: "2023-10-31",
      actualStartDate: "2023-08-15",
      actualEndDate: "2023-10-31",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectStatus: "In Progress",
      assignedTo: [
        {
          name: "Robert Wilson",
          email: "robert@example.com",
          role: "Project Manager",
        },
      ],
      comments: [
        {
          author: "Liam",
          text: "Good luck with the project!",
        },
        {
          author: "Emma",
          text: "We're here to support you!",
        },
      ],
      attachments: ["file11.pdf", "file12.doc"],
    },
    // Additional project objects...
  ];