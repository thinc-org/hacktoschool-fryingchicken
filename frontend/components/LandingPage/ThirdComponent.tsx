import { useEffect, useState } from 'react';
import { api } from '../../utils/axios';
import { CourseDetailDto } from '../../models/Dto';
import SinglePopularCourse from './SinglePopularCouse';

export default function ThirdComponent() {
  const [courses, setCourses] = useState<CourseDetailDto[]>([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await api.get('/courses');
        if (!res) throw new Error('Courses is not array!');
        res.data.sort(function (a: CourseDetailDto, b: CourseDetailDto) {
          return b.studentCount - a.studentCount;
        });
        setCourses(res.data.slice(0, 3));
      } catch (err) {
        console.log(err);
      }
    };
    getCourse();
  }, []);

  return (
    <>
      <section className="flex flex-col bg-grey-light h-[93vh] items-center">
        <h1 className="text-3xl font-bold my-[10%] sm:my-[7%] md:my-[5%] lg:mt-[5%] lg:mb-0">
          Popular Courses
        </h1>
        <div className="h-[80%] w-[90%] daisy-carousel daisy-carousel-center overflow-y-clip md:h-[100%] sm:w-[70%] lg:grid lg:grid-cols-[repeat(3,_1fr)] lg:w-[80%] lg:py-[5%]">
          {courses.map((item) => (
            <SinglePopularCourse key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
