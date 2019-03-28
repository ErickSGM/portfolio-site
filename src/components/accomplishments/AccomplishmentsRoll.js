import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import AccomplishmentTags from './AccomplishmentTags';

class AccomplishmentsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: items } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {items &&
          items.map(({ node: item }) => (
            <div className="is-parent column is-6" key={item.id}>
              <article className="tile is-child box notification">
                <Link
                  className="title has-text-link is-size-4 is-4 is-block"
                  to={item.fields.slug}
                >
                  {item.frontmatter.title}
                </Link>
                <p className="has-text-info subtitle is-size-5 is-block is-5">
                  {item.frontmatter.date}
                </p>
                <p className="has-text-primary">
                  {item.excerpt}
                </p>
                <div className="level">
                  <div className="level-left">
                    <Link className="level-item button" to={item.fields.slug}>
                      Keep Reading →
                    </Link>
                  </div>
                  <div className="level-right">
                    <AccomplishmentTags tags={item.frontmatter.tags}/>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

AccomplishmentsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AccomplishmentsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "accomplishment-item" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AccomplishmentsRoll data={data} count={count} />}
  />
)
