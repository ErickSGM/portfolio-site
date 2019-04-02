import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import AccomplishmentTags from '../components/accomplishments/AccomplishmentTags';
import HTMLContent from '../components/Content';
import Layout from '../components/Layout';

export const AccomplishmentItemTemplate = ({
  content,
  description,
  tags,
  title,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <HTMLContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <AccomplishmentTags tags={tags}/>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

AccomplishmentItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const AccomplishmentItem = ({ data }) => {
  const { markdownRemark: Item } = data

  return (
    <Layout>
      <AccomplishmentItemTemplate
        content={Item.html}
        description={Item.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Accomplishments">
            <title>{`${Item.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${Item.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={Item.frontmatter.tags}
        title={Item.frontmatter.title}
      />
    </Layout>
  )
}

AccomplishmentItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AccomplishmentItem

export const pageQuery = graphql`
  query AccomplishmentItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
      }
    }
  }
`
