import Head from "next/head";
import React from 'react';

export const DefaultSeo: React.FC = () => {
  return <Head>
    <title>Nano ID Generator</title>
    <meta name="description" content="Generate multiple Nano IDs online" />
  </Head>;
};
