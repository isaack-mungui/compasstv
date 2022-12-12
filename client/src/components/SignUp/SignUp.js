import React from "react";
import { useState, useEffect } from "react";


import './SignUp.css'

import Footer from '../Footer/Footer'

function SignUp({setCurrentUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

    // const fetchUrl = "https://compasstv-production.up.railway.app"

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            email,
            password
        }

        
        fetch("https://compasstv-production.up.railway.app/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
        .then(res => {
            if(res.ok) {
                res.json().then(setCurrentUser)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="InputEmail" id="signup-email">Email address</label>
                    <input
                     type="email"
                     className="form-control" 
                     id="form-input-email" 
                     aria-describedby="emailHelp" 
                     placeholder="name@example.com" 
                     onChange={(e) => setEmail(e.target.value)}
                    />

                    <label for="InputPassword" id="signup-password">Password</label>
                    <input
                     type="password" 
                     className="form-control" 
                     id="form-input-password" 
                     placeholder="Password" 
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">I agree to the Compass Terms of Service and Privacy Policy</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Opt in to Compass communications. No spam, ever.</label>
                </div>
            </form>
            <a href='/signup'><button className='create-account' onClick={handleSubmit}>Create Account</button></a>
            {/* <input class="btn btn-primary create-account" type="button" value="Create Account"></input> */}

            <h4 className="sign-up-tag">Already have an account? <a href="/signin" className="sign-up-link">Sign in to Compass</a></h4>

            <Footer />            
        </div>
    )
}

export default SignUp