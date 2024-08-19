import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Grid,
    Menu,
    IconButton,
    MenuItem,
} from "@mui/material";
import { btnPageStyle } from "./style";
import logo from "./images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";


const pages = [
    { id: "1", title: "Task List", url: "/" },
    { id: "2", title: "Project List", url: "projectListPage" },
    { id: "3", title: "Search", url: "/" }
];



const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };





    return (
        <AppBar position="static">
            <Grid container sx={{ alignItems: "center", height: "100px" }}>




                <Grid
                    item
                    xs={2}
                    sx={{
                        textAlign: "center",
                        display: { xs: "block", paddingLeft: 25 },
                    }}
                >
                    <Link to="/">
                        <img width={65} src={logo} alt="image" />
                    </Link>
                </Grid>



                <Grid
                    item
                    xs={5}
                    sx={{
                        justifyContent: "space-evenly",
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {pages.map((page) => (
                        <Link key={page.id} to={page.url}>
                            <Button sx={btnPageStyle}>{page.title}</Button>
                        </Link>
                    ))}
                </Grid>



                {/* Бургер */}

                <Grid
                    item
                    xs={10}
                    sx={{
                        display: { xs: "flex", md: "none", paddingRight: 25 },

                        justifyContent: "end",
                    }}
                >
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                width: "200px",
                            },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.id} onClick={handleMenuClose}>
                                <Link to={page.url} style={{ textDecoration: "none", color: "inherit" }}>
                                    {page.title}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Grid>



            </Grid>
        </AppBar>
    );
};


export default Navbar;
