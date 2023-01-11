import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Dela_Gothic_One, Montserrat } from '@next/font/google';

const delaGothicOne = Dela_Gothic_One({
  weight: ['400'],
  display: 'auto',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-dela-gothic-one: ${delaGothicOne.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
