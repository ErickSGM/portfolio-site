import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

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
                <p>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={item.fields.slug}
                  >
                    {item.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {item.frontmatter.date}
                  </span>
                </p>
                <p>
                  {item.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={item.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AccomplishmentsRoll data={data} count={count} />}
  />
)
