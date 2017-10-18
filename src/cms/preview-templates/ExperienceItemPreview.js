import PropTypes from 'prop-types';
import React from 'react';

import { ExperienceItemTemplate } from '../../templates/experience-item';

const ExperienceItemPreview = ({ entry, widgetFor }) => (
  <ExperienceItemTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ExperienceItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ExperienceItemPreview
