import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

import './SignIn.css'

function SignIn({ onSignIn }) {
    const [emailAddress, setEmailAddress] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://compasstv-production.up.railway.app/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailAddress }),
        })
        .then((r) => r.json())
        .then((user) => onSignIn(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    {/* <label for="exampleInputPassword1">Password</label> */}
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
            </form>

            <button type="submit" class="btn sign-in" onClick={handleSubmit}>Sign In</button>
                
            <h4>Don't have an account yet? <a href="/signup" className="sign-in-link">Create Account</a></h4>
        </div>
    )
}

export default SignIn