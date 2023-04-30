import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { title, image_url, details, _id, author, rating, total_view, category_id } = news
    console.log(title)
    return (
        <>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link className='btn btn-danger' to={`/category/${category_id}`} ><span className='me-2'><FaArrowLeft></FaArrowLeft></span> All news in this category</Link>
                </Card.Body>
            </Card >
        </>
    );
};

export default News;