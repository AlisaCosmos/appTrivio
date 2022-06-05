import { useState } from 'react';

import {AppBar,Button, Box, Toolbar,IconButton, Typography, Menu,MenuItem , Container, Chip, Link} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import SimpleBottomNavigation from '../bottomNavigation/BottomNavigation';


const pages = ['Рабочий стол', 'Поездки', 'Оплаты', 'Мои документы'];


const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

return (
    <AppBar 
        position="static">
            <Container 
                maxWidth="xl">
                    <Toolbar 
                        disableGutters>
                            <Box>      
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                    console.info("I'm a button.")}}
                                    sx={{ 
                                        display: { xs: 'none', md: 'flex' },
                                        mr: 1 }} >
                                            <div>
                                                <img src="img/logo.svg" alt="Trivio" />
                                            </div>
                                </Link> 
                            </Box>

                            <Box
                                sx={{ 
                                    flexGrow: 1, 
                                    display: 'flex' }}>

                                <Box 
                                    sx={{ 
                                        display: { xs: 'flex', md: 'none' } }}>
                                            <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={handleOpenNavMenu}>
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
                                                    sx={{
                                                    display: { xs: 'block', md: 'none' },
                                                    }}
                                                    >
                                                        {pages.map((page) => (
                                                            <MenuItem 
                                                                key={page} 
                                                                onClick={handleCloseNavMenu}>
                                                                    <Typography 
                                                                        textAlign="center">
                                                                            {page}
                                                                    </Typography>
                                                            </MenuItem>
                                                        ))}
                                                </Menu>
                                </Box>
                                <Box>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => {
                                        console.info("I'm a button.")}}
                                        sx={{ display: { xs: 'flex', md: 'none' }, 
                                        mr: 1,
                                        my: 2 }} > 
                                            <div>
                                                <img 
                                                    src="img/logo.svg" 
                                                    alt="Trivio" />
                                            </div>
                                    </Link>
                                </Box>
                                <Box 
                                    sx={{ 
                                        display: { xs: 'none', md: 'flex' } }}>
                                            {pages.map((page) => (
                                                <Button
                                                    key={page}
                                                    onClick={handleCloseNavMenu}
                                                    sx={{ my: 2, 
                                                        color: 'black', 
                                                        display: 'block',
                                                        '&:hover': {
                                                            color: '#4f76e5',
                                                        }, 
                                                    }}
                                                    >
                                                    {page}
                                                </Button>
                                            ))}
                                </Box>
                                <Box 
                                    sx={{ 
                                        my: 2 ,
                                        ml: 1,
                                        display: { xs: 'none', md: 'block' },  
                                        }}>
                                            <Chip 
                                            sx={{fontWeight: 500, my: 2, fontSize: '0.875rem', textTransform: 'uppercase' }}
                                                
                                                icon={<ShoppingCartOutlinedIcon />} 
                                                label="Пакеты услуг" 
                                                onClick={handleClick} />
                                </Box>
                            </Box>
                            <Box>
                                <SimpleBottomNavigation/>
                            </Box>

                    </Toolbar>
            </Container>
    </AppBar>
);
};
export default Header;