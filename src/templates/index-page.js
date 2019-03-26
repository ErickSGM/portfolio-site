import './index-page.sass';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  profileimage,
}) => (
  <div>
    <div
      className="intro full-width-parallax-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        className="main-description"
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-primary"
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-semibold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        >
          {subtitle}
        </h3>
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${
              !!profileimage.childImageSharp ? profileimage.childImageSharp.fluid.src : profileimage
            })`,
        }}/>

        <hr/>
        <Navbar />
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  intro: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    profileimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.intro.image}
        title={frontmatter.intro.title}
        subtitle={frontmatter.intro.subtitle}
        profileimage={frontmatter.intro.profileimage}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          title
          subtitle
          profileimage {
            childImageSharp {
              fluid(maxWidth: 128, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
