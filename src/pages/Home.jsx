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
          Data Science & Software Development Enthusiast
        </Typography>
        <Typography variant="body1" className="description">
          A recent Computer Science graduate from Brigham Young University with
          a passion for both Data Science and Software Development. I'm
          fascinated by how technology continues to evolve and am dedicated to
          contributing to its growth through innovative solutions.
        </Typography>
        <Typography variant="body1" className="description" sx={{ mt: 2 }}>
          With expertise in full-stack development, AI/ML systems, and cloud
          technologies, I'm actively seeking opportunities to apply my skills in
          building impactful software solutions. My experience spans from
          developing web applications to implementing machine learning models
          and working with extensive datasets.
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
