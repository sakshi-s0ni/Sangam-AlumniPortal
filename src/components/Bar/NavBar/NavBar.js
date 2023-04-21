import React from "react";

import { Box, AppBar, Container, Toolbar, Typography, IconButton, Menu, Button, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { HashLink } from 'react-router-hash-link'
import VolunteerActivismTwoTone from "@mui/icons-material/VolunteerActivismTwoTone"


const NavBar = () => {

    const [anchorNav, setAnchorNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorNav(event.currentTarget)
    }
    const handleCloseNavMenu = (event) => {
        setAnchorNav(null)
    }
    return (
        <Box sx={{ mt: 8 }} >
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        > 
                            Sangam
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorNav)}
                                onClose={handleCloseNavMenu}

                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/*-------- small skin navigation-------- */}
                                <MenuItem
                                    bgcolor="primary"
                                    component={HashLink}
                                    smooth to='/home'
                                >Home
                                </MenuItem>

                                <MenuItem
                                    bgcolor="primary"
                                    component={HashLink}
                                    smooth to='/about'
                                >About
                                </MenuItem>
                                <MenuItem
                                    bgcolor="primary"

                                    component={HashLink}
                                    smooth to='/login'
                                >Login
                                </MenuItem>
                                <MenuItem
                                    bgcolor="primary"
                                    component={HashLink}
                                    smooth to='/feed'
                                >Feed
                                </MenuItem>
                                <MenuItem
                                    bgcolor="primary"
                                    component={HashLink}
                                    smooth to='/addpost'
                                >App Post
                                </MenuItem>
                                {/* } */}

                            </Menu>
                        </Box>

                        <Typography
                            variant="h6"
                            align='center'
                            component="div"
                            sx={{ flexGrow: 1, pt: 2, display: { xs: 'flex', md: 'none' } }}
                        >
                            <VolunteerActivismTwoTone
                                fontSize='large' />  Sangam
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            {/*-------- large skin navigation-------- */}

                            <HashLink
                                className="text-style text-style-fullscrn "
                                smooth to='/home#home'>
                                <Button

                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >Home
                                </Button>
                            </HashLink>

                            <HashLink
                                className="text-style text-style-fullscrn "
                                smooth to='/about#about'>
                                <Button

                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >About
                                </Button></HashLink>
                            <HashLink
                                className="text-style text-style-fullscrn "
                                smooth to='/login#login'>
                                <Button

                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >Login
                                </Button></HashLink>
                                <HashLink
                                className="text-style text-style-fullscrn "
                                smooth to='/feed#feed'>
                                <Button

                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >Feed
                                </Button>
                            </HashLink>
                            <HashLink
                                className="text-style text-style-fullscrn "
                                smooth to='/addpost#addpost'>
                                <Button

                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >Add Post
                                </Button>
                            </HashLink>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </Box>
    )
}

export default NavBar;