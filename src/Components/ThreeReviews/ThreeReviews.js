import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/UseReviews';
import Card from '../Card/Card';
import './ThreeReviews.css'
const ThreeReviews = () => {
    const [reviews, setReviews] = useReviews();
    const threeReviews = reviews.filter(review => review.id < 4);
    return (
        <div className='three-reviews-container'>
            <h1>Audience reviews(3)</h1>
            <div className='card-container'>
                {
                    threeReviews.map(review => <Card
                        key={review.id}
                        review={review}
                    ></Card>)
                }
            </div>
            <div className='btn-container'>
                <button className='see-all-btn'>
                    <Link to='/reviews'>See all reviews</Link>
                </button>
            </div>
        </div>
    );
};

export default ThreeReviews;