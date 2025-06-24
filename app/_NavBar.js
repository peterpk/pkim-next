"use client";

import React, {useState} from 'react';

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { Box, AppBar, Toolbar, Menu, MenuItem, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Resume', 'Portfolio', 'Contact', 'About'];



const NavLink = ( { children, href }) => {
    const path = usePathname();

    let sx = {
        "color": (path === href ? "var(--mui-palette-secondary-main)" : "white"), 
        "textDecoration": "none"
    };

    return (
        <Link href={href} style={sx}>
            {children}
        </Link>
    );
};

const NavBar=()=>{
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (    
        <AppBar position='sticky' sx={{ marginBottom: "1rem"}}>
            <Toolbar>
                {/* Site title large */}
                <Typography variant="h6" component="a" href="/" noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'white',
                        textDecoration: 'none',
                        flexGrow: 1
                    }}
                >
                    Pete Kidwell - Architect at Large
                </Typography>

                {/* Full nav bar for larger screens */}
                <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button 
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ margin: 2, display: 'block' }}
                        >
                            <NavLink href={'/' + page}>{page}</NavLink>
                            {/* <Link to={'/' + page} color="white" underline="none" style={{ textDecoration: 'none', color:"white" }}>{page}</Link> */}
                        </Button>
                    ))}
                </Box>

                {/* Hamburger menu for small screens */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuItem key='/' onClick={handleCloseNavMenu}>
                            <Link href='/' underline='none' style={{ textAlign: 'center', textDecoration: 'none'}}>Home</Link>
                        </MenuItem>
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}> 
                                <Link href={'/' + page} underline="none" style={{ textAlign: 'center', textDecoration: 'none'}}>{page}</Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Logo for small screens (after the hamburger menu) */}
                <Typography variant="h5" component="a" href="/" noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Pete Kidwell - Architect
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;