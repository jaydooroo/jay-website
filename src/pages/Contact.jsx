import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your API Gateway endpoint
      const API_ENDPOINT = "YOUR_API_GATEWAY_ENDPOINT";

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSnackbar({
        open: true,
        message: "Message sent successfully! I will get back to you soon.",
        severity: "success",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container className="contact-container">
      <Typography variant="h2" component="h1" className="page-title">
        Get in Touch
      </Typography>

      <Grid container spacing={4} justifyContent={"center"}>
        {/* Contact Information Cards */}
        <Grid item xs={12} md={5}>
          <div className="contact-info-section">
            <Card className="contact-card">
              <CardContent>
                <Typography variant="h5" gutterBottom className="card-title">
                  Contact Information
                </Typography>

                <div className="contact-item">
                  <IconButton
                    className="contact-icon"
                    href="mailto:jehyeonlee27@gmail.com"
                  >
                    <EmailIcon />
                  </IconButton>
                  <div className="contact-text">
                    <Typography variant="subtitle1">Email</Typography>
                    <Typography variant="body1">
                      jehyeonlee27@gmail.com
                    </Typography>
                  </div>
                </div>

                <div className="contact-item">
                  <IconButton
                    className="contact-icon"
                    href="https://linkedin.com/in/jehyeonlee"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <div className="contact-text">
                    <Typography variant="subtitle1">LinkedIn</Typography>
                    <Typography variant="body1">
                      linkedin.com/in/jehyeonlee
                    </Typography>
                  </div>
                </div>

                <div className="contact-item">
                  <IconButton className="contact-icon">
                    <LocationIcon />
                  </IconButton>
                  <div className="contact-text">
                    <Typography variant="subtitle1">Location</Typography>
                    <Typography variant="body1">Provo, Utah</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="availability-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Current Availability
                </Typography>
                <Typography variant="body1">I'm currently open to:</Typography>
                <ul className="availability-list">
                  <li>Full-time Software Engineering positions</li>
                  <li>Freelance projects</li>
                  <li>Technical collaborations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Card className="form-card">
            <CardContent>
              <Typography variant="h5" gutterBottom className="card-title">
                Send Me a Message
              </Typography>

              <form onSubmit={handleSubmit} className="contact-form">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                  disabled={loading}
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                  disabled={loading}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  margin="normal"
                  disabled={loading}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin="normal"
                  disabled={loading}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={
                    loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SendIcon />
                    )
                  }
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
};

export default Contact;
