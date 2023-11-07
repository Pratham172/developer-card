import React from 'react';
import './App.css';
import Profile from "./ProfilePhoto";
import SocialLink from './SocialLink';
// importing icons using fontawesome.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
    return (
        <main>
            <Profile />
            <div className="main-container">
                <h1>Pratham</h1>
                <p>Frontend Developer</p>
                <ButtonComponent />
                <Details />
            </div>
            <SocialLink />
            <div className='footer-container'>
                <footer>© Pratham172, Inc. 2023. All rights reserved.</footer>
            </div>
        </main>
    );
}

// for two buttons email and linkedIn
function ButtonComponent() {
    return (
        <div className="button-container">
            <button onClick={() => handleClick('email')} className='email-btn'>< FontAwesomeIcon icon={faEnvelope} size="1x" className='icon' />Email</button>
            <button onClick={() => handleClick('linkedin')} className='linked-in-btn'><FontAwesomeIcon icon={faLinkedin} size="1x" className='icon' color='white' />LinkedIn</button>
        </div>
    );

}

// Adding details about and skills
function Details() {
    return (
        <div>
            <h3 className='about-skill'>About</h3>
            <div className='para-container'>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                    I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
            <h3 className='about-skill'>Skills</h3>
            <div className='para-container'>
                <p>
                    <span>Programing Language :</span> Html, Css, Javascript, Python, Java.
                    <br></br>
                    <span>Frameworks:</span> React js.
                    <br></br>
                    <span>Technical Skills:</span> Git and GitHub, debugging, unit testing,
                    Api, Exception handling.
                </p>
            </div>
        </div>
    );
}

// for handlink link operation on email and linkedin button
function handleClick(action) {
    const emailAddress = "prathamkulal19@gmail.com";
    const linkedInAddress = "https://www.linkedin.com/in/pratham-kulal-8a20b5244";

    if (action === "email") {
        window.open(`mailto:${emailAddress}`, "_blank")
    } else if (action === "linkedin") {
        window.open(linkedInAddress, "_blank");
    }

}

export default App;
