import React, { useEffect, useState } from 'react';
import {Box} from '@mui/material';
import { getNews } from './service/api';
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const dailyNews = async  () => {
            let response = await getNews(page);
            console.log(new Set([...news, ...response.data]));
            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    },[page])
    return (
        <Box>
        {
            news.map(data => (
                <Article data={data}/>
            ))
        }
        </Box>
    );
};

export default Articles;
