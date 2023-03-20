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
  java,
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
  fighting,
  att,
  threejs,
  asu,
  mehlhase,
  musgrove,
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Shift Supervisor",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2015 - Present",
    points: [
      "Directing teams of people to complete a unified goal of customer satisfaction.",
      "Utilizing time management to create the best experience for partners and customers.",
      "Coaching and teaching partners, new and old, expanding their knowledge and challenging them to learn and grow on their own.",
      "Providing high quality, in-depth feedback to General and District management to ensure positive team growth.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    company_name: "Arizona State University",
    icon: asu,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jan 2023",
    points: [
      "Developing new and challenging assignments and projects for students to work on.",
      "Collaborating with cross-functional teams including professors, students, and other teaching assistants to create high-quality products.",
      "Creating interesting and innovative design pattern videos to provide in-depth instruction",
      "Participating in code reviews, providing constructive feedback, and offering guidance to students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aaron makes fantastic products and was a huge help with his work as a UGTA.",
    name: "Alexandra Mehlhase",
    designation: "Professor",
    company: "Arizona State University",
    image: mehlhase,
  },
  {
    testimonial:
      "Wow, this goes well above and beyond my expectations. Amazing work!",
    name: "Peter Musgrove",
    designation: "Technical Lead",
    company: "AT&T",
    image: musgrove,
  },
  {
    testimonial: "You could have your testimonial here",
    name: "Your Name",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HTML Fighting Game",
    description:
      "A 2D fighting game playable on the HTML Canvas. The game currently features 2 playable characters and makes use of localstorage.",
    tags: [
      {
        name: "html canvas",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fighting,
    source_code_link: "https://github.com/ACordeau/JS-fighting-game",
  },
  {
    name: "Wireless Emergency Alerts",
    description:
      "Web application that allows Alert Originators to view past Wireless Emergency Alerts they have sent out.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: att,
    source_code_link: "https://github.com/ACordeau/",
  },
];

export { services, technologies, experiences, testimonials, projects };
