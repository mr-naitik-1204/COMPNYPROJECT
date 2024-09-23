import { Box, Container, Grid } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <>

            <Box sx={{ marginTop: "50px", backgroundImage: "url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/footer-img.jpg)", height: "500px" }}>
                <Container sx={{ color: "white",textTransform:"uppercase",fontWeight:"600",fontSize: "23px"  }}>
                    <Grid container sx={{paddingTop:"70px"}}>
                        <Grid item lg={3}>
                            <Box sx={{ }}>
                            Opening Hours
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "70%",marginTop:"30px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "15px", alignItems: "end" }}>
                                    <Box>Monday</Box>
                                    <Box sx={{ width: "30%", backgroundColor: "white", height: "1px" }} />
                                    <Box>Closed</Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3}>
                            <Box sx={{ fontSize: "23px" }}>
                            Latest posts
                            </Box>
                        </Grid>
                        <Grid item lg={3}>
                            <Box sx={{ fontSize: "23px"}}>
                            Contact us
                            </Box>
                        </Grid>
                        <Grid item lg={3}>
                            <Box sx={{ fontSize: "23px" }}>
                            other locations
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer
