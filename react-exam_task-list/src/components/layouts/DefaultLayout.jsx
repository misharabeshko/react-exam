import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
// import Footer from "../../footer/Footer";
import { Container } from "@mui/material";

const DefaulLayout = () => {
    return (
        <>
            <Navbar />
            <Container sx={{ my: 2, minHeight: "500px" }}>
                <Outlet />
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default DefaulLayout;
