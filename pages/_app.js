import Layout from '../components/layout/Layout';
import Navbar from '../components/navbar/Navbar';

import { Fragment } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
