import './index-page.sass';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import GithubCorner from 'react-github-corner';

import AccomplishmentsRoll from '../components/accomplishments/AccomplishmentsRoll';
import HTMLContent from '../components/Content';
import Layout from '../components/Layout';
import AllSkills from '../components/skills/AllSkills';

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  about,
  profileimage,
  github,
}) => (
  <div>
    <div
      className="section intro full-width-parallax-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        className="short-description"
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-info has-text-centered"
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-semibold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered"
        >
          {subtitle}
        </h3>
        <figure className="image">
          <Img
            className="profile-image is-rounded"
            fixed={profileimage.childImageSharp.fixed}/>
        </figure>
        <hr/>
      </div>
    </div>
    <div className="section">
      <div className="about container">
        <h2 className="title has-text-centered">A little about myself</h2>
        <HTMLContent className="is-size-4" content={about} />
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="title has-text-centered">What I know</h2>
        <AllSkills/>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="title has-text-centered">What I've been doing</h2>
        <AccomplishmentsRoll/>
      </div>
    </div>
    <GithubCorner href={github} />
  </div>
)

IndexPageTemplate.propTypes = {
  intro: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.node.isRequired,
    profileimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    github: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.intro.image}
        title={frontmatter.intro.title}
        about={data.markdownRemark.html}
        subtitle={frontmatter.intro.subtitle}
        profileimage={frontmatter.intro.profileimage}
        github={frontmatter.intro.github}
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
      html
      frontmatter {
        intro {
          title
          subtitle
          github
          profileimage {
            childImageSharp {
              fixed(width: 256, quality: 100) {
                ...GatsbyImageSharpFixed
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
