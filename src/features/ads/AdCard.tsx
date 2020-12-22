import { css } from '@emotion/react';
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
    <div
      css={css`
        margin: 0 -1rem;
        overflow: hidden;
      `}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT}
        data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
