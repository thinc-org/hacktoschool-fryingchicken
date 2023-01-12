import React, { useState, useEffect } from 'react';
import { CourseDetailDto, EnrollDetailDto } from '../models/Dto';
import { useAuth } from '../providers/AuthProvider';
import { api } from '../utils/axios';
import Link from 'next/link';
import SingleCourses from '../components/SingleCourses';
import Head from 'next/head';
import CreateCourseModal from '../components/CreateCourseModal';

export default function mycourse_instructor() {
  const { username, role } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [enrolls, setEnrolls] = useState<EnrollDetailDto[]>([]);
  const [courses, setCourses] = useState<CourseDetailDto[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // const courses = [
  //   {
  //     id: '1',
  //     name: 'Machine learning specialization',
  //     instructorName: 'Andrew Ng',
  //     description:
  //       'machine learning machine learning machine learning machine learning machine learning',
  //     enrolledStudent: 69,
  //   },
  //   {
  //     id: '2',
  //     name: 'PHASATHAIPHUENTHAN',
  //     instructorName: 'MAEMUENG',
  //     description:
  //       'THTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTHTH',
  //     enrolledStudent: '420',
  //   },
  //   {
  //     id: '3',
  //     name: 'Quantum Physics For Baby',
  //     instructorName: 'Jo Mama',
  //     description:
  //       ' bljkdfngpbjnspjgnbs;kglk;bbf ;bs;lknr;nrgnr;jnsg;jbnsgfbnrthnbsglkn;slkntkmbndign;nkentk',
  //     enrolledStudent: '78910',
  //   },
  // ];
  const getEnrolls = async () => {
    const res = await api(`/enrolls/username/${username}`);
    const data = await res.data;
    setEnrolls(data);
    setIsLoading(false);
  };
  const getCourse = async (enroll: EnrollDetailDto) => {
    const res = await api.get(`/courses/${enroll.courseId}`);
    const prop: CourseDetailDto = await res.data;
    setCourses([...courses, prop]);
    setIndex(index + 1);
  };

  // Render component when username is loaded
  useEffect(() => {
    getEnrolls();
  }, [username]);

  const handleSubmit = async () => {
    const res = await api.post('/courses', {
      name: title,
      description,
      instructorName: username,
    });

    const courseId = res.data.id;
    await api.post('/enrolls', {
      courseId,
      username,
    });
    await getEnrolls();
  };

  if (index < enrolls.length) {
    getCourse(enrolls[index]);
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">My Courses</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {courses.map((course: CourseDetailDto, index) => {
            return (
              <div
                className="border-2 w-3/4 mx-auto my-3 rounded p-3 hover:text-blue-600 focus:text-blue-600"
                key={index}
              >
                <Link href={'/courses/' + course.id}>
                  <h1 className="text-2xl font-bold">{course.name}</h1>
                  {role == 'student' ? (
                    <p>
                      by {course.instructorName}
                      <br />
                      {course.description}
                    </p>
                  ) : (
                    <p>{course.description}</p>
                  )}
                </Link>
              </div>
              // <SingleCourses data={course} key={course.id} />
            );
          })}

          {role == 'instructor' && (
            <div className="flex justify-end w-3/4 mx-auto">
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Create a new course
              </button>
            </div>
          )}

          {showModal && (
            <CreateCourseModal
              setShowModal={setShowModal}
              setTitle={setTitle}
              title={title}
              setDescription={setDescription}
              description={description}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </main>
    </div>
  );
}
