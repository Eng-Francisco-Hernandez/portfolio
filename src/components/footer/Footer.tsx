import { Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export default function Footer() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight={200}
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
    </Grid>
  );
}
