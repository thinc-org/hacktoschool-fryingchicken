import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CourseDetailDto } from '../models/Dto';

export default function mycourse_instructor() {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourse] = useState<CourseDetailDto[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const courses = [
  //   {
  //     id: '1',
  //     name: 'sdfghjk',
  //     instructorname: 'asdfghjk',
  //     description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  //   },
  //   {
  //     id: '1',
  //     name: 'sdfghjk',
  //     instructorname: 'asdfghjk',
  //     description: 'fdjoidjsfdjj;bfdnjfs',
  //   },
  //   {
  //     id: '1',
  //     name: 'sdfghjk',
  //     instructorname: 'asdfghjk',
  //     description: 'fdjoidjsfdjj;bfdnjfs',
  //   },
  // ];
  const fetchCourse = async () => {
    const response = await fetch('/tempAPIroute');
    const data = await response.json();
    setCourse(data);
  };
  useEffect(() => {
    fetchCourse();
  });

  const handleSubmit = async () => {
    const response = await fetch('/temp', {
      method: 'POST',
      body: JSON.stringify({
        name: { title },
        description: { description },
      }),
    });
    const resJson = await response.json();
    if (response.status === 200) {
      setTitle('');
      setDescription('');
    }
    //should add error handle
  };
  let role = 'instructor';
  return (
    <div className="container mx-auto">
      {courses.map((course) => {
        return (
          <div
            className="border-2 w-3/4 mx-auto my-3 rounded p-3"
            key={course.id}
          >
            <Link href={'/courses/' + course.id}>
              <h1 className="text-2xl font-bold">{course.name}</h1>
            </Link>
            {role == 'student' ? (
              <p>
                {course.instructorName}
                <br />
                {course.description}
              </p>
            ) : (
              <p>{course.description}</p>
            )}
          </div>
        );
      })}
      {role == 'instructor' ? (
        <div className="flex justify-end w-auto mx-auto py-3">
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
  );
}
