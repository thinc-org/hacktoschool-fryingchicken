import { useEffect, useState } from 'react';
import { api } from '../../utils/axios';
import { CourseDetailDto } from '../../models/Dto';

export default function ThirdComponent() {
  const [courses, setCourses] = useState<CourseDetailDto[]>([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await api.get('/courses');
        if (!res) throw new Error('Courses is not array!');
        const ans = res.data
          .sort(function (a: CourseDetailDto, b: CourseDetailDto) {
            return a.studentCount > b.studentCount;
          })
          .slice(0, 3);
        console.log(ans);
        setCourses(ans);
      } catch (err) {
        console.log(err);
      }
    };
    getCourse();
  }, []);

  return (
    <>
      {courses.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h3>{item.instructorName}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}
