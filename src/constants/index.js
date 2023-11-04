import {
  css,
  figma,
  git,
  hak,
  html,
  instlogo,
  javascript,
  mobile,
  practice,
  project,
  reactjs,
  redux,
  secondProject,
  tailwind,
  threejs,
  typescript,
  web
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
    title: "React Native Developer",
    icon: mobile,
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
    title: "React.js Developer",
    company_name: "Unicode",
    icon: practice,
    iconBg: "#383E56",
    date: "December 2022 - to now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Pet Project",
    icon: instlogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed a mini-Instagram in React Native with the ability to add, edit and delete posts. There is also a profile page.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Private project",
    icon: hak,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Application for collecting spam numbers for a private client. Frontend development from scratch under the guidance of an experienced mentor.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://next-app-car-showcase.vercel.app/",
  },
  {
    name: "Cards-SPA",
    description:
      "SPA with the display of cards with information about the city. Ability to like/unlike and two options for displaying cards. When pressed, information about the card is displayed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: secondProject,
    source_code_link: "https://johndoe0111.github.io/Cards-Test-Task/",
  },
];

export { services, technologies, experiences, projects };

