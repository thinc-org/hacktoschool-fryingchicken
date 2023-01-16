import Image from 'next/image';
import girlSit from '../../public/girlSit.png';

const SecondComponent = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center text-center px-[5%] my-[5%] lg:grid-cols-2">
      <Image src={girlSit} alt="Girl sit" />
      <div className="flex flex-col items-center flex-wrap mx-auto w-[80%] justify-center lg:w-[100%]">
        <h1 className="font-black text-3xl my-[3%] lg:text-5xl lg:my-[5%]">
          Learn anything you prefer.
        </h1>
        <span className="text-grey-dark font-semibold lg:text-xl">
          We have courses covering almost any topics
        </span>
      </div>
    </section>
  );
};

export default SecondComponent;
