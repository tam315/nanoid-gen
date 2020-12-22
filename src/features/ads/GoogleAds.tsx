import Head from 'next/head';
import React from 'react';

export const GoogleAds: React.FC = () => {
  return (
    <Head>
      {process.browser ? (
        // adsense
        <script
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT}
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      ) : null}
    </Head>
  );
};
