import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function SocialLink() {
    return (
        <div className='icon-container'>
            <FontAwesomeIcon onClick={()=> iconClick("facebook")} icon={faFacebook} />
            <FontAwesomeIcon onClick={()=> iconClick("github")} icon={faGithub} />
            <FontAwesomeIcon onClick={()=> iconClick("instagram")} icon={faInstagram} />
            <FontAwesomeIcon onClick={()=> iconClick("twitter")} icon={faTwitter} />

        </div>
    );
}

function iconClick(action){
    const gitHub = "https://github.com/Pratham172";
    const faceBook = "https://www.facebook.com/profile.php?id=100081261787016";

    switch(action){
        case "facebook":
            window.open(faceBook, "_blank");
            break;
        case "github":
            window.open(gitHub, "_black");
            break;
        case "instagram":
            alert("Not available in Instagram");
            break;
        case "twitter":
            alert("Not available in twitter");
            break;
        default:
            alert("link is expired");


    }
}

export default SocialLink;