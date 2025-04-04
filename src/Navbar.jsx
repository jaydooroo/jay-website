import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import logo from "./assets/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#f8f4f2",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="lg" sx={{ paddingY: "2rem" }}>
          <Toolbar disableGutters>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", marginRight: "1rem" }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="button_color"
              sx={{
                flexGrow: 1,
                textAlign: "left",
                textDecoration: "none",
                "&:focus": { textDecoration: "none" },
                "&:active": { textDecoration: "none" },
              }}
            >
              Jay's Website
            </Typography>
            <Button className="button_color" component={Link} to="/projects">
              Projects
            </Button>
            <Button className="button_color" component={Link} to="/contact">
              Contact
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
