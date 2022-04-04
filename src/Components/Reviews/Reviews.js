import React from 'react';
import useReviews from '../../Hooks/UseReviews';
import Card from '../Card/Card';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews-container'>
            <h1>These are all reviews</h1>
            <div className='card-container'>
                {
                    reviews.map(review => <Card
                        key={review.id}
                        review={review}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Reviews;