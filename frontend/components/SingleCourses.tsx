import Link from 'next/link';
import { CourseDetailDto } from '../models/Dto';

interface props {
  data: CourseDetailDto;
}
const SingleCourses = ({ data }: props) => {
  return (
    <Link
      href={`/courses/${data.id}`}
      target="_blank"
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{data.name}&rarr;</h3>
      <h3 className="text-2xl font-bold">{data.instructorName}&rarr;</h3>
      <p className="mt-4 text-xl">{data.description}</p>
    </Link>
  );
};

export default SingleCourses;
