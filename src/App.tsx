import { Box, Paper } from "@mui/material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import Forms from "./components/forms";
import { ResumeComponent } from "./components/resume";
import { Resume } from "./interfaces/resume";

function App() {
  const methods = useForm<Resume>();
  const { watch, getValues, handleSubmit } = methods;
  const onSubmit = (data: Resume) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Box bgcolor="#e6e6e6" display="flex" minHeight="100vh">
        <Box width="25%">
          <Paper
            elevation={5}
            sx={{ width: "100%", minHeight: "100%", borderRadius: 0 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Forms />
            </form>
          </Paper>
        </Box>
        <Box width="75%" padding={"50px 100px"}>
          <ResumeComponent />
        </Box>
      </Box>
    </FormProvider>
  );
}

export default App;
