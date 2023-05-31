import profilePicture from "../../assets/images/Official.jpg";
import { Grid, Typography } from "@mui/material";
import "./about.scss";
import { colors, knownTechnologies } from "../../util-constants";

export default function About(props: any) {
  const { id } = props;
  return (
    <Grid id={id} container spacing={2} sx={{ mt: 20, mb: 8 }}>
      <Grid item xs={8}>
        <Typography color={colors.TEXT_TERTIARY} variant="h5" sx={{ mb: 2 }}>
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
        {knownTechnologies.map((technology, i) => {
          return (
            <div key={i}>
              <Typography color={colors.TEXT_TERTIARY} variant="subtitle1" sx={{ mt: 2 }}>
                {technology.category}
              </Typography>
              <Typography
                component={"span"}
                variant="body2"
                className="custom-col-number-list"
              >
                <ul>
                  {technology.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </Typography>
            </div>
          );
        })}
      </Grid>
      <Grid item xs={4}>
        <Grid item xs={4}>
          <img alt="profile" src={profilePicture} className="profile-picture" />
        </Grid>
      </Grid>
    </Grid>
  );
}
