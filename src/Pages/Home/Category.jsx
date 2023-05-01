import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Category = () => {
    const categories = useLoaderData()
    return (
        <>
            {
                categories.map(category =>
                    <NewsCard key={category._id} category={category}></NewsCard>)
            }

        </>

    );
};

export default Category;