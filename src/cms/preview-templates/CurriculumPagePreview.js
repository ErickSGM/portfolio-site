import PropTypes from 'prop-types';
import React from 'react';

import CurriculumPageTemplate from '../../templates/curriculum-page';

const CurriculumPagePreview = ({ entry, widgetFor }) => (
  <CurriculumPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CurriculumPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CurriculumPagePreview
