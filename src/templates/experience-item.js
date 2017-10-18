import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const ExperienceItemTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const ItemContent = contentComponent || Content

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
            <ItemContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ExperienceItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ExperienceItem = ({ data }) => {
  const { markdownRemark: Item } = data

  return (
    <Layout>
      <ExperienceItemTemplate
        content={Item.html}
        contentComponent={HTMLContent}
        description={Item.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Experience">
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

ExperienceItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ExperienceItem

export const pageQuery = graphql`
  query ExperienceItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
