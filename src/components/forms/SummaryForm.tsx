import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Resume } from "../../interfaces/resume";

export function SummaryForm() {
  const { control } = useFormContext<Resume>();
  return (
    <Controller
      name="summary"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          multiline
          label="Summary"
          variant="outlined"
          fullWidth
          {...field}
        />
      )}
    />
  );
}
