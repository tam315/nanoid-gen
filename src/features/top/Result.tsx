import { TextField } from '@material-ui/core';
import React from 'react';

type Props = {
  value: string;
};

export const Result: React.FC<Props> = ({ value }) => {
  return (
    <TextField
      label="Results"
      inputProps={{
        style: { fontFamily: 'Monaco' },
      }}
      variant="outlined"
      multiline
      value={value}
    />
  );
};
