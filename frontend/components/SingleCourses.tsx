import Link from 'next/link';
import { CourseDetailDto } from '../models/Dto';
import { useAuth } from '../providers/AuthProvider';

interface props {
  course: CourseDetailDto;
}
const SingleCourses = ({ course }: props) => {
  const { role } = useAuth();

  return (
    <div className="border-2 w-3/4  my-3 rounded p-3 hover:text-blue-600 focus:text-blue-600">
      <Link href={'/courses/' + course.id}>
        <h1 className="text-2xl font-bold">{course.name}</h1>
        {role === 'student' || role === 'admin' ? (
          <p>
            by {course.instructorName}
            <br />
            {course.description}
          </p>
        ) : (
          <p>{course.description}</p>
        )}

        {(role === 'instructor' || role === 'admin') && (
          <p>{course.studentCount} students enrolled</p>
        )}
      </Link>
    </div>
  );
};

export default SingleCourses;
