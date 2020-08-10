import React, { Component } from 'react'
import '../sass/variables.scss';
import '../sass/footer.scss';

class Footer extends Component {

    render(){

        return(
            <footer>
                <p className="assignment"> 
                    <strong>Assignment:</strong>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.theodinproject.com/courses/javascript/lessons/frameworks">
                        The Odin Project - Frameworks
                    </a>
                </p>
                <p>For this assignment you’ll be recreating one of our previous assignments using your framework of choice.</p>
            </footer>
        )
    }
}
export default Footer;
