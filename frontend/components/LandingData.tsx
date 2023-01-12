import { AiFillThunderbolt } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';
import CountUp from 'react-countup';

const LandingData = ({ num, title }: { num: number; title: string }) => {
  return (
    <div className="flex flex-col items-center w-max">
      <div className="flex items-center">
        <AiFillThunderbolt className="text-xl sm:text-4xl text-cyan-dark" />

        <CountUp start={0} end={num} separator=",">
          {({ countUpRef }) => (
            <span className="text-3xl font-bold sm:text-5xl" ref={countUpRef} />
          )}
        </CountUp>
        <BiPlusMedical className="text-base sm:text-3xl text-cyan-dark" />
      </div>
      <span className="text-sm mt-1 sm:text-lg font-semibold text-grey-dark w-max">
        {title}
      </span>
    </div>
  );
};

export default LandingData;
