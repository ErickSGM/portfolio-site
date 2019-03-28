import React from 'react';

export default function SkillTypeColumn({skillType, skillsInType}) {
    return (
        <article className="column">
            <div className="message is-medium is-ios-window">
                <div className="message-header">
                    <p className="has-text-info">{skillType}</p>
                </div>
                <div className="message-body is-three-quarters is-offset-2">
                    {skillsInType.map(({title, value}) => 
                        <article className="media" key={title}>
                            <div className="media-left">
                                <figure className="image is-48x48 is-rounded">
                                    <img src="https://bulma.io/images/placeholders/48x48.png" alt={title + " icon"}/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <span className="has-text-link is-size-6 has-text-weight-semibold">{title}</span>
                                    <progress className="progress is-danger" value={value} max="100">{value}</progress>
                                </div>
                            </div>
                        </article>
                    )}
                </div>
            </div>
        </article>
    );
}