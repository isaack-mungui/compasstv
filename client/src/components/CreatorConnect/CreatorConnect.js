import React from "react";

import './CreatorConnect.css'

import owner from "./owners.svg"

function CreatorConnect() {
    return (
        <div>
            <h4 id="connect">Connect with:<br/>your favorite creators.</h4>
            
            <h6 id="ownership">COMPASS IS OWNED AND OPERATED BY:</h6>
            <img src={owner} className="creator-image" id="creator-image1" alt="Content Creators" />
            <img src={owner} className="creator-image" id="creator-image2" alt="Content Creators" />
            <img src={owner} className="creator-image" id="creator-image3" alt="Content Creators" />
            <img src={owner} className="creator-image" id="creator-image4" alt="Content Creators" />
            <img src={owner} className="creator-image" id="creator-image5" alt="Content Creators" />
            
            <a href='/creators'><button id='browse-channels'>Browse all Channels</button></a>

            <hr id="connect-page-hr" />
        </div>
    )
}

export default CreatorConnect