import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import { Resume } from "../../interfaces/resume";

export function SkillForm() {
  const { control } = useFormContext<Resume>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });
  return (
    <>
      <Typography>Additional skills</Typography>
      {fields.map((item, index) => (
        <Controller
          name={`skills.${index}.name`}
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              {...field}
            />
          )}
        />
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
