import profilePicture from "../../assets/images/Official.jpg";
import { Grid, Typography } from "@mui/material";
import "./about.scss";

export default function About() {
  return (
    <Grid container spacing={2} sx={{ mt: 20, mb: 8 }}>
      <Grid item xs={8}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          About me
        </Typography>
        <Typography component={"span"} variant="body1" color="text.secondary">
          My name is Francisco, and I love software development since it allows
          me to create new things, such as web and mobile applications, turning
          ideas into reality!
          <br />
          <br />
          Here are some of the technologies I've been working with recently
        </Typography>
        <Typography component={"span"} variant="body2" className="custom-col-number-list">
          <ul>
            <li> JavaScript (ES6+) </li>
            <li> TypeScript </li>
            <li> HTML/CSS/SASS</li>
            <li> React.js</li>
            <li> Ionic</li>
            <li> MUI</li>
            <li> Storybook</li>
            <li> Apollo Client</li>
            <li> Node.js</li>
            <li> Express.js</li>
            <li> MongoDB</li>
            <li> PostgreSQL</li>
            <li> Python</li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Grid item xs={4}>
          <img src={profilePicture} className="profile-picture" />
        </Grid>
      </Grid>
    </Grid>
  );
}
