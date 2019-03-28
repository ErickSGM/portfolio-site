import React from 'react';

export default function AccomplishmentTags({ tags }) {
    return (
        <ul className="tags">
            {tags.map(tag => <li key={tag} className="tag is-danger">{tag}</li>)}
        </ul>
    )
}