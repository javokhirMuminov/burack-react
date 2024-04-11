/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
]


export default function Products() {
    return (
        <div className="products">
            <Container>
                <Stack className="product-main">
                    <Box className="burak-restaurant">
                        Burak Restaurant
                    </Box>
                    <Box>
                        <Paper className="mui-icon-custom"
                            component="form"
                            sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <InputBase className="color-search-ico"
                                sx={{ ml: 1.5, flex: 1 }}
                                placeholder="Type here" inputProps={{ style: { color: "#4A4A4A" } }}
                            // inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <Box className="search-product-box">
                                <Button className="icon-search-product" type="button" >
                                    SEARCH
                                    <SearchIcon className="icon-serch" />
                                </Button>
                            </Box>
                        </Paper>
                    </Box>

                </Stack>

                <Stack className="product-top-button">
                    <Stack className="product-top-btn-flex">
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            className="order"
                        >
                            NEW
                        </Button>
                    </Stack>
                    <Stack className="product-top-btn-flex">
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            className="order"
                        >
                            PRICE
                        </Button>
                    </Stack>
                    <Stack className="product-top-btn-flex">
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            className="order"
                        >
                            VIEWS
                        </Button>
                    </Stack>

                </Stack>

                <Stack className="product-section-ctegory">
                    <Stack className="all-category">
                        <div className="main-category">
                            <Button
                                variant={"contained"}
                                color={"primary"}
                            >
                                DISH
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                            >
                                SALAD
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                            >
                                DRINK
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                            >
                                DESERT
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                            >
                                OTHER
                            </Button>
                        </div>
                    </Stack>

                    <Stack className="product-menu-cards">
                        <Stack className={"list-category-section"}>
                            <Stack className={"product-wrapper"}>
                                {products.length !== 0 ? (
                                    products.map((products, index) => {
                                        return (
                                            <Stack key={index} className={"product-card"}>
                                                <Stack
                                                    className={"product-img"}
                                                    sx={{
                                                        backgroundImage: `url(${products.imagePath})`, backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                                        backgroundSize: "cover",
                                                    }}
                                                >
                                                    <div className={"product-sale"}>LARGE size</div>
                                                    <div className="flex-eye">
                                                        <Button className={"shop-btn"}>
                                                            <img
                                                                src="/icons/shopping-cart.svg" alt=""
                                                                style={{ display: "flex" }} />
                                                        </Button>
                                                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                                                            <Badge badgeContent={20} color="secondary">
                                                                <RemoveRedEyeIcon sx={{ color: 20 ? "white" : "white" }} />
                                                            </Badge>
                                                        </Button>
                                                    </div>
                                                </Stack>
                                                <Box className={"product-desc"}>
                                                    <span className={"product-title"}>
                                                        {products.productName}
                                                    </span>
                                                    <div className={"product-title"}><MonetizationOnIcon />{12}
                                                    </div>
                                                </Box>
                                            </Stack>
                                        )
                                    })
                                ) : (
                                    <Box className="no-data">Products are not available! </Box>
                                )
                                }
                            </Stack>
                            <Stack className="flex-mid" spacing={2}>
                                <Pagination
                                    count={3} color="secondary"
                                    renderItem={(item) => (
                                        <PaginationItem
                                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                            {...item}
                                        />
                                    )}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

            <Stack className="family-brands">
                <Stack>
                    <Box className="family-brands-title">
                        Our Family Brands
                    </Box>
                </Stack>
                <Stack className="family-brands-cards">
                    <Box className="brand-card">
                        <img src="/img/gurme.webp" alt="" />
                    </Box>
                    <Box className="brand-card">
                        <img src="/img/seafood.webp" alt="" />
                    </Box>
                    <Box className="brand-card">
                        <img src="/img/sweets.webp" alt="" />
                    </Box>
                    <Box className="brand-card">
                        <img src="/img/doner.webp" alt="" />
                    </Box>
                </Stack>
            </Stack>
            <div className="location">
                <Box className="locat-frame-title">
                    Our address
                </Box>
                <Container>
                    <Box className="locat-frame-google">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6919.797538763219!2d127.94381393396152!3d37.32495849246551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356375bf121c3f79%3A0x1eac894dee1c07c6!2sWonju%20City%20Central%20Library!5e0!3m2!1sen!2skr!4v1712350784388!5m2!1sen!2skr" width="600" height="450"></iframe>
                    </Box>
                </Container>
            </div>
        </div >
    );
}