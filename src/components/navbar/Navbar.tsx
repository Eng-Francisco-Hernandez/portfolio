import AnchorLink from "react-anchor-link-smooth-scroll";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { socialNetworkItems } from "../../util-constants";
import "./navbar.scss";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
const drawerWidth = 240;
const navItems = [
  {
    title: "Introduction",
    href: "#Introduction",
  },
  {
    title: "About",
    href: "#About",
  },
  {
    title: "Experience",
    href: "#Experience",
  },
  {
    title: "Work",
    href: "#Work",
  },
  {
    title: "Contact",
    href: "#Contact",
  },
];
const personalResume = require("../../assets/files/personal_resume.pdf");

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="side-bar">
      <Typography variant="h6" sx={{ my: 2 }}>
        Quick links
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <AnchorLink
            href={item.href}
            key={i}
            offset={100}
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </AnchorLink>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href={personalResume}
            target="_blank"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Resume" />
          </ListItemButton>
        </ListItem>
      </List>
      <div className="drawer-social-network-items-container">
        {socialNetworkItems.map((item, i) => {
          return (
            <Fab
              size="small"
              color="primary"
              href={item.link}
              target="_blank"
              key={i}
              sx={{ mr: 2 }}
            >
              {item.icon}
            </Fab>
          );
        })}
      </div>
    </Box>
  );

  return (
    <>
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
            {navItems.map((item, i) => (
              <AnchorLink href={item.href} key={i} offset={100} style={{textDecoration: "none"}}>
                <Button sx={{ color: "#fff" }}>{item.title}</Button>
              </AnchorLink>
            ))}
            <Button
              href={personalResume}
              variant="outlined"
              target="_blank"
              sx={{ color: "#fff", borderColor: "#fff", ml: 2 }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
    </>
  );
}
