import PropTypes from 'prop-types';
import React from 'react';

import SkillItemPageTemplate from '../../templates/skill-item';

const SkillPagePreview = ({ entry }) => (
    <SkillItemPageTemplate
        title={entry.getIn(['data', 'title'])}
        type={entry.getIn(['data', 'type'])}
        value={entry.getIn(['data', 'value'])}
    />
);
  
SkillPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
}


export default SkillPagePreview
