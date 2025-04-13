import React from "react";
import "./Projects.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const projects = [
  {
    title: "PHP Engineer at BYU",
    description:
      "Developed and maintained 4+ web applications using PHP and Laravel including A comprehensive web application for tracking student participation and managing university sport competition, featuring role-based access control and SAML authentication.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "SAML"],
    type: "Professional",
    company: "BYU Technology Department",
    highlights: [
      ,
      "Enhanced security by migrating from CAS to SAML authentication",
      "Implemented role-based access controls for different user types",
      "Optimized database performance using MySQL and PHPMyAdmin",
    ],
    liveDemoLink: "https://isports.byu.edu/",
  },
  {
    title: "AI-Driven Stock Trading System",
    description:
      "An advanced trading system leveraging Deep Q-Networks (DQN) and Multi-Layer Perceptron (MLP) models for real-time stock trading decisions.",
    technologies: ["Python", "Deep Learning", "SQL", "DQN", "MLP"],
    type: "Personal Project",
    status: "In Progress",
    highlights: [
      "Developed AI-powered trading system using Deep Q-Networks",
      "Built data pipeline for continuous financial data retrieval",
      "Implemented real-time AI training and backtesting",
    ],
    githubLink: "https://github.com/jaydooroo/public_dqn_training.git",
  },
  {
    title: "Video Subtitling Platform",
    description:
      "React-based website that automatically generates subtitles using machine learning and AWS cloud technology.",
    technologies: ["React", "AWS", "Machine Learning", "Stripe", "RDS"],
    type: "Professional",
    company: "ROBOFLOW LLC",
    highlights: [
      "Implemented AWS Cognito authentication for web and Chrome extension",
      "Built Stripe-based billing system with AWS Lambda integration",
      "Developed real-time database interactions using RDS",
    ],
  },
  {
    title: "Election Data Analysis Pipeline",
    description:
      "Python-based pipeline processing 50,000+ US election records (1976-2020) for mandate analysis.",
    technologies: ["Python", "SQL", "Tkinter", "Data Engineering"],
    type: "Research",
    company: "BYU Political Science Research",
    highlights: [
      "Engineered data pipeline for vast election datasets",
      "Developed MVC-pattern Tkinter application for data visualization",
      "Implemented complex SQL queries for comprehensive analysis",
    ],
    githubLink: "https://github.com/jaydooroo/vote_mandate_project.git",
  },
  {
    title: "Political Interaction Game",
    description:
      "Research-purpose game simulating human-political interaction with collaborative AI, featuring an administrative dashboard.",
    technologies: ["Flutter", "Dart", "Firebase", "AI"],
    type: "Research",
    company: "BYU AI Lab",
    highlights: [
      "Built administrative dashboard for game management and analytics",
      "Implemented automatic version control and updates",
      "Created real-time database interactions with Firebase",
      "Added 10+ user functionalities including name duplication checks",
    ],
    liveDemoLink: "https://juniorhighgame.com/",
  },
];

const Projects = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container className="projects-container">
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Projects & Experience
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                className="project-card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    {project.type === "Personal Project" ? (
                      <CodeIcon color="primary" />
                    ) : project.type === "Professional" ? (
                      <WorkIcon color="primary" />
                    ) : (
                      <SchoolIcon color="primary" />
                    )}
                    <Typography variant="subtitle2" color="text.secondary">
                      {project.type}
                      {project.company && ` • ${project.company}`}
                    </Typography>
                  </Stack>

                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {project.highlights.map((highlight, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        className="project-highlight"
                        sx={{ mb: 1 }}
                      >
                        {highlight}
                      </Typography>
                    ))}
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mb: 2 }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        className="tech-chip"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <Divider />

                <CardActions
                  sx={{ justifyContent: "flex-end", p: 2 }}
                  className="project-actions"
                >
                  {project.githubLink && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      sx={{ mr: 1 }}
                    >
                      View Code
                    </Button>
                  )}
                  {project.liveDemoLink && (
                    <Button
                      size="small"
                      startIcon={<LinkIcon />}
                      href={project.liveDemoLink}
                      target="_blank"
                      color="primary"
                    >
                      Website
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Want to see more?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/jaydooroo"
            target="_blank"
            sx={{ mt: 2 }}
          >
            Visit My GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
