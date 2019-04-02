import './AccomplishmentTags.sass';

import React from 'react';

export default function AccomplishmentTags({ tags }) {
    return (
        <ul className="accomplishment-tags">
            {tags.map(tag => <li key={tag} className="tag is-danger">{tag}</li>)}
        </ul>
    )
}