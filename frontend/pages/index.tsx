import type { NextPage } from 'next';
import Image from 'next/image';
import lyingBoy from '../public/lyingBoy.png';
import bgTree from '../public/BgTree.png';
import frontTree from '../public/frontTree.png';
import LandingData from '../components/LandingData';

const Home: NextPage = () => {
  return (
    <>
      <main className="px-[8%] my-[3%] flex flex-col justify-between overflow-x-hidden md:flex-row text-center md:text-left">
        <div className="">
          <h2 className="text-cyan-dark font-bold text-sm sm:text-lg uppercase tracking-[0.15rem]">
            E-COURSE PLATFORM
          </h2>
          <h1 className="py-[3%] text-3xl sm:text-[4rem] tracking-[-0.05rem] sm:leading-[4rem] font-extrabold">
            Learning and
            <br />
            teaching online,
            <br />
            made easy.
            <br />
          </h1>
          <h2 className="text-grey-dark text-sm sm:text-lg font-semibold pt-2">
            Practice your English and learn new things with the platform.
          </h2>
          <a
            className="my-8 py-3 inline-block bg-cyan-light rounded-full px-5 font-bold text-cyan-dark hover:bg-cyan-dark hover:text-white transition-all duration-300"
            href="#"
          >
            About Platform
          </a>
          <div className="flex content-center justify-between w-[80%] items-center mx-auto">
            <LandingData num={600} title={'Popular words'} />
            <div className="h-[70px] ver-line"></div>
            <LandingData num={700} title={'Hours of content'} />
          </div>
        </div>
        <div className="relative right-[-4rem] w-[100%] md:w-[50%] lg:pt-[1%] h-[80vh]">
          <Image
            className="hidden lg:block lg:absolute lg:z-[-1] lg:max-w-[30%] lg:left-[-10%] lg:top-[25%]"
            src={bgTree}
            alt="background tree"
          />
          <Image
            className="hidden lg:block lg:absolute lg:z-[1] lg:right-[-150px] lg:max-w-[70%] lg:bottom-[5%]"
            src={frontTree}
            alt="front tree"
          />
          <Image
            className="max-w-[80%] top-[5%] mx-auto sm:top-[30%] absolute sm:max-w-[90%] lg:top-[10%]"
            src={lyingBoy}
            alt="lying boy"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
