import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
    return <div className="static-frame">
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-box-num">12</Box>
                    <Box className="static-box-text">Restaurants</Box>
                </Stack>
                <Divider height="64" width="2" bg="#E3C08D" />
                <Stack className="static-box">
                    <Box className="static-box-num">8</Box>
                    <Box className="static-box-text">Experience</Box>
                </Stack>
                <Divider height="64" width="2" bg="#E3C08D" />
                <Stack className="static-box">
                    <Box className="static-box-num">50+</Box>
                    <Box className="static-box-text">Menu</Box>
                </Stack>
                <Divider height="64" width="2" bg="#E3C08D" />
                <Stack className="static-box">
                    <Box className="static-box-num">200+</Box>
                    <Box className="static-box-text">Clients</Box>
                </Stack>
            </Stack>
        </Container>
    </div>;
};