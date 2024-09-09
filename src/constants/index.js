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
  todo,
  movie,
  threejs,
  weather,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
];

const experiences = [
  {
    title: "HTML",
    company_name: "Hyper Text Mark-up Lnaguage",
    icon: html,
    iconBg: "#383E56",
    points: [
      "Developed a strong understanding of HTML semantics, using appropriate tags to create accessible and SEO-friendly content.",
      "Built web pages with complex structures, including forms, tables, multimedia elements, and navigation menus.",
      "Implemented best practices for web development, such as proper document structure, metadata usage, and content organization.",
      "Leveraged HTML5 features like the <canvas>, <audio>, and <video> elements for enhanced user experience and functionality.",
    ],
  },
  {
    title: "CSS",
    company_name: "Cascading Style Sheets",
    icon: css,
    iconBg: "#E6DEDD",
    points: [
      "Learned CSS3 for styling web pages, including layout techniques using Flexbox and Grid.",
      "Created responsive web designs using media queries, ensuring cross-device compatibility.",
      "Implemented advanced styling features like animations, transitions, pseudo-elements, and custom properties (variables).",
      "Designed and implemented visually appealing user interfaces with advanced typography, color theory, and layout principles to enhance user experience.",
    ],
  },
  {
    title: "JS",
    company_name: "Java Script",
    icon: javascript,
    iconBg: "#383E56",
    points: [
      "Built dynamic and interactive web pages using core JavaScript concepts like DOM manipulation, event handling, and asynchronous programming.",
      "Implemented JavaScript ES6+ features, including arrow functions, destructuring, modules, and promises, for modern, efficient code.",
      "Developed data-driven web applications with JSON data handling and API integration using Fetch API.",
      "Applied debugging and testing techniques using browser developer tools to ensure code quality and performance.",
    ],
  },
  {
    title: "React JS",
    company_name: "React JS",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Developed interactive and performant user interfaces by leveraging React's component-based architecture, promoting code reusability and ease of maintenance.",
      "Managed state effectively using React hooks like useState and useEffect, optimizing component performance and reactivity.",
      "Integrated third-party libraries and APIs with React for added functionality and dynamic content.",
      "Utilized React Router for client-side routing to build single-page applications with seamless navigation.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "A dynamic web application that provides real-time weather information for any location worldwide, powered by the OpenWeather API. The app features a user-friendly interface where users can search for a city and instantly view the current weather conditions, including temperature, humidity, wind speed, and weather descriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Incognito691/Weather-app-react",
  },
  {
    name: "To-Do List",
    description:
      "A simple and intuitive To-Do List web application designed to help users manage tasks efficiently. Built with JavaScript and styled using Tailwind CSS, this app offers a clean and modern user interface with functionality that ensures a seamless experience. And also allows users to easily add new tasks to their list and delete tasks as needed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Incognito691/To-Do-task",
  },
  {
    name: "Movie Land",
    description:
      "A sleek and interactive movie search web application that allows users to explore a vast database of movies. Built using JavaScript and styled with Tailwind CSS, this app fetches movie data from an external API, providing users with detailed information about their favorite films. But sadly users can't watch the movies they search.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Incognito691/Movie-Land",
  },
  {
    name: "Weather App",
    description:
      "A dynamic web application that provides real-time weather information for any location worldwide, powered by the OpenWeather API. The app features a user-friendly interface where users can search for a city and instantly view the current weather conditions, including temperature, humidity, wind speed, and weather descriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Incognito691/Weather-app-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
