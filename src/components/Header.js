import React from 'react'
import './variables.scss';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const userIcon = <FontAwesomeIcon icon={faUserAstronaut} />
    const codeIcon = <FontAwesomeIcon icon={faCode} />

    return(
        <header>
            <div>
                <h1><span class="react">React</span>ion Library</h1>
                <span>Gregory "GERRG" Bastianelli </span>
            </div>
            <div class="links">
                <a rel="noopener noreferrer" target="_blank" href="http://gerrg.com">{userIcon} GERRG.com</a>
                <a href="http://gerrg.com">{codeIcon} Source Code</a>
            </div>
        </header>
    )
}

export default Header