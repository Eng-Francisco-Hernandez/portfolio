import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Landing } from './pages';
import './theme/main.scss';
import 'animate.css/animate.min.css';
import { colors } from './util-constants';

const customTheme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
    },
    text: {
      primary: colors.TEXT_PRIMARY,
      secondary: colors.TEXT_SECONDARY,
      disabled: colors.TEXT_DISABLED,
    },
    action: {
      disabledBackground: colors.DISABLED,
      disabled: colors.BACKGROUND_DISABLED,
    },
  },
  typography: {
    fontFamily: `sans-serif, "Roboto", "Helvetica", "Arial"`,
    button: {
      textTransform: "none",
    },
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
