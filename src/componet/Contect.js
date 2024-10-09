import React, { useState } from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField } from "@mui/material";
import Footer from "./Footer";
import Nav from "./Nav";
import Titel from "./Titel";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    numberOfTables: '',
    message: '',
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      // Allow only numbers and limit to 10 digits
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with your submission logic
  };

  return (
    <>
      <Nav />
      <Titel
        url={"https://avatars.mds.yandex.net/i?id=30e0cb3573dde2bc71687c6f4efcc234_l-9182360-images-thumbs&ref=rim&n=13&w=1200&h=800"}
        Name={"Contact us"}
      />
      <Box sx={{ backgroundColor: '#EEEEEE', padding: '20px 0' }}>
        <Container maxWidth="md">
          <Box sx={{
            width: "100%",
            margin: "auto",
            padding: { xs: '7px', md: '20px' },
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            marginBottom: "40px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Box sx={{
              fontSize: { xs: "17px", md: "21px" },
              color: "gray",
              textAlign: 'center',
              marginBottom: '10px'
            }}>
              The Inquiry Form widget allows you to design unique forms to capture your leads. This form automatically connects with the integrated Houzez CRM and your email inbox to keep everything on track.
            </Box>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Box sx={{
                marginBottom: "15px",
                fontSize: { xs: "20px", md: "25px" },
                textAlign: 'center',
                color: '#B77A3E'
              }}>Information</Box>
              <Grid container spacing={2}>
                {[
                  { label: 'First Name', name: 'firstName' },
                  { label: 'Last Name', name: 'lastName' },
                  { label: 'Email Address', name: 'email', type: 'email' },
                  { label: 'Mobile', name: 'mobile' },
                  { label: 'Number of tables', name: 'numberOfTables' },
                ].map(({ label, name, type = 'text' }, index) => (
                  <Grid item xs={12} sm={6} key={index} sx={{ marginTop: "10px" }}>
                    <TextField
                      required
                      label={label}
                      type={type}
                      name={name}
                      variant="outlined"
                      sx={{
                        width: "100%",
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          '& fieldset': {
                            borderColor: 'grey',
                          },
                          '&:hover fieldset': {
                            borderColor: '#B77A3E',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#B77A3E',
                          },
                        },
                      }}
                      value={formData[name]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                ))}
              </Grid>

              <Box sx={{
                marginTop: "20px",
                fontSize: { xs: "20px", md: "25px" },
                textAlign: 'center',
                color: '#B77A3E'
              }}>Message</Box>
              <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                <Grid item xs={12}>
                  <TextField
                    id="message"
                    name="message"
                    multiline
                    rows={3}
                    variant="outlined"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: '#B77A3E',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#B77A3E',
                        },
                      },
                    }}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Box sx={{ width: "100%", marginTop: "10px", textAlign: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="I consent to having this website store my submitted information"
                />
              </Box>
              <Box sx={{ marginTop: "10px", textAlign: 'center' }}>
                <Button type="submit" sx={{
                  width: "100%",
                  color: "white",
                  fontSize: { xs: "18px", md: "24px" },
                  backgroundColor: "#B77A3E",
                  borderRadius: "10px",
                  '&:hover': { backgroundColor: "#a66b2e" }
                }}>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Contact;
