import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';
import useTitle from '../../useTitle/useTitle';

const Category = () => {
    const categories = useLoaderData()
    useTitle('Category')
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