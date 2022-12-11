import React from 'react'

import logo from './Vector.svg'

import './NavBar.css'


function NavBar() {
    return (
        <div>
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