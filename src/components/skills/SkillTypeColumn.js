import React from 'react';






export default function SkillTypeColumn({skillType, skillsInType}) {
    return (
        <article className="column">
            <div className="message">
                <div className="message-header">
                    <p>{skillType}</p>
                </div>
                <div className="message-body is-three-quarters is-offset-2">
                    {skillsInType.map(({title, value}) => 
                        <div key={title}>
                            {title}
                            <progress className="progress is-info" value={value} max="100">{value}</progress>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}