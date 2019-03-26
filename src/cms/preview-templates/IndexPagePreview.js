import PropTypes from 'prop-types';
import React from 'react';

import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryIntro = entry.getIn(['data', 'intro'])
  const intro = entryIntro ? entryIntro.toJS() : {};

  return (
    <IndexPageTemplate
      intro={{ intro }}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
