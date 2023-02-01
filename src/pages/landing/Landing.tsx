import { Container, Toolbar } from "@mui/material";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import "./landing.scss";

export default function Landing() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Box
        className="main-layout"
        component="main"
      >
        <Toolbar />
        <Container maxWidth="md">
          <Introduction />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </Container>
        <SocialNetworkItems />
      </Box>
    </Box>
  );
}
