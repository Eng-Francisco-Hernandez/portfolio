import { Box, Chip, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

interface ExperienceItem {
  company: string;
  title: string;
  date: string;
  summary: string;
  tasks: string[];
  technologies: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    company: "ShareGRO",
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
    company: "Onramp invest",
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
    company: "Mendix / RLI",
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

interface TabPanelProps {
  children: ExperienceItem;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid item sx={{ maxWidth: 700, p: 1 }}>
          <Typography variant="h6">
            {`${children.title} @ ${children.company}`}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {children.date}
          </Typography>
          <Typography component={"span"} variant="body2" color="text.secondary">
            {children.summary}
            <br />
            <ul>
              {children.tasks.map((task, i) => {
                return (
                  <li className="mb-lg" key={i}>
                    {task}
                  </li>
                );
              })}
            </ul>
          </Typography>
          <Typography
            component={"span"}
            variant="body2"
            className="project-technology-list"
          >
            {children.technologies.map((technology, i) => {
              return (
                <Chip
                  sx={{ mr: 1, mb: 1 }}
                  label={technology}
                  size="small"
                  key={i}
                  color="primary"
                />
              );
            })}
          </Typography>
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} sx={{ mt: 15, mb: 8 }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Where I've worked as a consultant
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            maxHeight: 300,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {experienceItems.map((item, i) => {
              return <Tab label={item.company} {...a11yProps(i)} key={i} />;
            })}
          </Tabs>
          {experienceItems.map((item, i) => {
            return (
              <TabPanel value={value} index={i} key={i}>
                {item}
              </TabPanel>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
