import React, { useEffect, useState } from 'react'

import { Avatar, Box, Button, Container, Grid, Pagination } from '@mui/material'
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaTagSolid } from "react-icons/lia";
import { LuMessageSquare } from "react-icons/lu";

import Nav from './Nav';
import Footer from './Footer';
import Titel from './Titel';

function Blog() {
    window.scrollTo({ top: 0, behavior: "instant" })
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [page])
    const [typeofdata, settypeofdata] = useState("All");
    const [tod, settog] = useState(true);
    const data = [{
        url: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/blog-standard-img-1.jpg",
        p1: "Expand Your Mind, Change Everything",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"tea",
        time: "disember 2016"
    }, {
        url: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/blog-standard-img-2.jpg",
        p1: "Places to get lost",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"tea",
        time: "disember 2016"
    }, {
        url: "https://notebloc.files.wordpress.com/2023/07/1689886379380.jpg?w=450&h=563",
        p1: "What stands in the way becomes the way",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"coffee",
        time: "disember 2016"
    }, {
        url: "https://avatars.mds.yandex.net/i?id=2e819e03913e22385427e25350ae63de_l-5329796-images-thumbs&ref=rim&n=13&w=640&h=640",
        p1: "Elevate Your Expectations",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"coffee",
        time: "disember 2016"
    }, {
        url: "https://avatars.mds.yandex.net/i?id=5a57f8e5d3ad607365381ad63cf0b28c_l-8437558-images-thumbs&ref=rim&n=13&w=1080&h=864",
        p1: "Learn, Do, Achieve",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"tea",
        time: "January 2016"
    }, {
        url: "https://www.jiagroup.co/wp-content/uploads/2018/11/MakMak_Restaurant.jpg",
        p1: "The Benefits of Play",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"tea",
        time: "March 2016"
    }, {
        url: "https://i.pinimg.com/736x/e3/c7/44/e3c7446018a27168914e3806e7774931--cafe-shop.jpg",
        p1: "The Concept That Took the World by Storm",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"coffee",
        time: "January 2016"
    }, {
        url: "https://i.pinimg.com/736x/16/10/0d/16100daca7b8a28300a6871c873606bd.jpg",
        p1: "The Benefits of Play",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"coffee",
        time: "March 2016"
    }, {
        url: "https://static.wixstatic.com/media/11062b_e3dd898ab63047f8816c2d6229574825~mv2.jpeg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/11062b_e3dd898ab63047f8816c2d6229574825~mv2.jpeg",
        p1: "Coffee Bar",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"tea",
        time: "March 2016"
    }
        , {
        url: "https://avatars.mds.yandex.net/i?id=2753b5fbe59465cf7fbae97ae3dab5fa41ac228b-4531924-images-thumbs&n=13",
        p1: "Coffee Shop",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"coffee",
        time: "March 2016"
    }
        , {
        url: "https://www.amorecoffee.co.uk/wp-content/uploads/2019/01/Enjoy.jpg",
        p1: "When The World Zigs, Zag",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"tea",
        time: "January 2016"
    }, {
        url: "https://avatars.mds.yandex.net/i?id=4620be9a55974e101f0ee7abb8dd3ec7_l-9068341-images-thumbs&ref=rim&n=13&w=1400&h=991",
        p1: "The Key To Natural Beauty",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type:"coffee",
        time: "January 2016"
    }
    ]

    const [showdata, setshowdata] = useState(data)

    useEffect(() => {
        window.scrollTo({ top: 0 })
        if (typeofdata != "All") {
            if (tod) {
                setshowdata(
                    data.filter((item) => {
                        return item.type == typeofdata
                    })
                )
            } else {
                setshowdata(
                    data.filter((item) => {
                        return item.time == typeofdata
                    })
                )
            }
        } else {
            setshowdata(data)
        }
        console.log(showdata);
    }, [typeofdata])

    return (
        <>
            <Nav />
            <Titel url={"https://avatars.mds.yandex.net/i?id=01283ede9f1c3a8a39bd4b2135811193_l-4251039-images-thumbs&ref=rim&n=13&w=1440&h=960"}
                Name={"Blog"} />
            <Box sx={{ backgroundColor: "#EEEEEE" }}>
                <Container sx={{ marginTop: "20px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={9}>
                            {
                                showdata.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((dat, ind) => {
                                    return (
                                        <Box sx={{ width: "100%", backgroundColor: "white", marginTop: ind != 0 ? "70px" : "0px" }}>
                                            <Box sx={{ width: "100%" }}>
                                                <img src={dat.url} style={{ width: "100%" }} alt="" />
                                            </Box>
                                            <Box sx={{ padding: "30px" }}>
                                                <Box sx={{
                                                    fontSize: "33px",
                                                    fontWeight: "700",
                                                    cursor: "pointer",
                                                    '&:hover': {
                                                        color: '#B77A3E'
                                                    },
                                                }}>
                                                    {dat.p1}
                                                </Box>
                                                <Box sx={{ fontSize: "17px", fontWeight: "100", marginTop: "30px" }}>
                                                    {dat.p2}
                                                </Box>
                                            </Box>
                                            <Box>
                                                <hr />
                                            </Box>
                                            <Box sx={{
                                                padding: "30px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexWrap: "wrap"
                                            }}>
                                                <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                                    <Box sx={{ margin: "7px", display: "flex", alignItems: "center" }}>
                                                        <FaRegCalendarAlt />
                                                        <Box sx={{ margin: "7px" }}> 6 years ago </Box>
                                                    </Box>
                                                    <Box sx={{ margin: "7px", display: "flex", alignItems: "center" }}>
                                                        <LiaTagSolid style={{ fontSize: "22px" }} />
                                                        <Box sx={{ margin: "7px", color: "#16BFBF" }}>{dat.type}</Box>
                                                    </Box>
                                                    <Box sx={{ margin: "7px", display: "flex", alignItems: "center" }}>
                                                        <LuMessageSquare style={{ fontSize: "22px" }} />
                                                        <Box sx={{ margin: "7px" }}>0</Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Button sx={{
                                                        backgroundColor: "#B77A3E",
                                                        color: "white",
                                                        padding: "7px 20px",
                                                        '&:hover': {
                                                            backgroundColor: 'black',
                                                        },
                                                    }}>
                                                        Read More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px", marginBottom: "10px" }}>
                                <Pagination
                                    count={Math.ceil(data.length / rowsPerPage)}
                                    page={page}
                                    onChange={handleChange}
                                    variant="outlined"
                                    shape="rounded"
                                    style={{ marginTop: '16px' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Box sx={{ position: "sticky", top: "100px" }}>
                                <Box sx={{ backgroundColor: "white", padding: "20px" }}>
                                    <Box >
                                        <Box sx={{ fontSize: "18px" }}>Categories</Box>
                                    </Box>
                                    <Box sx={{ color: "#B77A3E", marginTop: "10px" }}>
                                        <Box sx={{ marginTop: "5px",cursor:"pointer" }} onClick={() => { settypeofdata("All"); settog(true) }}><MdKeyboardArrowRight />All</Box>
                                        <Box sx={{ marginTop: "5px",cursor:"pointer" }} onClick={() => { settypeofdata("tea"); settog(true) }}><MdKeyboardArrowRight />tea</Box>
                                        <Box sx={{ marginTop: "5px",cursor:"pointer" }} onClick={() => { settypeofdata("coffee"); settog(true) }}><MdKeyboardArrowRight />coffee</Box>

                                    </Box>
                                </Box>

                                <Box sx={{ backgroundColor: "white", padding: "20px", marginTop: "30px" }}>
                                    <Box >
                                        <Box sx={{ fontSize: "18px" }}>Archives</Box>
                                    </Box>
                                    <Box sx={{ color: "#B77A3E", marginTop: "10px" }}>
                                        <Box sx={{ marginTop: "5px" ,cursor:"pointer"}} onClick={() => { settypeofdata("March 2016"); settog(false) }}><MdKeyboardArrowRight />March 2016</Box>
                                        <Box sx={{ marginTop: "5px",cursor:"pointer" }} onClick={() => { settypeofdata("January 2016"); settog(false) }}><MdKeyboardArrowRight />January 2016</Box>
                                        <Box sx={{ marginTop: "5px",cursor:"pointer" }} onClick={() => { settypeofdata("January 2016"); settog(false) }}><MdKeyboardArrowRight />disember 2016</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />

        </>
    )
}

export default Blog
