import Image from 'next/image';
import LandingData from '../LandingData';
import boyWithTree from '../../public/boyWithTree.png';

const FirstComponent = () => {
  return (
    <section className="grid grid-cols-1 justify-center h-[93vh] lg:grid-cols-2 lg:h-[90vh] lg:px-[8%] lg:items-center overflow-hidden">
      <div className="flex flex-col text-center items-center mt-[8%] lg:text-left lg:items-start lg:w-[80%] ">
        <h3 className="text-cyan-dark font-bold text-base tracking-wider sm:text-[130%] ">
          E-COURSE PLATFORM
        </h3>
        <h1 className="font-dela-gothic-one text-4xl tracking-[-0.1rem] my-[4%] sm:text-[300%] sm:leading-normal lg:text-5xl lg:translate-x-[-0.2rem] lg:leading-tight">
          Learning and <br /> teaching online, <br />
          made easy.
        </h1>
        <h3 className="font-semibold text-grey-dark text-sm sm:text-[120%] md:my-[3%]">
          Practice and learn new things with the platform.
        </h3>
        <a
          className="text-cyan-dark font-bold text-base bg-cyan-light rounded-full max-w-max px-[5%] py-[2%] my-[4%] hover:bg-cyan-dark hover:text-white transition-all duration-300"
          href="#"
        >
          About Platform
        </a>
        <div className="flex items-center justify-between w-[70%] md:mt-[3%] md:w-[50%] lg:w-[100%] xl:w-[90%]">
          <LandingData num={600} title={'Popular words'} />
          <div className="ver-line h-[50px]"></div>
          <LandingData num={700} title={'Hours of content'} />
        </div>
      </div>

      <Image
        className="translate-x-[20%] max-w-[80%] mx-auto h-auto mt-[10%] sm:max-w-[80%] lg:translate-x-[0] lg:max-w-[140%]"
        src={boyWithTree}
        alt="Lying boy with tree as background"
      />
    </section>
  );
};

export default FirstComponent;
