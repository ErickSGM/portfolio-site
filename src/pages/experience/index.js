import React from 'react';

import ExperienceRoll from '../../components/ExperienceRoll';
import Layout from '../../components/Layout';

export default class ExperienceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/Experience-index.jpg')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Latest Stories
                </h1>
              </div>
            </div>
            <ExperienceRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
