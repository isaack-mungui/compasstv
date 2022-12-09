import React from 'react'

import logo from './mdi_compass-rose.png'

import './NavBar.css'


function NavBar() {
    return (
        <div>
            <nav class="navbar bg-light">
                <img src={logo} id="nav-logo" alt="Logo" />
                <div class="container-fluid">
                    <a class="navbar-brand home" href='/'>Home</a>
                    <a class="navbar-brand videos" href='/videos'>Videos</a>
                    <a class="navbar-brand podcasts" href='/podcasts'>Podcasts</a>
                    <a class="navbar-brand live" href='/livestream' target="_blank">Live</a>
                    <a class="navbar-brand sign-in" href='/signin'>Sign In</a>
                    <button class="btn sign-up" type="submit">
                        <a href='/signup' id='sign-up'>Sign Up</a>
                    </button>
                </div>
            </nav>
        </div>    
    )
}

export default NavBar;