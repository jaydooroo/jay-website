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
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent={"center"}
        >
          <Grid item xs={12} md={7}>
            <div className="text-content">
              <Typography variant="h2" component="h1" className="name-title">
                Jehyeon Lee
              </Typography>
              <Typography variant="h4" className="role-title">
                Full-Stack Developer & AI Enthusiast
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
                  Currently: MES Engineer | Aspiring Software Engineer
                </Typography>
                <Typography variant="body1">
                  A recent Computer Science graduate from Brigham Young
                  University with a focus on Data Science and Economics minor.
                  I'm passionate about technology's evolution and dedicated to
                  contributing to its growth through innovative solutions.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  My experience spans full-stack development, AI/ML systems, and
                  cloud technologies. I particularly enjoy working with data,
                  from collection to uncovering valuable insights, which
                  complements my software development skills.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Actively seeking software engineering roles to apply my
                  technical expertise, with future plans to pursue a Master's
                  degree in AI and Data Science or Software Development.
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
            Graduated: December 2024 • GPA: 3.72
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
              <Typography variant="h6">Technical Expertise</Typography>
              <Typography variant="body1">
                <ul style={{ margin: "0.5rem 0", paddingLeft: "1.5rem" }}>
                  <li>
                    Full-stack development with modern frameworks (React,
                    Node.js, PHP, Laravel)
                  </li>
                  <li>
                    Cloud computing and AWS services (DynamoDB, Lambda, SQS,
                    Cognito, Amplify)
                  </li>
                  <li>AI/ML implementation and data engineering</li>
                  <li>Cross-platform mobile development (Flutter, Android)</li>
                  <li>Database design and optimization (MySQL, SQLite, RDS)</li>
                </ul>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="highlight-card">
              <Typography variant="h6">Bilingual Proficiency</Typography>
              <Typography variant="body1">
                Fluent in Korean and English, enabling effective communication
                in diverse environments
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="highlight-card">
              <Typography variant="h6">Teaching Experience</Typography>
              <Typography variant="body1">
                Teaching Assistant for Advanced Algorithms and Computer Systems,
                mentoring 100+ students
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="highlight-card">
              <Typography variant="h6">Research Background</Typography>
              <Typography variant="body1">
                Extensive experience in academic research, including AI/ML
                systems and political data analysis
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default About;
