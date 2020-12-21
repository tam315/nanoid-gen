import { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('G-GE7MLCECZP');

const useGaTrackPage = (path: string) => {
  useEffect(() => {
    ReactGA.pageview(path);
  }, [path]);
};

export default useGaTrackPage;
