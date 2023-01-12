import FirstComponent from '../components/LandingPage/FirstComponent';
import SecondComponent from '../components/LandingPage/SecondComponent';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <>
      <main>
        <FirstComponent />
        <SecondComponent />
      </main>
    </>
  );
};

export default Home;
