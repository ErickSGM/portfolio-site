import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import SkillTypeColumn from './SkillTypeColumn';

class Skills extends React.Component {
  render() {
    const { data } = this.props
    const { edges: items } = data.allMarkdownRemark
    console.log(items);
    const itemsByType = items.map(x => x.node.frontmatter).reduce((acc, item) => ({
      ...acc,
      [item.type]: !!acc[item.type] ? acc[item.type].concat(item) : [item]
    }), {})
    console.log(itemsByType);
    return (
      <div className="columns">
        {Object.entries(itemsByType).map(([type, skills]) => (
            <SkillTypeColumn key={type} skillType={type} skillsInType={skills}/>
        ))}
      </div>
    )
  }
}

Skills.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SkillsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "skill-item" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                type
                value
              }
            }
          }
        }
      }
    `}
    render={(data) => <Skills data={data}/>}
  />
)
