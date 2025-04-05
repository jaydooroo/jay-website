import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Container className="home-container">
      <Box className="hero-section">
        <Typography variant="h1" className="main-title">
          Hello, I'm <span className="highlight">Jehyeon Lee</span>
        </Typography>
        <Typography variant="h2" className="subtitle">
          Software Engineer & Full-Stack Developer
        </Typography>
        <Typography variant="body1" className="description">
          I specialize in building modern web applications with React, Node.js,
          and cloud technologies. Currently working as a PHP Engineer &
          Full-Stack Developer at BYU Technology Department.
        </Typography>
        <Box className="cta-buttons">
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            className="cta-button primary"
          >
            View My Work
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            className="cta-button secondary"
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
