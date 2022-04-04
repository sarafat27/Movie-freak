import React from 'react';
import './Card.css'
const Card = ({ review }) => {
    const { name, text, rating } = review;
    return (
        <div className='card'>
            <h4 className='card-info'>Name: {name}</h4>
            <p className='card-info'>{text}</p>
            <p className='card-info'><small>Rating: {rating}</small></p>
        </div>
    );
};

export default Card;