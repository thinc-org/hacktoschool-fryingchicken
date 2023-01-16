import type { NextPage } from 'next';
import HeroSection from '../components/LandingPage/HeroSection';
import CompanySlogan from '../components/LandingPage/CompanySlogan';
import PopularCourses from '../components/LandingPage/PopularCourses';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <CompanySlogan />
        <PopularCourses />
      </main>
    </>
  );
};

export default Home;
