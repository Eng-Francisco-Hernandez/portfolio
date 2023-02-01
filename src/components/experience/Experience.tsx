import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

interface TabItem {
  title: string;
  content: React.ReactNode | string;
}

const tabItems: TabItem[] = [
  {
    title: "ShareGRO",
    content: "ShareGRO",
  },
  {
    title: "Onramp",
    content: "Onramp",
  },
  {
    title: "RLI",
    content: "RLI",
  },
  {
    title: "Pragmation",
    content: "Pragmation",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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
          Where I've worked
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
            {tabItems.map((tabItem, i) => {
              return <Tab label={tabItem.title} {...a11yProps(i)} key={i} />;
            })}
          </Tabs>
          {tabItems.map((tabItem, i) => {
            return (
              <TabPanel value={value} index={i} key={i}>
                {tabItem.content}
              </TabPanel>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
