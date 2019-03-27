import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

export const SkillItemPageTemplate = ({
  title,
  type,
  value,
  helmet,
}) => {
  return (
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <h1>{type}</h1>
            <h3>{title}</h3>
            <p>{value}</p>
          </div>
        </div>
      </section>
  )
}

const SkillItem = ({ data }) => {
  const { markdownRemark: Item } = data

  return (
    <Layout>
      <SkillItemPageTemplate
        helmet={
          <Helmet titleTemplate="%s | Skill">
            <title>{`${Item.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${Item.frontmatter.type}`}
            />
          </Helmet>
        }
        title={Item.frontmatter.title}
        type={Item.frontmatter.type}
        value={Item.frontmatter.value}
      />
    </Layout>
  )
}

export default SkillItem;

export const skillsPageQuery = graphql`
  query SkillItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        type
        value
      }
    }
  }
`
