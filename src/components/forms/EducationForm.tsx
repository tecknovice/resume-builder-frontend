import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import { Resume } from "../../interfaces/resume";

export function EducationForm() {
  const { control } = useFormContext<Resume>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  return (
    <>
      {fields.map((item, index) => (
        <Box
          key={item.id}
          marginBottom={1}
          borderBottom={index !== fields.length - 1 ? "1px solid #e3e3e3" : ""}
        >
          <Typography>Education {index + 1}</Typography>
          <Controller
            name={`education.${index}.university`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="university"
                {...field}
              />
            )}
          />
          <Controller
            name={`education.${index}.faculty`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="faculty"
                {...field}
              />
            )}
          />
          <Controller
            name={`education.${index}.gpa`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="gpa"
                {...field}
              />
            )}
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
