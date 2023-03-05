import { IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Controller,
  useFieldArray,
  FieldValues,
  Control,
} from "react-hook-form";

type JdProps = {
  control: Control<FieldValues>;
  name: string;
};

export function JobDescriptionsComponent({ control, name }: JdProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });
  return (
    <>
      {fields.map((item, subIndex) => (
        <Controller
          key={item.id}
          name={`${name}.${subIndex}`}
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={`Job description ${subIndex + 1}`}
              {...field}
            />
          )}
        />
      ))}
      <IconButton onClick={() => append("")}>
        <AddCircleOutlineIcon />
      </IconButton>
    </>
  );
}
