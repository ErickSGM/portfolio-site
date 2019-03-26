import PropTypes from 'prop-types';
import React from 'react';

import { AccomplishmentItemTemplate } from '../../templates/accomplishment-item';

const AccomplishmentItemPreview = ({ entry, widgetFor }) => (
  <AccomplishmentItemTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

AccomplishmentItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AccomplishmentItemPreview
