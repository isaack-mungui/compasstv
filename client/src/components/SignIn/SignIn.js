import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

import './SignIn.css'

function SignIn({ onSignIn }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://compasstv-production.up.railway.app/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email }),
        })
        .then((r) => r.json())
        .then((user) => onSignIn(user))
        navigate('/videos')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="InputEmail" id="signin-email">Email address</label>
                    <input
                     type="email" 
                     class="form-control" 
                     id="exampleInputEmail1"    
                     aria-describedby="emailHelp" 
                     placeholder="name@example.com" 
                     onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="InputPassword" id="signin-password">Password</label>
                    <input
                     type="password" 
                     class="form-control" 
                     id="InputPassword" 
                     placeholder="Password" 
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>

            <button type="submit" class="btn sign-in" onClick={handleSubmit}>Sign In</button>
                
            <h4>Don't have an account yet? <a href="/signup" className="sign-in-link">Create Account</a></h4>
        </div>
    )
}

export default SignIn