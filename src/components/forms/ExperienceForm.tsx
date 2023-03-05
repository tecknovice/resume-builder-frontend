import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import { Resume } from "../../interfaces/resume";
import { JobDescriptionsComponent } from "./JobDescriptions";

export function ExperienceForm() {
  const { control } = useFormContext<Resume>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <>
      {fields.map((item, index) => (
        <Box
          key={item.id}
          marginBottom={1}
          borderBottom={index !== fields.length - 1 ? "1px solid #e3e3e3" : ""}
        >
          <Typography>Company {index + 1}</Typography>
          <Controller
            name={`experiences.${index}.jobTitle`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="jobTitle"
                {...field}
              />
            )}
          />
          <Controller
            name={`experiences.${index}.company`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="company"
                {...field}
              />
            )}
          />
          <Controller
            name={`experiences.${index}.period`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="period"
                {...field}
              />
            )}
          />
          {/* <Controller
            name={`experiences.${index}.jobDescription`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="jobDescription"
                {...field}
              />
            )}
          /> */}
          <JobDescriptionsComponent
            control={control}
            name={`experiences.${index}.jobDescriptions`}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: "8px" }}
        onClick={() => append({})}
      >
        Add
      </Button>
    </>
  );
}
