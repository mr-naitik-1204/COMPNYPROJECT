import React from 'react';
import Titel from './Titel';
import Nav from './Nav';
import Footer from './Footer';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

function Reservation() {
    const [age, setAge] = React.useState('');
    const [time, setTime] = React.useState('');
    const [openAge, setOpenAge] = React.useState(false);
    const [openTime, setOpenTime] = React.useState(false);

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleAgeClose = () => {
        setOpenAge(false);
    };

    const handleAgeOpen = () => {
        setOpenAge(true);
    };

    const handleTimeClose = () => {
        setOpenTime(false);
    };

    const handleTimeOpen = () => {
        setOpenTime(true);
    };
    window.scrollTo({ top: 0, behavior: "instant" })
    return (
        <>
            <Nav />
            <Titel
                url={"https://www.gamerzunite.com/graphics/images/mmclean/Cafe-Eorzea-Decor.jpg"}
                Name={"RESERVATION"}
            />
            <Container>
                <Box>
                    <Grid container sx={{ marginTop: "60px" }}>
                        <Grid item lg={6} sx={{ marginTop: "60px" }}>
                            <Box sx={{ fontSize: "30px", fontWeight: "800" }} data-aos="fade-right"  data-aos-delay="200">RESERVE YOUR TABLE HERE</Box>
                            <Box sx={{ height: "6px", width: "150px", backgroundColor: "#B77A3E", marginTop: "30px" }} data-aos="fade-right"  data-aos-delay="400"></Box>
                            <Typography sx={{ marginTop: "30px" }} data-aos="fade-right"  data-aos-delay="600">
                                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.
                            </Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Box sx={{
                                width: "100%", height: "100%"
                            }} component={'img'} src='https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/open-table-img-1.png' data-aos="fade-left"  data-aos-delay="300"></Box>
                        </Grid>
                    </Grid>
                </Box>
                <Container>
                    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                        <Grid item xs={12} sm={3}>
                            <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                <InputLabel id="age-select-label">parsan</InputLabel>
                                <Select
                                    labelId="age-select-label"
                                    id="age-select"
                                    open={openAge}
                                    onClose={handleAgeClose}
                                    onOpen={handleAgeOpen}
                                    value={age}
                                    label="parsan"
                                    onChange={handleAgeChange}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 500, // Set max height
                                                overflowY: 'auto', // Enable vertical scrolling
                                            },
                                        },
                                    }}
                                >
                                    {Array.from({ length: 24 }, (_, index) => (
                                        <MenuItem key={index} value={index * 10}>{`parsan:-${index + 1}`}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                type="datetime-local"
                                variant="outlined"
                                fullWidth
                                sx={{ m: 1 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                <InputLabel id="time-select-label">Time</InputLabel>
                                <Select
                                    labelId="time-select-label"
                                    id="time-select"
                                    open={openTime}
                                    onClose={handleTimeClose}
                                    onOpen={handleTimeOpen}
                                    value={time}
                                    label="Time"
                                    onChange={handleTimeChange}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 500, // Set max height
                                                overflowY: 'auto', // Enable vertical scrolling
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={10}>11:30 PM</MenuItem>
                                    <MenuItem value={20}>12:00 PM</MenuItem>
                                    <MenuItem value={30}>1:00 PM</MenuItem>
                                    <MenuItem value={40}>2:00 PM</MenuItem>
                                    <MenuItem value={50}>3:00 PM</MenuItem>
                                    <MenuItem value={60}>4:00 PM</MenuItem>
                                    <MenuItem value={70}>5:00 PM</MenuItem>
                                    <MenuItem value={80}>6:00 PM</MenuItem>
                                    <MenuItem value={90}>7:00 PM</MenuItem>
                                    <MenuItem value={100}>8:00 PM</MenuItem>
                                    <MenuItem value={110}>9:00 PM</MenuItem>
                                    <MenuItem value={120}>10:00 PM</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                sx={{
                                    mb: "100px",
                                    height: "55px",
                                    width: "160px",
                                    backgroundColor: "#C7A17A",
                                    marginTop:"8px",
                                    color: "black",
                                    fontWeight: "800",
                                    border: "2px solid transparent",
                                    '&:hover': {
                                        backgroundColor: "black",
                                        border: "2px solid white",
                                        color: "white"
                                    },
                                }}
                            >
                              SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default Reservation;
