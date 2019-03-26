import React from 'react';

import github from '../img/github-icon.svg';

export default function SocialMedias() {
    return (
        <div className="navbar-end has-text-centered">
            <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            >
            <span className="icon">
                <img src={github} alt="Github" />
            </span>
            </a>
        </div>
    );
}