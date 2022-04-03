import React from 'react';
import ThreeReviews from '../ThreeReviews/ThreeReviews';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className="home-detail">
                    <h1 className='headline'>Movie freak</h1>
                    <h1 className='headline'>Batman:The dark Knight</h1>
                    <p>The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan.It, Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal,Colin McFarlane, and Morgan Freeman.</p>
                </div>
                <div className="img-container">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" alt="" />
                </div>

            </div>
            <ThreeReviews></ThreeReviews>
        </div>

    );
};

export default Home;