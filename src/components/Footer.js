import React from 'react'
import './variables.scss';
import './footer.scss';

const Footer = () => {
    return(
        <footer>
            <p class="assignment"> 
                <strong>Assignment:</strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.theodinproject.com/courses/javascript/lessons/frameworks">
                    The Odin Project - Frameworks
                </a>
            </p>
            <p>For this assignment you’ll be recreating one of our previous assignments using your framework of choice.</p>
        </footer>
    )
}
export default Footer;
