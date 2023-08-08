import {Card , CardContent, Grid, Typography, styled} from '@mui/material';

const Image = styled('img')({
    height:268,
    width:'88%',
    objectFit:'cover',
    borderRadius:5
})

const Component = styled(Card)`
    margin-bottom:20px;
    box-shadow: 0 2px 0 5px rgb(0 0 0/ 16%), 0 2px 10px 0 rgb(0 0 0/12%);
`;

const Container = styled(CardContent)`
    padding:8px;
    padding-bottom:4px !important;
`;

const Text = styled(Typography)`
    font-weight:300;
    font-size:22px;
    color:#44444d;
    line-height:27px;
`;

const RightContainer = styled(Grid)(({theme}) => ({

    margin: '5px 0 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm','md')]:{
        padding:'0 7px'
    },
    [theme.breakpoints.down('sm')]:{
        margin:'7px 0'
    }
}));

const Author = styled(Typography)`
    color:#808290;
    font-size:12px;
    line-height:22px;
`;

const Description = styled(Typography)`
    line-height:22px;
    color:#44444d;
    margin-top: 5px;
    font-weight: 300;
`;

const Publisher = styled(Typography)`
    font-size: 12px;
    margin-top: auto;
    margin-bottom:10px;
`

const article = ({data}) => {
    return (
        <Component>
            <Container>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12} item>
                        <Image src={data.url} alt="img"/>
                    </Grid>
                    <RightContainer lg={7} sm={7} xs={12} item>
                        <Text>{data.title}</Text>
                        <Author>
                            <b>Short</b> by {data.author} / {new Date(data.timestamp).toDateString()}
                        </Author>
                        <Description>{data.description}</Description>
                        <Publisher>Read more at &nbsp; <a style={{textDecoration:'none', color:'#000'}} href={data.link} target="_blank" rel="noreferrer"><b>{data.publisher}</b></a></Publisher>
                    </RightContainer>
                </Grid>
            </Container>

        </Component>
    );
};

export default article;