/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
    <div className="min-h-screen pt-4 overflow-hidden bg-gray-50">
      <div className="container min-h-screen p-4 mx-auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
