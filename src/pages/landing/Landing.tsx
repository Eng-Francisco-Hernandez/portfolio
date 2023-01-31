import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import profilePicture from "../../assets/images/Official.jpg";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, Grid, Paper } from "@mui/material";
import "./landing.scss";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Landing(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Francisco Hernández
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          p: 2,
          width: "100%",
          height: "100%",
          background:
            "rgb(2,0,36) linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(1,27,124,1) 1%, rgba(0,212,255,1) 51%)",
        }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography variant="h5" component="div">
                      Francisco Hernández
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Full-stack developer
                    </Typography>
                    <Typography variant="body2">
                      Creative and inspired full-stack developer with knowledge
                      in building scalable web applications using JavaScript
                      frameworks.
                      <br />
                      <br />
                      Who likes to solve problems and give the user a solution
                      that responds to his requirements and necessities. I have
                      a passion for programming, and I join my technical
                      knowledge to create scalable, maintainable and fault
                      resistant systems that create a great user experience.
                      <br />
                      <br />
                      My repertoire includes programming languages and tools
                      such as Python, JavaScript, TypeScript, ReactJS, Ionic,
                      MUI, Node.js, Express.js, MongoDB, and more.
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={profilePicture} className="profile-picture" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Experience
                </Typography>
                <Typography variant="body1">
                  Full-stack developer — ShareGRO
                </Typography>
                <Typography color="text.secondary">
                  Sep 2021 – Jan 2023
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  ShareGRO is a tailored wealth management platform built on
                  simple yet powerful peer-to-peer sharing.
                </Typography>

                <Typography variant="body1">
                  Full-stack developer — ShareGRO
                </Typography>
                <Typography color="text.secondary">
                  Sep 2021 – Jan 2023
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  ShareGRO is a tailored wealth management platform built on
                  simple yet powerful peer-to-peer sharing.
                </Typography>

                <Typography variant="body1">
                  Full-stack developer — ShareGRO
                </Typography>
                <Typography color="text.secondary">
                  Sep 2021 – Jan 2023
                </Typography>
                <Typography variant="body2">
                  ShareGRO is a tailored wealth management platform built on
                  simple yet powerful peer-to-peer sharing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Education
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Bachelor of Science in Engineering in Systems, Informatics and
                  Computer Science, Universidad Galileo — Guatemala
                </Typography>
                <Typography color="text.secondary">2017 - 2020</Typography>

                <Typography variant="body1">
                  Master of Science in Operations Research, Universidad Galileo
                  — Guatemala
                </Typography>
                <Typography color="text.secondary">2021 - 2022</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5">Main skills</Typography>
                <Typography variant="h6" component="div">
                  Front-end
                </Typography>
                <Typography color="text.secondary">
                  <ul>
                    <li>JavaScript/TypeScript</li>
                    <li> HTML/CSS/SASS</li>
                    <li> Vue.js</li>
                    <li> React.js</li>
                    <li>Bootstrap</li>
                    <li> Ionic</li>
                    <li> MUI</li>
                    <li> Storybook</li>
                    <li> Apollo Client</li>
                  </ul>
                </Typography>

                <Typography variant="h6" component="div">
                  Back-end
                </Typography>
                <Typography color="text.secondary">
                  <ul>
                    <li>JavaScript/Typescript</li>
                    <li> Node.js</li>
                    <li> Express.js</li>
                    <li> EJS</li>
                    <li> MongoDB</li>
                    <li> PostgreSQL</li>
                    <li> Python</li>
                    <li> FastAPI</li>
                    <li> Graphene-Python</li>
                    <li> GraphQL</li>
                    <li> Docker</li>
                    <li> Mendix</li>
                  </ul>
                </Typography>

                <Typography variant="h6" component="div">
                  Tools
                </Typography>
                <Typography color="text.secondary">
                  <ul>
                    <li>Git</li>
                    <li> npm/yarn</li>
                    <li> Heroku</li>
                    <li> Rest and GraphQL APIs</li>
                    <li> MVC</li>
                    <li> Postman Rest Client</li>
                    <li> Figma</li>
                    <li> Invision</li>
                    <li> Jira</li>
                    <li> GCP (Google Compute Engine</li>
                    <li> Google Storage)</li>
                    <li> AWS (EC2</li>
                    <li> ECS</li>
                    <li> ECR</li>
                    <li> Route 53</li>
                    <li> S3</li>
                    <li>CloudFront</li>
                    <li> ELB</li>
                    <li> IAM)</li>
                    <li> GitHub actions</li>
                    <li> GitHub pages</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
