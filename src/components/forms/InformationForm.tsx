import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Resume } from "../../interfaces/resume";

export function InformationForm() {
  const { control } = useFormContext<Resume>();
  return (
    <>
      <Controller
        name="information.name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="name"
            {...field}
          />
        )}
      />
      <Controller
        name="information.email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="email"
            {...field}
          />
        )}
      />
      <Controller
        name="information.mobile"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="mobile"
            {...field}
          />
        )}
      />
      <Controller
        name="information.github"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="github"
            {...field}
          />
        )}
      />
      <Controller
        name="information.linkedIn"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="linkedIn"
            {...field}
          />
        )}
      />
    </>
  );
}
