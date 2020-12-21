import { Provider } from 'react-redux';
import { MyThemeProvider } from '../features/layout/MyThemeProvider';
import { store } from '../features/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyThemeProvider>
        <Component {...pageProps} />
      </MyThemeProvider>
    </Provider>
  );
}

export default MyApp;
