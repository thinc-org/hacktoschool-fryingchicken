import Head from 'next/head';
import SingleCourses from '../components/SingleCourses';
import { api } from '../utils/axios';
import { useEffect, useState } from 'react';
import { CourseDetailDto } from '../models/Dto';

const MyCourses = () => {
  const [data, setData] = useState<CourseDetailDto[]>([]);

  useEffect(() => {
    const getData = async () => {
      // Todo: remove comment
      const res = await api.get('courses');
      const prop = await res.data;
      // const prop = [
      //   {
      //     id: 1,
      //     name: 'General Philosophy',
      //     instructorId: 313,
      //     instructorName: 'Nac Nacho',
      //     description: 'You will learn the meaning of life from this course',
      //   },
      //   {
      //     id: 2,
      //     name: 'General Philosophy',
      //     instructorId: 313,
      //     instructorName: 'Nac Nacho',
      //     description: 'You will learn the meaning of life from this course',
      //   },
      //   {
      //     id: 3,
      //     name: 'General Philosophy',
      //     instructorId: 313,
      //     instructorName: 'Nac Nacho',
      //     description: 'You will learn the meaning of life from this course',
      //   },
      //   {
      //     id: 4,
      //     name: 'General Philosophy',
      //     instructorId: 313,
      //     instructorName: 'Nac Nacho',
      //     description: 'You will learn the meaning of life from this course',
      //   },
      //   {
      //     id: 5,
      //     name: 'General Philosophy',
      //     instructorId: 313,
      //     instructorName: 'Nac Nacho',
      //     description: 'You will learn the meaning of life from this course',
      //   },
      //   {
      //     id: 6,
      //     name: 'General Philosophy',
      //     instructorId: 313,
      //     instructorName: 'Nac Nacho',
      //     description: 'You will learn the meaning of life from this course',
      //   },
      // ];
      setData(prop);
    };
    getData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>All Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">All Courses</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {data.map((prop: CourseDetailDto) => (
            <SingleCourses data={prop} key={prop.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
