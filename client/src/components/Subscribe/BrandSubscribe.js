import React from "react";

import './BrandSubscribe.css'

import ads from './ads-off.svg'
import content from './exclusive-content.svg'
import download from './offline-download.svg'
import support from './support.svg'


function BrandSubscribe() {
    return (
        <div>
            <section>
                <h2 id="question">Why Subscribe?</h2>

                <div className="subscribe">
                    <img src={content} id="exclusive-image" alt="Exclusive content" />
                    <h4 id="exclusive">Exclusive Content</h4>

                    <img src={support} id="support-image" alt="Support creators" />
                    <h4 id="support">Support Creators</h4>

                    <img src={ads} id="ads-image" alt="Ads Off!" />
                    <h4 id="ads">No pre-roll ads</h4>

                    <img src={download} id="download-image" alt="Download for offline" />
                    <h4 id="download">Download Videos</h4>
                </div>

                <h4 id="price-tag">$1/month</h4>
                <h4 id="price-justification">
                    A Compass subscription is just<br/>
                    $1 per month or $10 per year.
                </h4>
                <h4 id="cancel-anytime">Cancel Anytime.</h4>

                <a href='/signup'><button id='sign-up'>Sign Up for Compass</button></a>
            </section>

            <hr id="subscribe-hr"/>
        </div>
    )
}

export default BrandSubscribe