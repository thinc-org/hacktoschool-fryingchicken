import type { NextPage } from 'next';
import FirstComponent from '../components/LandingPage/FirstComponent';
import SecondComponent from '../components/LandingPage/SecondComponent';

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
