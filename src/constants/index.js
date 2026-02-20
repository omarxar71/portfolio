import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  egyptdashboard,
  jobFinder,
  doctorWebsite, 
  netbook,
  ecommerce,
  baron
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
  title: "Backend Developer Intern (Node.JS)",
  company_name: "elmenus",

  iconBg: "#E62E2D", 
  date: "July 2025 - September 2025", // Adjust to your actual dates
  points: [
    "Architected and maintained scalable server-side logic using Node.js and Express.js to support high-concurrency food ordering traffic.",
    "Designed and optimized RESTful APIs for seamless integration between the mobile app and internal database systems.",
    "Managed and structured complex data models in MongoDB, focusing on query optimization and data integrity for real-time menu updates.",
    "Collaborated on backend performance tuning and implemented secure authentication flows to protect user and vendor data.",
  ],
  },
  {
   title: "Freelance Web Developer",
  company_name: "Project-Based",

  iconBg: "#383E56",
  date: "Jan 2025",
  points: [
    "Successfully delivered [Doctor Personal Website] within strict deadlines and budget constraints.",
    "Optimized website performance and SEO, leading to improved search rankings and faster load times for the client's end-users.",
    "Provided ongoing technical support and maintenance, ensuring 99.9% uptime for client applications."
  ],
  },
  {
  title: "Freelance Full-Stack Developer",
  company_name: "Independent Contractor",
  iconBg: "#E6DEDD",
  date: "2025 - Present",
  points: [
    "Developed a full-featured E-commerce platform using Angular for the frontend and Node.js/Express for the scalable backend.",
    "Built a dynamic product management system and shopping cart functionality using JavaScript (ES6+) and optimized MongoDB schemas for fast data retrieval.",
    "Integrated secure payment gateways and user authentication to ensure a safe and seamless checkout experience for customers.",
    "Designed a mobile-first, responsive interface with HTML5 and CSS3, ensuring high performance and cross-browser compatibility.",
    "Implemented automated order tracking and email notification services to improve customer engagement and operational efficiency.",
  ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Egypt Dashboard",
    description:
      "A real-time data dashboard centered around displaying historical and live weather and pollution data for Cairo, utilizing machine learning to provide insightful environmental analytics.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: egyptdashboard, // Ensure this variable matches your project screenshot import
    source_code_link: "https://github.com/omarxar71/live-egypt-dashboard-for-weather-using-machine-learning",
  },
 {
    name: "Job Searching",
    description:
      "A full-stack job portal designed to help users discover opportunities, manage their professional profiles, and track applications with a real-time backend system.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobFinder, // Consider renaming this variable to 'jobSearchingImg' for clarity
    source_code_link: "https://github.com/omarxar71/job-searching",
  },
 {
    name: "Dr. Jon Shenfine",
    description:
      "A professional medical portfolio and personal website for a surgeon, designed to showcase expertise, manage patient information, and provide an accessible interface for healthcare services.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: doctorWebsite, // Ensure this variable name matches your asset import
    source_code_link: "https://github.com/omarxar71/Dr.jon-Shenfine-",
  },






{
    name: "Social App",
    description:
      "A dynamic social networking platform that enables users to connect, share content, and interact in real-time, featuring a robust user authentication and data management system.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: netbook, // Update this variable name to match your asset import
    source_code_link: "https://github.com/omarxar71/social-app",
  },






{
    name: "E-Commerce Platform",
    description:
      "A fully functional e-commerce application featuring product catalogs, shopping cart logic, and user authentication, built to provide a seamless online shopping experience.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce, 
    source_code_link: "https://github.com/omarxar71/E-commerce",
  },



  {
    name: "Baron Bistro",
    description:
      "A sleek, professional restaurant website featuring interactive menus and a seamless reservation system, designed to enhance the digital presence and customer engagement for a high-end bistro.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: baron, // Ensure this variable name matches your asset import
    source_code_link: "https://github.com/omarxar71/Baron-Bistro",
  },
];

export { services, technologies, experiences, testimonials, projects };
