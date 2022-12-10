import React from 'react'

import logo from './Vector.svg'

import './NavBar.css'


function NavBar() {
    return (
        <div>
            {/* <nav class="navbar bg-light">
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
            </nav> */}

            <header>
                <img className="nav-logo" src={logo} alt="Logo" />
                <nav>
                    <ul className='nav-links'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/videos'>Videos</a></li>
                        <li><a href='/podcasts'>Podcasts</a></li>
                        <li><a href='/live'>Livestream</a></li>
                        <li><a className='cta-signin' href='/signin'>Sign In</a></li>
                        <li><a className='cta' href='/signup'><button>Sign Up</button></a></li>
                    </ul>
                </nav>
            </header>
        </div>    
    )
}

export default NavBar;