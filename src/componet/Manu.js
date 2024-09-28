import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Titel from './Titel'
import { Box, Container, Grid, Typography } from '@mui/material'


function Manu() {
    window.scrollTo({ top: 0, behavior: "instant" })
    return (
        <>
            <Nav />
            <Titel
                url={"https://www.cierracandles.com/assets/images/Espresso.jpg"}
                Name={"MENU"}
            />
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
                        variant='h4'
                        sx={{
                            color: "black",
                            fontWeight: "800",
                            marginBottom: "20px",
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        COFFEE AND TEA MANU.
                    </Typography>
                    <Box width={"100%"} sx={{ maxWidth: "600px", margin: "0 auto" }}>
                        <hr style={{ backgroundColor: "#CA8E46", height: "3px" }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: { xs: "30px", md: "50px" } }}>
                <Container>
                    <Grid container spacing={4} sx={{ color: "black" }}>
                        {[
                            { title: "Caffe Latte", price: "₹95", description: "Fresh brewed coffee and steamed milk", img: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" },

                            { title: "Caffe Mocha", price: "₹105", description: "Espresso With Milk, and Whipped Cream", img: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-2-150x150.jpg" },

                            { title: "Cappuccino", price: "₹250", description: "Espresso Shots and Light Layer of Crema", img: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-6-150x150.jpg" },

                            { title: "tea fresh", price: "₹70", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=15bedbbbc402c6e79e140f42f8bdbb3ce5a107f4-8498042-images-thumbs&n=13" },

                            { title: "Caffe tea Lat", price: "₹100", description: "Fresh brewed coffee and steamed milk", img: "https://avatars.mds.yandex.net/i?id=9956cac76a526a6d3cb7524abc9ded43131b283a-10574297-images-thumbs&n=13" },

                            { title: "tea caffe", price: "₹95", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=47bb492687fbbec0ca569facb31e93afabd6768c-10350639-images-thumbs&n=13" },

                            { title: "Caffeine Connoisseur", price: "₹150", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=629abcfb51cebfe8d53484eb9f82c7c6fc8498d1-7015779-images-thumbs&n=13" },

                            { title: "Java Junkie", price: "₹200", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=1fa4a212686f2f7c19b5d393c792a79d527beb0c-6630857-images-thumbs&n=13" },

                            { title: "Bean Aficionado", price: "₹170", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=8de93dbe246e6be4bc5443564fcd400a-4827877-images-thumbs&n=13" },

                            { title: "Espresso Enthusiast", price: "₹100", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=3c13bd87bbd6b3d82310fabbbb2e83f5ad1538d8-4885166-images-thumbs&n=13" },

                            { title: "Coffee Addic", price: "₹15", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=c672b328c5c29d06ea8dea136fb2c2cfb29e20ba-5441329-images-thumbs&n=13" },

                            { title: "Brew Master", price: "₹150", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=44cca8082e6a8544dae8c5322064c65fc1f60b6b-7629136-images-thumbs&n=13" },

                            { title: "Cup o' Joe Devotee", price: "₹120", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=a85df91f029e01dc6aa73b131c0cbfda42dd9665-10805353-images-thumbs&n=13" },

                            { title: "Mocha Maniac", price: "₹70", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=b30df3c38fc5d59a393d37fcf29336c6bea7a0de-10471610-images-thumbs&n=13" },

                            { title: "Latte Lover", price: "₹200", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=231ae113f62254d2d3f5d598b800f435cd5081b72b42985d-12475310-images-thumbs&n=13" },

                            { title: "Coffeeholic", price: "₹95", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=fb207f72016303f3adfd33552fa751aefba273e0-7777855-images-thumbs&n=13" },

                            { title: "Bean Fiend", price: "₹275", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=9732fc1ada7bf72e17b2c770d812435438e4f9ae-5383459-images-thumbs&n=13" },

                            { title: "Barista Buddy", price: "₹85", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=a75058627ed6960c942194061d59d2afc2da44e5-7570876-images-thumbs&n=13" },

                            { title: "Java Geek", price: "₹200", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=26097f92584715478242c6525016b7d0b860178c-6339443-images-thumbs&n=13" },

                            { title: "Coffee Maven", price: "₹150", description: "Fresh brewed tea and steamed milk", img: "https://avatars.mds.yandex.net/i?id=10f1ca1e9143aacbe29439bd2ff761ec4a728c2a-5209664-images-thumbs&n=13" },

                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} lg={6} key={index}>
                                <Box sx={{ display: "flex", alignItems: "center" }} data-aos="fade-down" data-aos-delay={`${(index + 1) * 100}`}>
                                    <Box component={"img"} src={item.img} sx={{ width: "80px",borderRadius:"50px" }} border={"2px solid black" } />
                                    <Box sx={{ width: "90%", pl: "20px" }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "25px", alignItems: "end" }}>
                                            <Box>{item.title}</Box>
                                            <Box sx={{ width: "50%", backgroundColor: "black", height: "2px" }} />
                                            <Box>{item.price}</Box>
                                        </Box>
                                        <Box sx={{ color: "#1F0F0D", mt: "7px" }}>{item.description}</Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "50px" }}>

                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Manu
