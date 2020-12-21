import { Provider } from 'react-redux';
import { AdBlockGuard } from '../features/ads/AdBlockGuard';
import { GoogleAds } from '../features/ads/GoogleAds';
import { DefaultSeo } from '../features/foundation/DefaultSeo';
import { GoogleAnalytics } from '../features/foundation/GoogleAnalytics';
import { MyThemeProvider } from '../features/layout/MyThemeProvider';
import { store } from '../features/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyThemeProvider>
        <GoogleAnalytics />
        <DefaultSeo />
        <GoogleAds />
        <AdBlockGuard />
        <Component {...pageProps} />
      </MyThemeProvider>
    </Provider>
  );
}

export default MyApp;
