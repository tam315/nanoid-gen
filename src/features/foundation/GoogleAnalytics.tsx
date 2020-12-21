import Head from 'next/head';
import React from 'react';

export const GoogleAnalytics: React.FC = () => {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GE7MLCECZP"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GE7MLCECZP');`,
        }}
      ></script>
    </Head>
  );
};
