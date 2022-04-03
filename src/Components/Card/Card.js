import React from 'react';
import './Card.css'
const Card = ({ review }) => {
    const { name, text, rating } = review;
    return (
        <div className='card'>
            <h4>Name: {name}</h4>
            <p>Review: {text}</p>
            <p><small>Rating: {rating}</small></p>
        </div>
    );
};

export default Card;