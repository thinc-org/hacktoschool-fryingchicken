import { AiFillThunderbolt } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';

const LandingData = ({ num, title }: { num: number; title: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <AiFillThunderbolt className="text-xl sm:text-4xl text-cyan-dark" />
        <span className="text-2xl font-bold sm:text-5xl">{num}</span>
        <BiPlusMedical className="text-base sm:text-3xl text-cyan-dark" />
      </div>
      <span className="text-sm mt-1 sm:text-lg font-semibold text-grey-dark">
        {title}
      </span>
    </div>
  );
};

export default LandingData;
