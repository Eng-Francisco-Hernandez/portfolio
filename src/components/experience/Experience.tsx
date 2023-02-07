import { Box, Chip, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { ExperienceItem, experienceItems } from "../../util-constants";

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
        <Grid item sx={{ p: 1 }}>
          <Typography variant="h6">
            {`${children.title} @ ${
              children.secondaryCompany
                ? children.secondaryCompany
                : children.company
            }`}
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

interface ExperienceProps {
  id?: string;
}

export default function Experience(props: ExperienceProps) {
  const { id } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid id={id} container spacing={2} sx={{ mt: 15, mb: 8 }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Where I've worked
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: "divider", minWidth: 120 }}
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
