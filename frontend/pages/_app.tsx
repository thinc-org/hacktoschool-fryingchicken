import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AuthProvider from '../providers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
