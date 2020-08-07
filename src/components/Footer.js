import React from 'react'
import './variables.scss';
import './footer.scss';

const Footer = () => {
    return(
        <footer>
            <h4>Learning React</h4>
            <p class="assignment"> Assignment:  
                <a target="_blank" rel="noopener noreferrer" href="https://www.theodinproject.com/courses/javascript/lessons/frameworks">
                    The Odin Project - Frameworks
                </a>
            </p>
        </footer>
    )
}
export default Footer;
