import React from "react";
import "./About.css";
import JehyeonLeeBug from "../assets/JehyeonLee_bug.jpg";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";

const skills = {
  languages: ["JavaScript", "Python", "Java", "Dart", "SQL", "C++", "C", "PHP"],
  technologies: [
    "React",
    "AWS",
    "Firebase",
    "Node.js",
    "Flutter",
    "Vue.js",
    "MySQL",
    "SQLite",
    "HTML",
    "CSS",
  ],
};

const About = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/resume/resume-2025 master.docx";
    link.download = "resume-2025 master.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="about-container">
      <section className="hero-section">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <div className="text-content">
              <Typography variant="h2" component="h1" className="name-title">
                Jehyeon Lee
              </Typography>
              <Typography variant="h4" className="role-title">
                Software Programmer
              </Typography>

              <div className="contact-info">
                <IconButton
                  href="mailto:jehyeonlee27@gmail.com"
                  className="contact-button"
                >
                  <EmailIcon /> <span>jehyeonlee27@gmail.com</span>
                </IconButton>
                <IconButton href="tel:385-977-9965" className="contact-button">
                  <PhoneIcon /> <span>334-224-4235</span>
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/jehyeonlee"
                  target="_blank"
                  className="contact-button"
                >
                  <LinkedInIcon /> <span>linkedin.com/in/jehyeonlee</span>
                </IconButton>
              </div>

              <div className="current-status">
                <Typography variant="h6">
                  Currently: PHP Engineer & Full-Stack Developer at BYU
                  Technology Department
                </Typography>
                <Typography variant="body1">
                  Latest work: Event management system for student participation
                  tracking
                </Typography>
              </div>

              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadResume}
                className="resume-button"
                sx={{ mt: 3 }}
              >
                Download Resume
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="image-container">
              <img
                src={JehyeonLeeBug}
                alt="Jehyeon Lee"
                className="profile-image"
              />
            </div>
          </Grid>
        </Grid>
      </section>

      <section className="education-section">
        <Typography variant="h5" className="section-title">
          <SchoolIcon /> Education
        </Typography>
        <div className="education-content">
          <Typography variant="h6">Brigham Young University</Typography>
          <Typography variant="subtitle1">
            Computer Science - Data Science Emphasis
          </Typography>
          <Typography variant="body1">
            Graduating: December 2024 • GPA: 3.72
          </Typography>
        </div>
      </section>

      <section className="skills-section">
        <Typography variant="h5" className="section-title">
          <CodeIcon /> Technical Skills
        </Typography>

        <div className="skills-content">
          <div className="skill-category">
            <Typography variant="h6">Programming Languages</Typography>
            <div className="skills-chips">
              {skills.languages.map((skill, index) => (
                <Chip key={index} label={skill} className="skill-chip" />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <Typography variant="h6">Technologies & Frameworks</Typography>
            <div className="skills-chips">
              {skills.technologies.map((tech, index) => (
                <Chip key={index} label={tech} className="skill-chip" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <Typography variant="h5" className="section-title">
          Key Highlights
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="highlight-card">
              <Typography variant="h6">Bilingual Proficiency</Typography>
              <Typography variant="body1">
                Fluent in Korean and English
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="highlight-card">
              <Typography variant="h6">Teaching Experience</Typography>
              <Typography variant="body1">
                Teaching Assistant for Advanced Algorithms and Computer Systems
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default About;
