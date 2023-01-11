import type { NextPage } from 'next';
import FirstComponent from '../components/LandingPage/FirstComponent';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <FirstComponent />
        <FirstComponent />
      </main>
    </>
  );
};

export default Home;
