import React from 'react';

import Layout from '../../components/Layout';
import AllSkills from '../../components/skills/AllSkills';

export default class SkillsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <AllSkills />
          </div>
        </section>
      </Layout>
    )
  }
}
