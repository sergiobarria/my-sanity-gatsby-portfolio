import React from 'react';

import Layout from '../components/layout/Layout';
import Form from '../components/ui/Form';
import SEO from '../components/analytics/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <Form />
      </Layout>
    </>
  );
}
