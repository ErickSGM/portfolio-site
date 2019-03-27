import React from 'react';

export default function SkillTypeColumn({skillType, skillsInType}) {
    return (
        <article className="column">
            <div className="message is-medium">
                <div className="message-header is-centered">
                    <p className="has-text-info">{skillType}</p>
                </div>
                <div className="message-body is-three-quarters is-offset-2">
                    {skillsInType.map(({title, value}) => 
                        <div key={title}>
                            <span className="has-text-link is-size-5 has-text-weight-bold">{title}</span>
                            <progress className="progress is-danger" value={value} max="100">{value}</progress>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}