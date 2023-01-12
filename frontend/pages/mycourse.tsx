import React, { useState, useEffect } from 'react';
import { CourseDetailDto, EnrollDetailDto } from '../models/Dto';
import { useAuth } from '../providers/AuthProvider';
import { api } from '../utils/axios';
import Link from 'next/link';
import SingleCourses from '../components/SingleCourses';
import Head from 'next/head';
import CreateCourseModal from '../components/CreateCourseModal';
import SearchBox from '../components/SearchBox';

export default function mycourse_instructor() {
  const { username, role } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [enrolls, setEnrolls] = useState<EnrollDetailDto[]>([]);
  const [courses, setCourses] = useState<CourseDetailDto[]>([]);
  const [showData, setShowData] = useState<CourseDetailDto[]>([]);
  const [name, setName] = useState('');
  const [searchBy, setSearchBy] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getEnrolls = async () => {
    const res = await api(`/enrolls/username/${username}`);
    const data = await res.data;
    // console.log(data);
    const tmp: CourseDetailDto[] = [];
    data.map((enroll: any) => {
      tmp.push(enroll.course);
    });
    setEnrolls(data);
    setIsLoading(false);
    setCourses(tmp);
    setShowData(tmp);
  };

  // Render component when username is loaded
  useEffect(() => {
    getEnrolls();
  }, [username]);

  // handleSubmit is used for creating new course by instructor
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

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">My Courses</h1>

        <SearchBox
          name={name}
          setName={setName}
          showData={showData}
          setShowData={setShowData}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          data={courses}
        />

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {showData.map((course: CourseDetailDto, index) => {
            return (
              <div
                className="border-2 w-3/4 mx-auto my-3 rounded p-3 hover:text-blue-600 focus:text-blue-600"
                key={index}
              >
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
                </Link>
              </div>
              // <SingleCourses data={course} key={course.id} />
            );
          })}

          {(role === 'instructor' || role === 'admin') && (
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
