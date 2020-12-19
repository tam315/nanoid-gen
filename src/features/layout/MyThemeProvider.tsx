import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { myTheme } from './theme';

type Props = {
  children: any;
};

export const MyThemeProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
