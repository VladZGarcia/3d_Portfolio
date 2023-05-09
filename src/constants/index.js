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
  kotlin,
  swift,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  googlemaps,
  doggydaycare,
  moviegram,
  threedportfolio,
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
    title: "iOS Swift Developer",
    icon: mobile,
  },
  {
    title: "Android Kotlin Developer",
    icon: backend,
  },
  {
    title: "Database Management ",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
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
  /* {
    name: "MongoDB",
    icon: mongodb,
  }, */
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
  }/* ,
  {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  {
    title: "Android Kotlin",
    company_name: "Banquito Game",
    icon: kotlin,
    iconBg: "#383E56",
    date: "September 2022",
    points: [
      "First android application using kotling ",
      "CardGame where you try to have a higher value then the bank",
      "Implementing a gameconcept and idea into code",
      "Exploring the possibilities using the android platform",
    ],
  },
  {
    title: "Firebase Firestore",
    company_name: "Hidden gem - Smultronstället",
    icon: firebase,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "First experience with Firebase database",
      "Collaborating with a developer team including product managers, and cooperating to create high-quality product.",
      "Implementing responsive design and ensuring customer/owner information.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "iOS Swift",
    company_name: "Tic-tac-toe game",
    icon: swift,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "A tic tac toe game against human and computer player.",
      "First experience developing an AI-player.",
      "Implementing the apple way of developing apps.",
      "Turnbase game with different outcomes.",
    ],
  },
  {
    title: "Google Maps integration",
    company_name: "FamilyApp",
    icon: googlemaps,
    iconBg: "#E6DEDD",
    date: "February 2023",
    points: [
      "Created a family location/organicer app.",
      "Implemented the possibility to create group location and tracking.",
      "Integrated with firebase authentication and database.",
      "This is an app that I would like to keep developing.",
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
    name: "DoggyDayCare",
    description:
      "Web-based platform that downloads an API of dogs registered in a kindergarden for dogs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "WebApi",
        color: "green-text-gradient",
      },
      {
        name: "GitHub-Pages",
        color: "pink-text-gradient",
      },
    ],
    image: doggydaycare,
    source_code_link: "https://vladzgarcia.github.io/doggydaycare//",
  },
  {
    name: "moviegram",
    description:
      "Webshop for posterfanatics. Group project under development. Using firebase and API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "pink-text-gradient",
      },
    ],
    image: moviegram,
    source_code_link: "https://github.com/AndreiPirHu/Moviegram.git",
  },
  {
    name: "3d Portfolio",
    description:
      "Using ThreeJS and animation i constructed a 3D Developer Portfolio, implemented the possibility to send email through a form in the website.",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "React three fiber",
        color: "pink-text-gradient",
      },
    ],
    image: threedportfolio,
    source_code_link: "https://vladzgarcia.github.io/3d_portfolio/",
  },
];

export { services, technologies, experiences, testimonials, projects };