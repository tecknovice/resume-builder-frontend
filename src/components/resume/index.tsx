import {
  Box,
  Divider,
  IconButton,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Resume } from "../../interfaces/resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
export function ResumeComponent() {
  const { getValues, watch } = useFormContext<Resume>();
  useEffect(() => {
    const data = getValues();
    console.log({ data });
  }, [watch()]);
  const printDocument = () => {
    const input = document.getElementById("resumePaper");
    if (input)
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume.pdf");
      });
  };
  return (
    <Box margin={"auto"} width="210mm">
      <Paper
        id="resumePaper"
        elevation={5}
        sx={{
          width: "210mm",
          minHeight: "297mm",
          borderRadius: 0,
          padding: "16px 64px",
        }}
      >
        {getValues("information") && (
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            py="8px"
          >
            <Typography variant="h3">
              {getValues("information.name")}
            </Typography>
            <Typography variant="subtitle1">
              {getValues("information.mobile")}
            </Typography>
            <Typography variant="subtitle1">
              {getValues("information.email")}
            </Typography>
            {getValues("information.github") && (
              <Box display={"flex"} alignItems="center">
                <GitHub />
                <Typography variant="subtitle1">
                  {getValues("information.github")}
                </Typography>
              </Box>
            )}
            {getValues("information.linkedIn") && (
              <Box display={"flex"} alignItems="center">
                <LinkedIn />
                <Typography variant="subtitle1">
                  {getValues("information.linkedIn")}
                </Typography>
              </Box>
            )}
          </Box>
        )}
        {getValues("summary") && (
          <Box py="8px">
            <Typography variant="subtitle1" textAlign={"center"}>
              {getValues("summary")}
            </Typography>
            <Divider />
          </Box>
        )}
        {getValues("experiences") && (
          <Typography variant="h5">Experiences</Typography>
        )}
        {getValues("experiences")?.map((exp, index) => (
          <Box py="8px" key={index}>
            <Typography fontWeight="bold">{exp.company}</Typography>
            <Box display={"flex"}>
              <Typography marginRight={1}>{exp.jobTitle}</Typography>
              <Typography>{exp.period}</Typography>
            </Box>
            {exp.jobDescriptions?.map((jd, subIndex) => (
              <ListItem sx={{ display: "list-item" }} key={subIndex}>
                {jd}
              </ListItem>
            ))}
          </Box>
        ))}
        {getValues("education") && (
          <Typography variant="h5">Education</Typography>
        )}
        {getValues("education")?.map((edu, index) => (
          <Box py="8px" key={index}>
            <Typography fontWeight="bold">{edu.university}</Typography>
            <Box display={"flex"}>
              <Typography marginRight={1}>{edu.faculty}</Typography>
              {edu.gpa && <Typography>GPA: {edu.gpa}</Typography>}
            </Box>
          </Box>
        ))}
        {getValues("skills") && <Typography variant="h5">Skills</Typography>}
        {getValues("skills")?.map((skill, index) => (
          <ListItem sx={{ display: "list-item" }} key={index}>
            {skill.name}
          </ListItem>
        ))}
      </Paper>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
          bgcolor: "#fff",
          boxShadow: 3,
        }}
        onClick={() => printDocument()}
      >
        <PictureAsPdfOutlinedIcon />
      </IconButton>
    </Box>
  );
}
