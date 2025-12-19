import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { myTheme } from './theme';

type Props = {
  children: any;
};

export const MyThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
