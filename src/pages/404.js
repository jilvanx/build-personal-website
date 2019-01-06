import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Title from 'components/Title';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section container">
      <Title>404 Not Found</Title>
      <p className="has-text-centered">
        You just hit a route that doesn&#39;t exist
        {' '}
        <span className="emoji" role="img" aria-label="confused">
          😕
        </span>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
