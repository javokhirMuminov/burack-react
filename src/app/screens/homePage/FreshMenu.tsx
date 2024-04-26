import React from "react";
import { Container, Stack, Box } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from "../../components/divider";

import {  useSelector } from "react-redux";
import {createSelector} from "reselect";
import {retriveNewDishes, retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";


/**REDUX SLICE $ SELECTOR */
  const setNewDishesRetriver = createSelector(
    retriveNewDishes,
    (newDishes) => ({ newDishes})
  );



export default function FreshMenu() {


    const  { newDishes} = useSelector(setNewDishesRetriver);
    console.log("newDishes", newDishes);




    return <div className="fresh-menu">
        <Container>
            <Stack className="fresh-menu-section">
                <Box className="fresh-menu-title">
                    Fresh Menu
                </Box>
                <Stack className="fresh-menu-cards">
                    <CssVarsProvider>
                        {newDishes.length !== 0 ? (
                            newDishes.map((product: Product) => {
                                const imagePath = `${serverApi}/${product.productImages}`
                                const sizeVolume = product.productCollection === ProductCollection.DRINK ? product.productVolume + " l" : product.productSize+ "size";
                                return (
                                    <Card key={product._id} variant="outlined" className={"card"}>
                                        <CardOverflow>
                                            <div className="product-sale">{sizeVolume}</div>
                                            <AspectRatio ratio="1">
                                                <img src={imagePath} alt="" />
                                            </AspectRatio>
                                        </CardOverflow>
                                        <CardOverflow variant="soft" className="product-detail">
                                            <Stack className="info">
                                                <Stack flexDirection={"row"}>
                                                    <Typography className={"title"}>{product.productName}</Typography>
                                                    <Divider width="2" height="24" bg="#d9d9d9" />
                                                    <Typography className={"price"}>${product.productPrice}</Typography>
                                                </Stack>
                                                <Stack>
                                                    <Typography className="views">
                                                        {product.productViews}
                                                        <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </CardOverflow>
                                    </Card>
                                );
                            })
                        ) : (
                            <Box className="no-data">New products are not available!</Box>
                        )};
                    </CssVarsProvider>
                </Stack>
            </Stack>
        </Container>
    </div>;
};