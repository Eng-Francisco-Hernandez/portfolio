import profilePicture from "../../assets/images/Official.jpg";
import { Grid, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Typography variant="h6" color="text.secondary">
          Hello! I am
        </Typography>
        <Typography variant="h2" component="div">
          Francisco Hernández
        </Typography>
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>
          And I love to create!
        </Typography>
        <Typography variant="h6">
          I'm a creative and inspired full-stack developer with knowledge in building
          scalable web applications using JavaScript frameworks and libraries.
          <br />
          <br />
          My repertoire includes programming languages and tools such as Python,
          JavaScript, TypeScript, ReactJS, Ionic, MUI, Node.js, Express.js,
          MongoDB, and more.
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
