import { Grid, Typography, Button } from "@mui/material";

export default function Introduction() {
  return (
    <Grid container spacing={2} sx={{ mt: 8, mb: 8 }}>
      <Grid item xs={10}>
        <Typography variant="h6" color="text.secondary">
          Hello! I am
        </Typography>
        <Typography variant="h2">
          Francisco Hernández
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          And I love software development!
        </Typography>
        <Typography variant="h6">
          I'm a software engineer who specializes in building scalable,
          maintainable and fault resistant applications that create a great user
          experience using modern and on-demand technologies.
          <br />
          <br />
          I have a huge passion for programming, which I join with my
          technical knowledge to focus on deliver great software products.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button sx={{ mr: 2 }} variant="contained">
          View resume
        </Button>
        <Button variant="outlined">See my work</Button>
      </Grid>
    </Grid>
  );
}
