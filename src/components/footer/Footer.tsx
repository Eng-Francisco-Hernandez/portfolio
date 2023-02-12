import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScrollToTop from "react-scroll-to-top";
import { Fab, Grid, IconButton, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 20, mb: 8 }}
    >
      <Grid item xs={12}>
        <Typography component={"span"} variant="body1" color="text.secondary">
          Built and designed by Francisco Hernández
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IconButton
          href="https://github.com/Eng-Francisco-Hernandez/portfolio"
          target="_blank"
          color="primary"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://eng-francisco-hernandez.github.io/portfolio/"
          target="_blank"
          color="primary"
        >
          <OpenInNewIcon />
        </IconButton>
      </Grid>
      <ScrollToTop
        smooth
        style={{
          background: "none",
          boxShadow: "none"
        }}
        component={
          <div className="mt-lg">
            <Fab size="small" color="primary">
              <ArrowUpwardIcon />
            </Fab>
          </div>
        }
      />
    </Grid>
  );
}
