import React from 'react';

import Skill from './Skill';

export default function SkillTypeColumn({skillType, skillsInType}) {
    return (
        <article className="column">
            <div className="message is-medium is-ios-window">
                <div className="message-header">
                    <p className="has-text-info">{skillType}</p>
                </div>
                <div className="message-body is-three-quarters is-offset-2">
                    {skillsInType.map((skill) => 
                        <Skill key={skill.title} {...skill}/>
                    )}
                </div>
            </div>
        </article>
    );
}