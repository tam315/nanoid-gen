import { TextField } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';

type Props = {
  value: string;
};

export const Result: React.FC<Props> = ({ value }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <TextField
      label="Results"
      inputProps={{
        style: { fontFamily: 'Monaco' },
      }}
      variant="outlined"
      multiline
      value={value}
      ref={ref}
    />
  );
};
