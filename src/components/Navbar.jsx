import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 12px var(--shadow-color)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "var(--text-primary)",
              fontWeight: "bold",
              "&:hover": {
                color: "var(--accent-primary)",
              },
            }}
          >
            Jehyeon Lee
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "var(--text-primary)",
                "&:hover": {
                  color: "var(--accent-primary)",
                  backgroundColor: "var(--hover-bg)",
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/projects"
              sx={{
                color: "var(--text-primary)",
                "&:hover": {
                  color: "var(--accent-primary)",
                  backgroundColor: "var(--hover-bg)",
                },
              }}
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{
                color: "var(--text-primary)",
                "&:hover": {
                  color: "var(--accent-primary)",
                  backgroundColor: "var(--hover-bg)",
                },
              }}
            >
              Contact
            </Button>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
