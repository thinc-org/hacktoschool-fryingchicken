import Head from 'next/head';
import SingleCourses from '../../components/SingleCourses';
import SearchBox from '../../components/SearchBox';
import { api } from '../../utils/axios';
import { useEffect, useState } from 'react';
import { CourseDetailDto } from '../../models/Dto';
import { useRouter } from 'next/router';
import { useAuth } from '../../providers/AuthProvider';
import Link from 'next/link';
import toast from 'react-hot-toast';

const MyCourses = () => {
  const { role } = useAuth();
  const [data, setData] = useState<CourseDetailDto[]>([]);
  const [showData, setShowData] = useState<CourseDetailDto[]>([]);
  const [name, setName] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [isAdvanced, setIsAdvanced] = useState(false);
  const router = useRouter();
  const { isReady } = router;

  useEffect(() => {
    if (!isReady) return;

    const getData = async () => {
      try {
        const res = await api.get('/courses');
        const prop = await res.data;
        setData(prop);
        setShowData(prop);
      } catch (err) {
        console.log(err);
        toast.error('Unknown Error');
      }
    };
    getData();
  }, [isReady]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>All Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">All Courses</h1>

        <SearchBox
          name={name}
          setName={setName}
          showData={showData}
          setShowData={setShowData}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          isAdvanced={isAdvanced}
          setIsAdvanced={setIsAdvanced}
          data={data}
        />

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {showData.map((course: CourseDetailDto) => {
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
          })}
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
