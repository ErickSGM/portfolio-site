import PropTypes from 'prop-types';
import React from 'react';

export const HTMLContent = ({ content, className }) => (
  <div className={"content " + className} dangerouslySetInnerHTML={{ __html: content }} />
)

HTMLContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default HTMLContent
