import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Landing } from "./pages";
import "./theme/main.scss";

const customTheme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#000a41",
      light: "#4e73fe",
      dark: "#01114c",
    },
    text: {
      primary: "#f0f3ff",
      secondary: "#e1e7ff",
      disabled: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: `sans-serif, "Roboto", "Helvetica", "Arial"`,
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
