import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)(({theme}) => ({
    height:48,
    background:'#f44336',
    color:'#FFFFFF',
    display:'flex',
    alignItems : 'center',
    marginBottom:30,
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));
const Image = styled('img')({
    height: 34,
    '&:last-child':{
        margin:"0 50px 0 20px"
    }
});

const Text = styled(Typography)`
    font-size:14px;
    font-weight:400;
    margin-left:40px;
`;

const infoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text>
                For the best experience use inshort app on your smartphone
            </Text>
            <Box style={{display:"flex", marginLeft:"auto"}}>
                <Image src={appleStore} alt="applestore"/>
                <Image src={googleStore} alt="playstore"/>
            </Box>
        </Container>
    );
};

export default infoHeader;