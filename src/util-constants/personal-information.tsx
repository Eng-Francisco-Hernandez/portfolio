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
      "Development of customer facing and administrator cross-platform mobile applications using HTML, Sass, TypeScript, React and the Ionic framework.",
      "Implemented GraphQL API in Node.js project using Express.js and express-graphql to serve queries and mutations for web applications connected using using Apollo Client.",
      "Built endpoints in GraphQL API and implemented new features to extend back-end functionality in Python based project using Graphene-Python library and Starlette framework.",
      "Implemented third party integrations for several services like SMS verification, email sending, broker dealer services and financial services in Node.js and Python based projects.",
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
      "Support on development of digital asset wealth platform.",
      "Gave support and developed new features to extend user experience functionality in existing front-end projects.",
      "Built new endpoints in existing REST API for data manipulation.",
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
      "Development of quotation's web system for RLI insurance company.",
      "Created necessary stylesheets to replicate website with given designs from Figma.",
      "Developed all the required API integrations in the web system by following given Swagger REST API documentation.",
    ],
    technologies: ["Java", "Sass", "Mendix", "Swagger", "Figma"],
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
