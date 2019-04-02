import './AccomplishmentsRoll.sass';

import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import AccomplishmentTags from './AccomplishmentTags';

class AccomplishmentsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: items } = data.allMarkdownRemark

    return (
      <div className="accomplishments-roll columns is-multiline">
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
                <p className="has-text-primary">
                  {item.excerpt}
                </p>
                <div className="accomplishment-footer level">
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
