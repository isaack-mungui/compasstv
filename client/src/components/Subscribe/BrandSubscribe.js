import React from "react";

import './BrandSubscribe.css'

function BrandSubscribe() {
    return (
        <div className="brand-subscribe-page">
            <h2 id="question">Why Subscribe?</h2>
            
            <h4 id="exclusive">Exclusive Content</h4>
            <h4 id="support">Support Creators</h4>
            <h4 id="ads">No pre-roll ads</h4>
            <h4 id="download">Download Videos</h4>

            <h4 id="price-tag">$1/month</h4>
            <h4 id="price-justification">
                A Compass subscription is just
                $1 per month or $10 per year.
            </h4>
            <h4 id="cancel-anytime">Cancel Anytime.</h4>
            <input class="btn btn-primary" id="sign-up" type="button" value="Sign Up for Compass"></input>
            
            <hr id="subscribe-hr"/>
        </div>
    )
}

export default BrandSubscribe