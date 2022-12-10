import React from 'react'

import photo from './photo.jpg' 
import logo from './mdi_compass-rose.png'

import './Home.css'


function Home() {
    return (
        <div>
            <div class="intro">
                <h1 id='title'>Compass</h1>
                <h2 id='headline'>
                    Find and listen to 
                    your favorite Videos
                    on the internet.
                </h2>
                <h3 id='description'>
                    Compass is the home of smart, 
                    thoughtful videos, podcasts, and classes 
                    from your favorite creators. 
                </h3>

                <img src={photo} alt="Dancing in the moonlight" />
                <img src={logo} id="home-logo" alt="Logo" />
                

                <input class="btn sign-up" type="button" value="Sign Up">
                    {/* <a href='/signup' id='sign-up'>Sign Up</a> */}
                </input>
                <input class="btn learn-more" type="button" value="Learn More"></input>

                {/* <hr /> */}
            </div>
        </div>
    );
}

export default Home;