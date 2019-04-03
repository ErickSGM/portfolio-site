import './Skill.sass';

import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import React from 'react';

import Image from '../Image';

export default function ({ title, value, img }) {
    return (
        <article className="media skill-box">
            <div className="media-left">
                <figure className="image is-48x48 is-rounded">
                    <Image imageInfo={{alt: title + " icon", image: img}}/>
                </figure>
            </div>
            <div className="media-content">
                <div className="skill content">
                    <Link to={`/tags/${kebabCase(title)}/`} className="skill-title has-text-link is-size-5 has-text-weight-semibold">
                        {title}
                    </Link>
                    <div className="skill-counter">
                        <progress className="progress is-danger is-medium" value={value} max="100">{value}</progress>
                        <small 
                            className="skill-value is-size-6 has-text-primary has-text-weight-bold"
                            style={{width: `${value}%`}}
                        >{value}</small>
                    </div>
                </div>
            </div>
        </article>
    )
}