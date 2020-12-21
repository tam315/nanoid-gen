import { NextSeo } from 'next-seo';
import React from 'react';

export const DefaultSeo: React.FC = () => {
  return (
    <NextSeo
      title="Nano ID Generator"
      description="Generate multiple Nano IDs online"
    />
  );
};
