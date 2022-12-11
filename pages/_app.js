import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Navbar from '../components/navbar/Navbar';

import { Fragment } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        />
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
          defer
        ></script>
      </Head>
      <Navbar></Navbar>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
