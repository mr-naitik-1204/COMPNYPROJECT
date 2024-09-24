import React, { useState } from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, MenuItem, Select, TextField } from "@mui/material";
import Footer from "./Footer";
import Nav from "./Nav";
import Titel from "./Titel";

function Contect() {
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setType(event.target.value);
  };
  
  return (
    <>
      <Nav />
      <Titel
        url={"https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Contact-title-area-img-1.jpg"}
        Name={"Contact us"}
      />
      <Box>
        <Container maxWidth="md">
          <Box sx={{ width: "85%", margin: "auto", marginBottom: "100px" }}>
            <Box sx={{ fontSize: "22px", color: "gray" }}>
              The Inquiry Form widget allows you to design unique forms to capture your leads. This form automatically connects with the integrated Houzez CRM and your email inbox to keep everything on track.
            </Box>
            <form>
              <Box sx={{ marginTop: "80px", fontSize: "25px" }}>Information</Box>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "100%", marginTop: "10px" }}
              >
                <MenuItem value="">I'm a</MenuItem>
                <MenuItem value={20}>I'm a real estate agent</MenuItem>
                <MenuItem value={30}>I'm a property owner</MenuItem>
              </Select>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                  <TextField
                    required
                    id="first-name"
                    label="First Name"
                    type="text"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                  <TextField
                    required
                    id="last-name"
                    label="Last Name"
                    type="text"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    label="Email Address"
                    type="email"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobile"
                    label="Mobile"
                    type="number"
                    variant="outlined"
                    value={inputValue}
                    onInput={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\D/g, '').slice(0, 10);
                      setInputValue(value);
                    }}
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ marginTop: "30px", fontSize: "25px" }}>Property</Box>
              <Select
                value={type}
                onChange={handleChange2}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "100%", marginTop: "10px" }}
              >
                <MenuItem value="">Select type</MenuItem>
                <MenuItem value="Large Luxury Villa">Large Luxury Villa</MenuItem>
                <MenuItem value="Single Family Home">Single Family Home</MenuItem>
              </Select>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginTop: "15px" }}>
                  <TextField
                    required
                    label="Your budget"
                    type="number"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Number of beds"
                    type="number"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Mobile"
                    type="number"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ marginTop: "30px", fontSize: "25px" }}>Message</Box>
              <Grid container spacing={2} sx={{ paddingLeft: "16px", marginTop: "10px" }}>
                <TextField
                  xs={12}
                  sx={{ width: "100%" }}
                  id="message"
                  label="W3Schools Review"
                  multiline
                  rows={3}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'black',
                      },
                    },
                  }}
                />
              </Grid>

              <Box sx={{ width: "100%" }}>
                <Box sx={{ marginTop: "20px" }}>
                  <label htmlFor="vehicle1">GDPR Agreement</label>
                </Box>
                <FormControlLabel
                  sx={{ marginTop: "10px" }}
                  control={<Checkbox id="vehicle1" name="inputWrapped" />}
                  label="I consent to having this website store my submitted information"
                />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Button type="submit" sx={{ width: "100%", color: "white", fontSize: "24px", backgroundColor: "#B77A3E", borderRadius: "10px", '&:hover': { backgroundColor: "#B77A3E" } }}>Submit</Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Contect;
