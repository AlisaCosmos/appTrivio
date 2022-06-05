import { useState } from 'react';

import Search from '../search/Search';
import UserMenu from '../userMenu/UserMenu';

import {Box, Badge, BottomNavigation, BottomNavigationAction} from '@mui/material';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const SimpleBottomNavigation = () => {
    const [value, setValue] = useState(0);
    const [pressed, setPressed] = useState(false);

    const handelPressed = () => {
        setPressed (!pressed)
    };
    
return (
    <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}>
                <BottomNavigationAction 
                    sx={{  display: {  md: 'none'}}} 
                    icon={<ShoppingCartOutlinedIcon />} />

                        <BottomNavigationAction  
                            icon={
                                <Search />} />
                        <BottomNavigationAction 
                            icon={
                                <Badge 
                                    color="secondary" 
                                    variant="dot">
                                        <ErrorOutlineIcon 
                                            sx={{ color: '#a65151' }}/>
                                </Badge>} />
                        <BottomNavigationAction 
                            icon={
                                <AccessTimeOutlinedIcon 
                                    color="secondary"  />} />
                        <BottomNavigationAction 
                            icon={
                                <FavoriteBorderIcon 
                                    sx={{ color: 'pink' }}/>} />
                        <BottomNavigationAction 
                            icon={
                                <Badge 
                                    color="secondary" 
                                    variant="dot">
                                        <MailOutlineIcon/>
                                </Badge> } />
                                <BottomNavigationAction 
                            icon={
                                <UserMenu/>} />
                        <BottomNavigationAction 
                            onClick={handelPressed}
                            icon={ pressed ? <img src="img/eng.svg" alt="Ангkийский язык" /> : <img src="img/ru.svg" alt="Русский язык" />  }
                        />

                        
            </BottomNavigation>
    </Box>
    )
}

export default SimpleBottomNavigation;

