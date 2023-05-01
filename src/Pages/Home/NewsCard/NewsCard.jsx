import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShare, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ category }) => {
    const { title, image_url, details, _id, author, rating, total_view } = category

    // console.log(category)
    return (
        <Card className="t mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: '40px', height: 'auto' }} roundedCircle variant="top" src={author?.img} />
                <div className='flex-grow-1 ps-4'>
                    <p className='mb-0'>{author.name}</p>
                    <p className='mb-auto'>{moment(author.published_date).format('l')}</p>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <span className='ms-2'><FaShare></FaShare></span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    <p className='my-3'>
                        {details.length < 250 ? details : details.slice(0, 250)}...
                        <Link to={`/news/${_id}`}>See more</Link>
                    </p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <p className='p-2 mb-auto'> {rating.number}</p>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span className='ps-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;