import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactNode } from "react";

export interface SocialNetworkItem {
  link: string;
  icon: ReactNode | string;
}

export const socialNetworkItems: SocialNetworkItem[] = [
  {
    link: "https://github.com/Eng-Francisco-Hernandez",
    icon: <GitHubIcon />,
  },
  {
    link: "https://www.linkedin.com/in/francisco-hern%C3%A1ndez-582377230/",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://medium.com/@fjch87",
    icon: "M",
  },
];

export interface ExperienceItem {
  company: string;
  secondaryCompany?: string;
  title: string;
  date: string;
  summary: string;
  tasks: string[];
  technologies: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    company: "Cognits",
    secondaryCompany: "ShareGRO",
    title: "Full-stack developer",
    date: "Sep 2021 - Jan 2023",
    summary:
      "ShareGRO is a tailored wealth management platform built on simple yet powerful peer-to-peer sharing.",
    tasks: [
      `Worked on the development of a customer facing and administrator web applications using HTML, CSS/SASS, 
      TypeScript (React.js) and the Ionic framework.`,
      `Implemented GraphQL API in a Node.js project using Express.js and express-graphql to serve queries and mutations
      for React.js applications and connected both using Apollo Client.`,
      `Built endpoints in GraphQL API and implemented new features to extend back-end functionality in Python based project
      using Graphene-Python library and the Starlette framework.`,
      `Implemented third party integrations for several services like SMS verification with Twilio, email sending with SendGrid,
      broker dealer services and financial services in Node.js and Python based projects.`,
      `Built Node.js project and used the Serverless framework to declare AWS Lambda functions using TypeScript, with the purpose of having 
      different cron-jobs that performed certain logic related with the user's information.`,
      `Created the necessary infrastructure to host static builds of React.js applications and a containerized Express.js application using 
      AWS S3, CloudFront, Route53, ECR and ECS.`,
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "Ionic",
      "Sass",
      "Python",
      "Graphene-Python",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Storybook",
      "Serverless Framework",
      "EC2",
      "ECS",
      "ECR",
      "S3",
      "CloudFront",
      "Route53",
      "Lambda Functions",
    ],
  },
  {
    company: "Cognits",
    secondaryCompany: "Onramp invest",
    title: "Full-stack developer",
    date: "Jul 2021 - Sep 2021",
    summary:
      "Onramp Invest supports crypto wealth management, providing financial advisors with seamless access to digital assets and integrated CRM tools.",
    tasks: [
      `Gave support and developed new features to extend user experience functionality in existing front-end projects 
      using JavaScript, Vue.js and CSS.`,
      `Built new endpoints in existing REST API for data manipulation using FastAPI in Python based project.`,
    ],
    technologies: ["JavaScript", "Node.js", "Vue.js", "Python", "FastAPI"],
  },
  {
    company: "Cognits",
    secondaryCompany: "Mendix / RLI",
    title: "Mendix full-stack developer",
    date: "Mar 2021 - Sep 2021",
    summary:
      "Mendix is the fastest & easiest low-code platform used by businesses to develop mobile & web apps at scale. RLI is a U.S.-based specialty insurer that serves niche property, casualty and surety markets.",
    tasks: [
      `Created necessary stylesheets using CSS/Sass to replicate quotation's web system for insurance company using the 
      corresponding brand guidelines coming from Figma designs.`,
      `Developed all the required API integrations in quotation's web system by following the given Swagger REST API 
      documentation using the Mendix technology.`,
    ],
    technologies: ["Java", "Sass", "Mendix", "Swagger", "Figma"],
  },
  {
    company: "Galileo University",
    title: "Software engineer and Teaching Assistant",
    date: "01/2019 - 11/2022",
    summary: `Worked on the development of a web platform for assignments management and to support the learning process of the students.
              Teaching assistant in several Computer Science courses. My task consisted in supporting students in laboratories 
              building algorithms when teaching them important basic concepts using programming languages.`,
    tasks: [
      "Developed a college level web system used by 200+ users for the administration of class assignments in Computer Science courses using Node.js, Express.js, EJS, Google Compute Engine, MongoDB Atlas and Bootstrap among others",
      "Developed lessons for and taught a class of over 25 students",
      "Developed and carry out of laboratory activities for 4 different Computer Science courses",
      "Implemented teaching guides independently for classrooms of over 25 students",
    ],
    technologies: [
      "Front-End Development",
      "Bootstrap",
      "HTML",
      "Computer Science",
      "Algorithms",
      "Data Structures",
      "University Teaching",
      "Java",
      "JavaScript Libraries",
      "Software Development",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    company: "Pragmation",
    title: "Freelance Software engineer",
    date: "07/2021 - 08/2021",
    summary:
      "Performed tasks to extend the functionality of online store of mobile airtime.",
    tasks: [
      "Extended functionality in Python based project to buy mobile airtime.",
      "Integrated existing system with Reloadly API to perform actions such as buying mobile airtime with several providers in several countries",
    ],
    technologies: ["Python", "FastAPI"],
  },
];
