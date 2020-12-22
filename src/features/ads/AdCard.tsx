import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export const AdCard: React.FC = () => {
  useEffect(() => {
    if (!process.browser) {
      return;
    }
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }
    window.adsbygoogle.push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', height: '90px', width: '100%' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT}
      data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_AD_SLOT}
    ></ins>
  );
};
