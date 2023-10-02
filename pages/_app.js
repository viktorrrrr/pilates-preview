import '../styles/tailwind.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import reformer_pose from '../components/reformer_pose';

const components = {
  reformer_pose: reformer_pose,
};

storyblokInit({
  accessToken: 'VetmLyZdRLSgIDv6QSXwvAtt',
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
