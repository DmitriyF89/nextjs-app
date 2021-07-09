import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useContext } from 'react';
import { SSRContext } from '../../context/SSRContext';

export default function TestPage() {
  const { pathname } = useRouter();
  const { currentHost } = useContext(SSRContext);

  <Head>
    <title>Test page</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    <meta
      property="og:url"
      content={`${currentHost}${pathname}`}
      key="og:url"
    />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Test page of my app" />
    <meta property="og:description" content="Test description" />
    <meta
      property="og:image"
      content="https://norilsk-strapi-uploads.hb.bizmrg.com/unnamed_5_84919ef641.jpg"
    ></meta>
  </Head>;

  return <div>123</div>;
}
