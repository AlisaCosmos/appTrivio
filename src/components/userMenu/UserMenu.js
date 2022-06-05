import { useState } from 'react';

import {Tooltip, Box,IconButton, Typography, Menu,MenuItem , Divider, List, ListItemButton , ListItem, ListItemText} from '@mui/material';

const settings = ['Профиль', 'Управление', 'Моя компания', 'Выйти'];

const UserMenu = () => {
    
    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


return (
                    <Box >
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Typography 
                                textAlign="center"
                                sx={{
                                    border: '1px solid #d9d9d9',
                                    background: '#d9d9d9'}}
                            >aa</Typography>
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
                        <Typography variant="h6" component="h6" mt={2} ml={2} > admin admin</Typography>    
                        <List sx={{fontSize: '0.75rem', color: '#808080', padding:'0', lineHeight: 'none'}} >
                            <ListItem disablePadding >
                                <ListItemButton sx={{ paddingTop: 0, paddingBottom: 0 }} >
                                <ListItemText primary="Тривио" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemText primary="Баланс: -568978,25 ₽" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton sx={{ paddingTop: 0, paddingBottom: 0 }} >
                                <ListItemText primary="Задолженность: 0,00 ₽"/> 
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider/>    
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
)}

export default UserMenu;