export const issues = [
  {
    id: 1,
    title: "Login Page Alignment Issue",
    name: "Fix login page alignment",
    type: "Bug",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-20",
    endDate: "2023-05-25",
    assignedTo: "Jane Smith",
    description: "The login page is not aligned properly on mobile devices.",
    comments: [
      { author: "David", text: "This issue affects user experience." }
    ],
    attachments: ["bug_screenshot_1.png"]
  },
  {
    id: 2,
    title: "User Authentication Implementation",
    name: "Implement user authentication",
    type: "Feature",
    priority: "High",
    status: "IN PROGRESS",
    startDate: "2023-05-18",
    endDate: "2023-05-28",
    assignedTo: "John Doe",
    description: "Add user authentication functionality to the application.",
    comments: [
      { author: "Alice", text: "This feature is critical for security." },
      { author: "Bob", text: "I can assist with the implementation." }
    ],
    attachments: ["auth_flow_diagram.png"]
  },
  {
    id: 3,
    title: "Product Pricing Update",
    name: "Update product pricing",
    type: "Task",
    priority: "Low",
    status: "IN REVIEW",
    startDate: "2023-05-23",
    endDate: "2023-05-30",
    assignedTo: "Emily Johnson",
    description: "Review and update the pricing of all products in the database.",
    comments: [
      { author: "Charlie", text: "Make sure to consider competitor prices." }
    ],
    attachments: ["pricing_update_spreadsheet.xlsx", "pricing_update_notes.docx"]
  },
  {
    id: 4,
    title: "Codebase Refactoring",
    name: "Refactor codebase",
    type: "Task",
    priority: "High",
    status: "DONE",
    startDate: "2023-05-15",
    endDate: "2023-05-25",
    assignedTo: "Alex Thompson",
    description: "Perform code refactoring to improve code quality and maintainability.",
    comments: [
      { author: "Eva", text: "This will help reduce technical debt." }
    ],
    attachments: ["refactoring_guide.pdf"]
  },
  {
    id: 5,
    title: "Search Functionality Implementation",
    name: "Add search functionality",
    type: "Feature",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-22",
    endDate: "2023-05-30",
    assignedTo: "Sarah Davis",
    description: "Implement search functionality to allow users to search for products.",
    comments: [
      { author: "Daniel", text: "Consider using a search library for better performance." }
    ],
    attachments: ["search_ui_mockup.png"]
  },
  {
    id: 6,
    title: "Broken Links Fixing",
    name: "Fix broken links",
    type: "Bug",
    priority: "Low",
    status: "IN PROGRESS",
    startDate: "2023-05-19",
    endDate: "2023-05-24",
    assignedTo: "Mark Wilson",
    description: "Identify and fix broken links across the website.",
    comments: [
      { author: "Grace", text: "This issue can affect SEO." },
      { author: "Robert", text: "I found some broken links on the homepage." }
    ],
    attachments: ["broken_links_report.xlsx"]
  },
  {
    id: 7,
    title: "Performance Optimization",
    name: "Optimize application performance",
    type: "Task",
    priority: "High",
    status: "IN REVIEW",
    startDate: "2023-05-21",
    endDate: "2023-05-29",
    assignedTo: "Olivia Baker",
    description: "Identify and implement performance optimizations to improve application speed.",
    comments: [
      { author: "Sophia", text: "Consider caching frequently accessed data." },
      { author: "Andrew", text: "We should also monitor server response times." }
    ],
    attachments: ["performance_analysis_report.pdf", "optimization_recommendations.docx"]
  },
  {
    id: 8,
    title: "User Profile Page Design",
    name: "Design user profile page",
    type: "Task",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-25",
    endDate: "2023-06-02",
    assignedTo: "Jacob Martinez",
    description: "Create a visually appealing design for the user profile page.",
    comments: [
      { author: "Lily", text: "Consider adding a profile picture section." }
    ],
    attachments: ["user_profile_wireframe.png"]
  },
  {
    id: 9,
    title: "Email Notifications Integration",
    name: "Integrate email notifications",
    type: "Feature",
    priority: "High",
    status: "TO DO",
    startDate: "2023-05-23",
    endDate: "2023-06-01",
    assignedTo: "Sophie White",
    description: "Implement email notifications to keep users informed about important updates.",
    comments: [
      { author: "James", text: "We need to handle email templates dynamically." },
      { author: "Ava", text: "Consider integrating with a transactional email service." }
    ],
    attachments: ["notification_integration_guide.docx"]
  },
  {
    id: 10,
    title: "Database Schema Optimization",
    name: "Optimize database schema",
    type: "Task",
    priority: "Medium",
    status: "IN PROGRESS",
    startDate: "2023-05-20",
    endDate: "2023-06-05",
    assignedTo: "Henry Wilson",
    description: "Analyze and optimize the database schema for improved performance.",
    comments: [
      { author: "Mia", text: "We should eliminate redundant indexes." },
      { author: "David", text: "Consider denormalization to reduce join operations." }
    ],
    attachments: ["schema_optimization_recommendations.pdf"]
  },
  {
    id: 11,
    title: "Error Logging and Monitoring",
    name: "Implement error logging and monitoring",
    type: "Feature",
    priority: "High",
    status: "IN REVIEW",
    startDate: "2023-05-24",
    endDate: "2023-06-03",
    assignedTo: "Emma Thompson",
    description: "Set up error logging and monitoring to track and resolve application errors.",
    comments: [
      { author: "Noah", text: "We should integrate with a centralized logging system." },
      { author: "Abigail", text: "Consider implementing real-time error alerts." }
    ],
    attachments: ["error_logging_guide.docx", "monitoring_setup_instructions.pdf"]
  },
  {
    id: 12,
    title: "User Feedback Collection",
    name: "Collect user feedback",
    type: "Task",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-25",
    endDate: "2023-06-07",
    assignedTo: "Ethan Davis",
    description: "Implement a mechanism to collect feedback from users.",
    comments: [
      { author: "Harper", text: "We can use surveys or feedback forms for this." }
    ],
    attachments: ["feedback_collection_plan.docx"]
  },
  {
    id: 13,
    title: "Mobile Responsiveness Enhancement",
    name: "Enhance mobile responsiveness",
    type: "Task",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-22",
    endDate: "2023-06-04",
    assignedTo: "Aiden Rodriguez",
    description: "Improve the responsiveness of the website on mobile devices.",
    comments: [
      { author: "Scarlett", text: "We should use media queries to adapt the layout." }
    ],
    attachments: ["responsive_design_guidelines.pdf"]
  },
  {
    id: 14,
    title: "Localization Support",
    name: "Add localization support",
    type: "Feature",
    priority: "Low",
    status: "IN PROGRESS",
    startDate: "2023-05-19",
    endDate: "2023-06-01",
    assignedTo: "Lucas Lee",
    description: "Implement support for multiple languages in the application.",
    comments: [
      { author: "Victoria", text: "We should use language resource files for translations." },
      { author: "Jackson", text: "Consider adding language selection in user settings." }
    ],
    attachments: ["localization_implementation_guide.docx"]
  },
  {
    id: 15,
    title: "Payment Gateway Integration",
    name: "Integrate payment gateway",
    type: "Feature",
    priority: "High",
    status: "DONE",
    startDate: "2023-05-16",
    endDate: "2023-05-25",
    assignedTo: "Elizabeth Hill",
    description: "Integrate a payment gateway to facilitate online transactions.",
    comments: [
      { author: "Christopher", text: "We should support multiple payment methods." }
    ],
    attachments: ["payment_integration_guide.pdf"]
  },
  {
    id: 16,
    title: "Analytics Dashboard Development",
    name: "Develop analytics dashboard",
    type: "Feature",
    priority: "Medium",
    status: "IN REVIEW",
    startDate: "2023-05-21",
    endDate: "2023-06-02",
    assignedTo: "Gabriel Moore",
    description: "Create a dashboard to visualize and analyze application analytics.",
    comments: [
      { author: "Madison", text: "We can use charting libraries for data visualization." },
      { author: "Joshua", text: "Make sure to include key metrics and filters." }
    ],
    attachments: ["analytics_dashboard_prototype.png", "analytics_requirements.docx"]
  },
  {
    id: 17,
    title: "Automated Testing Implementation",
    name: "Implement automated testing",
    type: "Task",
    priority: "High",
    status: "IN PROGRESS",
    startDate: "2023-05-20",
    endDate: "2023-06-05",
    assignedTo: "Natalie Anderson",
    description: "Set up automated tests to ensure application stability and reliability.",
    comments: [
      { author: "Elijah", text: "We should use a testing framework for better maintainability." },
      { author: "Chloe", text: "Consider implementing both unit tests and integration tests." }
    ],
    attachments: ["automated_testing_guidelines.pdf"]
  },
  {
    id: 18,
    title: "Social Media Sharing Integration",
    name: "Integrate social media sharing",
    type: "Feature",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-23",
    endDate: "2023-06-07",
    assignedTo: "Liam Clark",
    description: "Add social media sharing functionality to allow users to share content.",
    comments: [
      { author: "Zoe", text: "We should support major social media platforms." }
    ],
    attachments: ["sharing_integration_guide.docx"]
  },
  {
    id: 19,
    title: "Email Subscription Feature",
    name: "Implement email subscription",
    type: "Feature",
    priority: "Low",
    status: "IN PROGRESS",
    startDate: "2023-05-19",
    endDate: "2023-06-01",
    assignedTo: "Stella Lewis",
    description: "Allow users to subscribe to receive email updates and newsletters.",
    comments: [
      { author: "Nathan", text: "We should provide options to manage subscription preferences." },
      { author: "Hannah", text: "Consider implementing double opt-in for better data privacy." }
    ],
    attachments: ["subscription_feature_requirements.docx"]
  },
  {
    id: 20,
    title: "User Onboarding Flow Enhancement",
    name: "Enhance user onboarding flow",
    type: "Task",
    priority: "Medium",
    status: "TO DO",
    startDate: "2023-05-22",
    endDate: "2023-06-04",
    assignedTo: "Christopher Turner",
    description: "Improve the user onboarding process to increase user engagement.",
    comments: [
      { author: "Addison", text: "We should provide clear instructions and tooltips." }
    ],
    attachments: ["onboarding_flow_diagram.png"]
  }
];
