import React from 'react';

import Image from '../components/Image';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div>
      <div className="section">
        <div className="container has-text-centered">
          <p className="title is-1">404 NOT FOUND</p>
          <p className="subtitle is-3">Sorry about that, maybe is something I'm currently working on</p>
        </div>
      </div>
      <div className="section">
        <div className="container has-text-centered">
        <Image imageInfo={{image: '/img/404.jpg'}}/>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
