import {
  grabway,
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
  irrss,
  homeify,
} from "../../assets";

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
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Programmer",
    icon: creator,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];
const experiences = [
  {
    title: "Competitive Programmer",
    company_name: "Self-Learning & Practice",
    icon: tesla,  // replace with your preferred icon
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Solved 500+ algorithm and data structure problems on platforms like LeetCode, GeeksForGeeks, and CodeChef.",
      "Strong grasp on problem-solving techniques, optimizing for time and space complexity.",
      "Achieved 5-star Gold Badge in Problem Solving on HackerRank.",
      "Consistently improved coding skills through daily practice and contests.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Personal Projects",
    icon: shopify,  // replace with your preferred icon
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
       "Built several web apps using the MERN stack (MongoDB, Express, React, Node.js).",
    "Created REST APIs and worked on backend logic and database design.",
    "Implemented user authentication and authorization for secure access.",
    "Worked with advanced technologies like TypeScript, Next.js, and AI integration to build modern and scalable applications.",
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Syllogestik Systems",
    icon: meta,  // replace with your preferred icon
    iconBg: "#E6DEDD",
    date: "June 2024 – July 2024",
    points: [
      "Developed scalable Android applications using Jetpack Compose, Kotlin, and MVVM architecture with over 5000 active users.",
      "Implemented RESTful APIs, ensuring modular architecture and adherence to best coding practices.",
      "Collaborated on OrbitX, a real-time chat app built with Firebase Authentication and Cloud Firestore, supporting 100+ daily active users and over 100 messages daily.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Personal Projects",
    icon: starbucks,  // replace with your preferred icon
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Built responsive and polished web apps using React.js, Vanilla JavaScript, and CSS (including Tailwind and Glassmorphism).",
      "Implemented clean UI/UX designs focusing on user experience and accessibility.",
      "Created WeatherMate app featuring geolocation, live time updates, and dynamic themes.",
      "Participated in hackathons such as Build-A-Thon and Smart India Hackathon to solve real-world challenges.",
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
    name: "Grabway",
    description:
      "Ride-sharing webapp connecting users and drivers with Google Maps integration, optimizing commuting for efficient travel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mongo-db",
        color: "pink-text-gradient",
      },
      {
        name: "maps",
        color: "blue-text-gradient",
      },
    ],
    image: grabway,
    source_code_link: "https://github.com/addymistrel/GrabWay.git",
  },
  {
    name: "Railway Rakes Scheduler",
    description:
      "Machine Learning based web app for efficient scheduling of railway rakes with minimal clicks",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
      {
        name: "mongo-db",
        color: "green-text-gradient",
      },
    ],
    image: irrss,
    source_code_link: "https://github.com/Abhinav-2004/SIH-React-Railways.git",
  },
  {
    name: "Homeify",
    description:
      "A new Era clone of Pepperfry.com website using tech like React JS and all other MERN techs.",
    tags: [
      {
        name: "React-JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express-JS",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
    ],
    image: homeify,
    source_code_link: "https://github.com/addymistrel/Homeify.git",
  },
  {
    name: "i-Clean",
    description:
      "A Full Fleshed Backend embedded Web App for Efficient management and tracking of Garbages in cities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/addymistrel/i-Clean-Final",
  },
  {
    name: "Notes & Assignments",
    description:
      "A Full CSS Based Website to maintain all the notes and assignments at one place for easy access whenever required.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/addymistrel/NotesAndAssignments.github.io",
  },
  {
    name: "Volume Control",
    description:
      "A Python Based Program which enables the user to Control Volume of their System with the help of Hand Gestures.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "open-CV",
        color: "green-text-gradient",
      },
      {
        name: "mediapipe",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/addymistrel/Volume-Control",
  }
];

export { services, technologies, experiences, testimonials, projects };
