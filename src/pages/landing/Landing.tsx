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
            <Introduction />
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
            <About />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
            <Experience />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
            <Projects />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
            <Contact />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
            <Footer />
          </AnimationOnScroll>
        </Container>
        <SocialNetworkItems />
      </Box>
    </Box>
  );
}
