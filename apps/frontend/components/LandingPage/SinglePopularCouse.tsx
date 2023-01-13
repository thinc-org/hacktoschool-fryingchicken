import { CourseDetailDto } from '../../models/Dto';
import Image from 'next/image';
import cleverseLogo from '../../public/cleverseLogo.png';
import Link from 'next/link';

interface props {
  data: CourseDetailDto;
}

export default function SinglePopularCourse({ data }: props) {
  return (
    <Link
      href={`/courses/${data.id}`}
      className="mobile-carousel w-[90%] text-white lg:hover:translate-y-[-5%] lg:transition-all lg:duration-300"
    >
      <div className=" grid grid-rows-[175px_minmax(200px,_1fr)_40px] grid-cols-1 w-[100%] mx-[5%] bg-grey-dark rounded-xl shadow-md">
        <div className="overflow-hidden w-[100%] h-[100%]">
          <Image
            src={cleverseLogo}
            alt="Cleverse Logo"
            className="object-cover max-w-[100%] max-h-[100%] rounded-t-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-between mt-[5%] mx-[5%]">
          <div>
            <h3 className="text-cyan-light uppercase tracking-wide mb-[10%] font-semibold">
              Online Course
            </h3>
            <h1 className="font-bold capitalize text-xl mb-[10%]">
              {data.name}
            </h1>
            <p className="text-grey-medium text-lg">{data.description}</p>
          </div>
          <div className="mb-[5%]">
            <p className="text-grey-medium text-lg">
              By: <span className="text-white">{data.instructorName}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center px-[5%] border-t-2">
          <div className="">{data.studentCount} students enrolled</div>
        </div>
      </div>
    </Link>
  );
}
