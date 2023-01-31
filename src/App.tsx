import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Landing } from './pages';

const customTheme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#011c7e",
      light: "#4e73fe",
      dark: "#01114c",
    },
    text: {
      primary: "#01114c",
      secondary: "#0127b1",
      disabled: "#819bfe",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Landing></Landing>
      </div>
    </ThemeProvider>
  );
}

export default App;
