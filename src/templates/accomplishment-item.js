import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const AccomplishmentItemTemplate = ({
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
                    <li className="tag is-primary" key={tag + `tag`}>
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

AccomplishmentItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
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
        contentComponent={HTMLContent}
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
