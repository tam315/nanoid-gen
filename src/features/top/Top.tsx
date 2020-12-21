import React from 'react';
import { SeedCondition } from './SeedCondition';
import { SeedTextField } from './SeedTextField';

export const Top: React.FC = () => {
  return (
    <div>
      <SeedCondition />
      <SeedTextField />
    </div>
  );
};
