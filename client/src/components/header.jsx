import React from 'react';
import {AppBar,Toolbar,styled} from "@mui/material";
import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
    background-color:#fff;
    height:70px;
`;
const MenuIcon = styled(Menu)`
    color:#000;
    font-weight:bolder;
`;
const Image = styled('img')({
    height:55,
    margin:"auto",
    paddingRight:70
})

const header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (
        <div>
            <StyledHeader position='static'>
                <Toolbar>
                    <MenuIcon/>
                    <Image src={url} alt='logo'/>
                </Toolbar>
            </StyledHeader>
        </div>
    );
};

export default header;