import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button, Grid, Typography } from "@mui/material";
import { colors } from "../../util-constants";
const personalResume = require("../../assets/files/personal_resume.pdf");
interface IntroductionProps {
  id?: string;
}

export default function Introduction(props: IntroductionProps) {
  const { id } = props;
  return (
    <Grid
      id={id}
      className="animate__bounceIn"
      container
      spacing={2}
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10}>
        <Typography variant="h6">Hello! I am</Typography>
        <Typography color={colors.TEXT_TERTIARY} variant="h2">
          Francisco Hernández
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          And I love software development!
        </Typography>
        <Typography variant="h6">
          I'm a software engineer who specializes in building scalable,
          maintainable and fault resistant applications that create a great user
          experience using modern and in-demand technologies.
          <br />
          <br />I have a huge passion for programming, which I join with my
          technical knowledge to focus on deliver great software products.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          href={personalResume}
          target="_blank"
          sx={{ mr: 2 }}
          variant="contained"
          className="layout-button"
        >
          View resume
        </Button>
        <AnchorLink
          href="#Work"
          offset={100}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
            className="layout-button"
          >
            See my work
          </Button>
        </AnchorLink>
      </Grid>
    </Grid>
  );
}
