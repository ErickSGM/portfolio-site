import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import React from 'react';

export default function ({ title, value }) {
    return (
        <article className="media">
            <div className="media-left">
                <figure className="image is-48x48 is-rounded">
                    <img src="https://bulma.io/images/placeholders/48x48.png" alt={title + " icon"}/>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <Link to={`/tags/${kebabCase(title)}/`} className="has-text-link is-size-6 has-text-weight-semibold">
                        {title}
                    </Link>
                    <progress className="progress is-danger" value={value} max="100">{value}</progress>
                </div>
            </div>
        </article>
    )
}