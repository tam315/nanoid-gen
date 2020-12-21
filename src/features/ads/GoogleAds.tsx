import Head from 'next/head';
import React from 'react';

export const GoogleAds: React.FC = () => {
  return (
    <Head>
      {process.browser ? (
        // adsense
        <script
          data-ad-client="ca-pub-7134126650568891"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      ) : null}
    </Head>
  );
};
