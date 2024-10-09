import React, { useState } from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField } from "@mui/material";
import Footer from "./Footer";
import Nav from "./Nav";
import Titel from "./Titel";

function Contact() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setInputValue(value);
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
            <form style={{ width: '100%' }}>
              <Box sx={{
                marginBottom: "15px",
                fontSize: { xs: "20px", md: "25px" },
                textAlign: 'center',
                color: '#B77A3E'
              }}>Information</Box>
              <Grid container spacing={2}>
                {['First Name', 'Last Name', 'Email Address', 'Mobile', 'Number of tables'].map((label, index) => (
                  <Grid item xs={12} sm={6} key={index} sx={{ marginTop: "10px" }}>
                    <TextField
                      required
                      label={label}
                      type={label === 'Email Address' ? 'email' : 'text'}
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
                      value={label === 'Mobile' ? inputValue : ''}
                      onInput={label === 'Mobile' ? handleInputChange : undefined}
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
                  />
                </Grid>
              </Grid>

              <Box sx={{ width: "100%", marginTop: "10px", textAlign: 'center' }}>
                <FormControlLabel
                  control={<Checkbox id="consent" name="inputWrapped" />}
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
