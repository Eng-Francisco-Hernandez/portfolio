import { Container, Toolbar } from "@mui/material";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { About, Navbar, SocialNetworkItems } from "../../components";
import "./landing.scss";

export default function Landing() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Box
        className="main-layout"
        component="main"
        sx={{
          p: 2,
        }}
      >
        <Toolbar />
        <Container maxWidth="md">
          <About />
        </Container>
        <SocialNetworkItems />
      </Box>
    </Box>
  );
}
