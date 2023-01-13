import FirstComponent from '../components/LandingPage/FirstComponent';
import SecondComponent from '../components/LandingPage/SecondComponent';

import type { NextPage } from 'next';
import ThirdComponent from '../components/LandingPage/ThirdComponent';
const Home: NextPage = () => {
  return (
    <>
      <main>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </main>
    </>
  );
};

export default Home;
