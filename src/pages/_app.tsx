import { MyThemeProvider } from '../features/layout/MyThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}

export default MyApp;
