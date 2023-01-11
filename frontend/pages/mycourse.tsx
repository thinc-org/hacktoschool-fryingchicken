import React, { useState, useEffect } from 'react';
import { CourseDetailDto, EnrollDetailDto } from '../models/Dto';
import { useAuth } from '../providers/AuthProvider';
import { api } from '../utils/axios';
import Link from 'next/link';
import SingleCourses from '../components/SingleCourses';
import Head from 'next/head';

export default function mycourse_instructor() {
  const { username, role } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [enrolls, setEnrolls] = useState<EnrollDetailDto[]>([]);
  const [courses, setCourses] = useState<CourseDetailDto[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [index, setIndex] = useState(0);

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
  };
  const getCourse = async (enroll: EnrollDetailDto) => {
    const res = await api.get(`/courses/${enroll.courseId}`);
    const prop: CourseDetailDto = await res.data;
    setCourses([...courses, prop]);
    setIndex(index + 1);
  };

  useEffect(() => {
    getEnrolls();
  }, []);

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
  };

  if (index < enrolls.length) {
    getCourse(enrolls[index]);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">My Courses</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {courses.map((course: CourseDetailDto) => {
            return (
              <div
                className="border-2 w-3/4 mx-auto my-3 rounded p-3"
                key={course.id}
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

          {role == 'instructor' ? (
            <div className="flex justify-end w-3/4 mx-auto">
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Create a new course
              </button>
            </div>
          ) : null}

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}{' '}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Course detail</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div className="mt-1">
                          <input
                            // id="about"
                            // name="about"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Course name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            // id="about"
                            // name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="What is this course about?"
                            // defaultValue={''}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>

                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          handleSubmit();
                          setShowModal(false);
                        }}
                      >
                        Create course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
