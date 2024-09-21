import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Sec3() {
    return (
        <>
            <Box sx={{width:"100%"}}>
                <Grid container spacing={5} sx={{margin:"auto"}}>
                    <Grid lg={1}></Grid>
                    <Grid item lg={3}>
                        <Box><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" width={"100%"} /></Box>
                        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center"
                        }}>
                            <Typography variant='h2'>01</Typography>
                            <Typography sx={{fontSize:"25px"}}>BEAUTIFUL PLACE</Typography>
                        </Typography>
                        <Typography variant='h6'>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle</Typography>
                        <Button></Button>
                    </Grid>
                    <Grid item lg={3}>
                        <Box><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-2.jpg" alt="" width={"100%"}/></Box>
                        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center"
                        }}>
                            <Typography variant='h2'>02</Typography>
                            <Typography sx={{fontSize:"25px"}}>FEEL THE COFFEE</Typography>
                        </Typography>
                        <Typography variant='h6'>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle</Typography>
                        <Button></Button>
                    </Grid>
                    <Grid item lg={3}>
                        <Box><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-3.jpg" alt="" width={"100%"}/></Box>
                        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center"
                        }}>
                            <Typography variant='h2'>03</Typography>
                            <Typography sx={{fontSize:"25px"}}>FULL TASTE</Typography>
                        </Typography>
                        <Typography variant='h6'>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle</Typography>
                        <Button></Button>
                    </Grid>
                    <Grid lg={1}></Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Sec3
