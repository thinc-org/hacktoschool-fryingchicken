import type { NextPage } from 'next';
import FirstComponent from '../components/LandingPage/FirstComponent';
import SecondComponent from '../components/LandingPage/SecondComponent';

const Home: NextPage = () => {
  if (typeof window !== 'undefined') {
    const role = localStorage.getItem('roles');
    console.log(role);
  }

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
