import React from 'react'

import photo from './photo.jpg' 
import logo from './mdi_compass-rose.png'

import './Home.css'


function Home() {
    return (
        <div>
            <div class="content">
                <h3 id='title'>Compass</h3>
                <p id='headline'>
                    Find and listen to<br/>
                    your favorite <span>Videos</span><br/>
                    on the internet.
                </p>
                <p id='description'>
                    Compass is the home of smart,<br/>
                    thoughtful videos, podcasts, and classes<br/> 
                    from your favorite creators. 
                </p>

                <img src={photo} alt="Dancing in the moonlight" />
                <img src={logo} id="home-logo" alt="Logo" />
                
                <div className='home-buttons'>
                    <a href='/signup'><button className='sign-up'>Sign Up</button></a>
                    <a href='/learn-more'><button className='learn-more'>Learn More</button></a>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Home;