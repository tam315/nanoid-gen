import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { DefaultSeo } from '../features/foundation/DefaultSeo';
import useGaTrackPage from '../features/foundation/useGaTrackPage';
import { MyThemeProvider } from '../features/layout/MyThemeProvider';
import { store } from '../features/store/store';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();

  useGaTrackPage(asPath);

  return (
    <Provider store={store}>
      <MyThemeProvider>
        <DefaultSeo />
        <Component {...pageProps} />
      </MyThemeProvider>
    </Provider>
  );
}

export default MyApp;
