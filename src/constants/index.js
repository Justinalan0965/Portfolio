import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  sql,
  aws,
  tailwind,
  nodejs,
  java,
  git,
  c,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  chatgpt,
  Pricetracker,
  GIFs,
  threejs
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
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Devops",
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
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "Java",
    icon: java,
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
    name: "C",
    icon: c,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "ChatGPT Bot",
    description:
      "A Telegram Bot that inherits futures of chatGPT-3, it allows user to access chatGPT without login and also enables user to make unlimited queries",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "aiogram",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/Justinalan0965/ChatGPT-BOT",
  },
  {
    name: "Price Tracker Bot",
    description:
      "A Telegram Bot that enables user to track the product in E-commerce websites like Amazon,Flipkart and sends alert upon price Drops and increase.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "aiogram",
        color: "pink-text-gradient",
      },
    ],
    image: Pricetracker,
    source_code_link: "https://github.com/Justinalan0965/E-commerce-Price-Tracking-and-Prediction",
  },
  {
    name: "GIF and QRcode Generator",
    description:
      "This Bot lets you generate GIFs and QRcode for any of your text and website URLs. This helps user to share uniquely among their friends and families",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: GIFs,
    source_code_link: "https://github.com/Justinalan0965/TeleBot",
  },
];

export { services, technologies, experiences, testimonials, projects };
