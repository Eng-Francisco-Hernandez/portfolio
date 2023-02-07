import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Container, Toolbar } from "@mui/material";
import "./landing.scss";
import {
  About,
  Contact,
  Experience,
  Footer,
  Introduction,
  Navbar,
  Projects,
  SocialNetworkItems,
} from "../../components";

export default function Landing() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Box className="main-layout" component="main">
        <Toolbar />
        <Container maxWidth="md">
          <Introduction id="Introduction" />
          <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce>
            <About id="About" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce>
            <Experience id="Experience" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce>
            <Projects id="Work" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce>
            <Contact id="Contact" />
          </AnimationOnScroll>
          <Footer />
        </Container>
        <SocialNetworkItems />
      </Box>
    </Box>
  );
}
