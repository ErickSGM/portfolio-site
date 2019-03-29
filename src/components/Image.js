import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    if (image.childImageSharp.fluid)
      return (
        <Img fluid={image.childImageSharp.fluid} alt={alt} />
      )
    else {
      return (
        <Img fixed={image.childImageSharp.fixed} alt={alt} />
      )
    }
  }

  if (!!childImageSharp) {
    if (image.childImageSharp.fluid)
      return (
        <Img fluid={childImageSharp.fluid} alt={alt} />
      )
    else {
      return (
        <Img fixed={childImageSharp.fixed} alt={alt} />
      )
    }
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default Image
