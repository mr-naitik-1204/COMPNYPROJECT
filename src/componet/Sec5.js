import { Box, Typography } from '@mui/material';
import React from 'react';

function Sec5() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "60px",
                padding: { xs: '20px', md: '0' }, 
                flexDirection: 'column', 
            }}
        >
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    variant='h5'
                    sx={{
                        fontFamily: "Fascinate Inline",
                        color: "#CA8E46",
                        marginBottom: "20px",
                        fontSize: { xs: '1.5rem', md: '2rem' } 
                    }}
                >
                   What Happens Here
                </Typography>
                <Typography
                    variant='h4'
                    sx={{
                        color: "black",
                        fontWeight: "800",
                        marginBottom: "20px",
                        fontSize: { xs: '1.5rem', md: '2.5rem' } 
                    }}
                >
                  TEA AND COFFEE BUILD YOUR BASE.
                </Typography>
                <Box width={"100%"} sx={{ maxWidth: "600px", margin: "0 auto" }}>
                    <hr style={{ backgroundColor: "#CA8E46", height: "3px" }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Sec5;
