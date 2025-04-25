import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import getUserInitials from '../../utilities';
import { useNavigate } from "react-router-dom";
import { altNavbarItems, mainNavbarItems } from './consts/navbarItems';
import { TextField } from '@mui/material';

const pages = ['Forums', 'Subjects', 'Contact'];
const settings = ['Dashboard', 'Profile', 'Account'];



function ResponsiveAppBar({ user, logoutUser }) {

    let loggedIn = false;
    let initials = "?";
    if (user) {
        loggedIn = true;
        initials = getUserInitials(user);
    }

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (e) => {

        setAnchorElUser(null);
    };

    const handleLogoutUserMenu = (e) => {
        e.preventDefault();
        logoutUser();
        navigate("/");
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Room 6
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
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {mainNavbarItems.map((page) => (
                                <Link key={page.id} to={`/${page.path}`}>
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Room 6
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {mainNavbarItems.map((page) => (
                            <Link key={page.id} to={`/${page.path}`}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* <Box sx={{justifyContent:"center", marginRight:"30%"}}>
                        <TextField  sx={{background:"white", borderRadius:"5px"}}></TextField>
                        <Button sx={{background:"white", marginTop:"6.5%"}}>Search</Button>
                    </Box> */}
                    
                    {!loggedIn ?

                        <Box sx={{ flexGrow: 0 }}>
                            <Link style={{ textDecoration: "none", color: "#223843" }} to={`/login`}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#223843', display: 'block' }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </Box>
                        :
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" >
                                        {initials}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {altNavbarItems.map((setting) => (
                                    <Link key={setting.id} to={`/${setting.path}`}>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography sx={{ textAlign: 'center',color: "black" }}>{setting.label}</Typography>
                                        </MenuItem>
                                        </Link>
                                    ))}
                                        <MenuItem onClick={handleLogoutUserMenu}>
                                            <Typography sx={{ textAlign: 'center', textDecoration: "none", color: "black" }}>
                                                Logout
                                            </Typography>

                                        </MenuItem>
                                    </Menu>
                            </Box>
                    }
                </Toolbar>

            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;