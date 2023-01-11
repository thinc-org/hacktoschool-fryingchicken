import Head from 'next/head';
import SingleCourses from '../components/SingleCourses';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface CourseProp {
  courseName: string;
}
const MyCourses = () => {
  const [data, setData] = useState<CourseProp[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3001/course');
      const prop = await res.data;
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
          {data.map((prop: CourseProp) => (
            <SingleCourses docsName={prop.courseName} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
