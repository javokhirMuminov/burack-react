import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


import {  useSelector } from "react-redux";
import {createSelector} from "reselect";
import {retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";



  const popularDishesRetriver = createSelector(
    retrivePopularDishes,
    (popularDishes) => ({ popularDishes})
  );

export default function PopularDishes() {

    const{ popularDishes } = useSelector(popularDishesRetriver);



    return <div className="popular-dishes-frame">
        <Container>
            <Stack className="popular-section">
                <Box className="popular-section-title">
                    Popular Dishes
                </Box>
                <Stack className="popular-section-cards">
                    {popularDishes.length !== 0 ? (
                    popularDishes.map((product:Product) => {
                        const imagePath = `${serverApi}/${product.productImages}`
                        return (
                            <CssVarsProvider key={product._id}>
                                <Card className="popular-section-card">
                                    <CardCover>
                                        <img src={imagePath} alt="" />
                                    </CardCover>
                                    <CardCover className={"card-cover"} />
                                    <CardContent sx={{ justifyContent: "flex-end" }}>
                                        <Stack
                                            flexDirection={"row"}
                                            justifyContent={"space-between"}
                                        >
                                            <Typography
                                                level="h2"
                                                fontSize="lg"
                                                textColor="#fff"
                                                mb={1}
                                            >
                                                {product.productName}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: "md",
                                                    color: "neutral.300",
                                                    alignItems: "center",
                                                    display: "flex",
                                                }}
                                            >
                                                {product.productViews}
                                                <VisibilityIcon sx={{ fontSize: 25, marginLeft: "5px", }} />
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                    <CardOverflow
                                        sx={{
                                            display: "'flex'",
                                            gap: 1.5,
                                            py: 1.5,
                                            px: "var(--Card-padding)",
                                            borderTop: "1px solid",
                                            height: "60px",
                                        }}
                                    >
                                        <Typography
                                            startDecorator={<DescriptionOutlinedIcon />} textColor="neutral.300"
                                        >
                                            {product.productDesc}
                                        </Typography>
                                    </CardOverflow>
                                </Card>
                            </CssVarsProvider>
                        );
                    })
                    ):(
                        <Box className="no-data">New products are not available!</Box>
                    )};
                </Stack>
            </Stack>
        </Container>
    </div>;
};