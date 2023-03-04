import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { EducationForm } from "./EducationForm";
import {ExperienceForm} from "./ExperienceForm";
import {InformationForm} from "./InformationForm";
import { SkillForm } from "./SkillForm";
import {SummaryForm} from "./SummaryForm";

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Forms() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          component={"div"}
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
        >
          <Tab label="Information" {...a11yProps(0)} />
          <Tab label="Summary" {...a11yProps(1)} />
          <Tab label="Experiences" {...a11yProps(2)} />
          <Tab label="Education" {...a11yProps(3)} />
          <Tab label="Skills" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InformationForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SummaryForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ExperienceForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EducationForm/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SkillForm/>
      </TabPanel>
    </Box>
  );
}
