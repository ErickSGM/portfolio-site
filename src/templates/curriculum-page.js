import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HTMLContent from '../components/Content';
import Layout from '../components/Layout';

export const CurriculumPageTemplate = ({ title, content}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <HTMLContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CurriculumPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const CurriculumPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CurriculumPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CurriculumPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CurriculumPage

export const CurriculumPageQuery = graphql`
  query CurriculumPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
