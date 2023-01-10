import type { NextPage } from 'next';
import Image from 'next/image';
import lyingBoy from '../public/lyingBoy.png';
import bgTree from '../public/BgTree.png';
import frontTree from '../public/frontTree.png';
import LandingData from '../components/landingData';

const Home: NextPage = () => {
  return (
    <>
      <main className="px-[8%] py-[3%] flex justify-between overflow-x-hidden">
        <div className="">
          <h2 className="text-cyan-dark font-bold font-montserrat text-lg uppercase tracking-[0.15rem]">
            E-COURSE PLATFORM
          </h2>
          <h1 className="py-[3%] font-montserrat text-[4rem] tracking-[-0.05rem] leading-[4rem] font-extrabold">
            Learning and
            <br />
            teaching online,
            <br />
            made easy.
            <br />
          </h1>
          <h2 className="text-grey-dark text-lg font-semibold pt-2">
            Practice your English and learn new things
            <br />
            with the platform.
          </h2>
          <a
            className="my-8 py-3 inline-block bg-cyan-light rounded-full px-5 font-bold text-cyan-dark hover:bg-cyan-dark hover:text-white transition-all duration-300"
            href="#"
          >
            About Platform
          </a>
          <div className="flex content-center justify-between w-[80%] items-center">
            <LandingData num={600} title={'Popular words'} />
            <div className="h-[70px] ver-line"></div>
            <LandingData num={700} title={'Hours of content'} />
          </div>
        </div>
        <div className="relative right-[-4rem]">
          <Image
            className="md:absolute md:z-[-1] md:max-w-[12rem] md:left-[-700px] md:top-[125px]"
            src={bgTree}
            alt="background tree"
          />
          <Image
            className="md:absolute md:z-[1] md:right-[-150px] md:top-0 md:max-w-lg"
            src={frontTree}
            alt="front tree"
          />
          <Image
            className="md:absolute md:right-[100px] md:pt-4 md:max-w-[34rem]"
            src={lyingBoy}
            alt="lying boy"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
