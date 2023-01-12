import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { CourseDetailDto } from '../../../models/Dto';
import { useAuth } from '../../../providers/AuthProvider';
import { ErrorDto } from '../../../types/dto';
import { api } from '../../../utils/axios';

export default function courseDetail() {
  const { isLoggedIn, username, role } = useAuth();
  const router = useRouter();
  const [course, setCourse] = useState<CourseDetailDto | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [isEnrolling, setIsEnrolling] = useState<boolean>(false);
  const { isReady } = router;

  useEffect(() => {
    if (!isReady) return;

    const id = parseInt(router.query.id as string);

    const getData = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
        const res1 = await api.get(`/enrolls/courseId/${id}`);
        setUsers(res1.data);
        // console.log(res.data.name, res.data.instructorName);
      } catch (err) {
        // Todo: Add error handlers
        toast.error('Unknown Error');
        // Todo: Remove below lines
      }
    };
    getData();
  }, [isReady]);

  console.log(isLoggedIn, role, users);

  const handleEnroll = async () => {
    // Todo: create api for enrolling course
    try {
      setIsEnrolling(true);
      const id = parseInt(router.query.id as string);
      const res = await api.post('/enrolls', {
        username: username,
        courseId: id,
      });
      console.log(res);
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof AxiosError) {
        const { response } = err as AxiosError<ErrorDto>;
        const errorMsg = response?.data.message;
        if (errorMsg) message = errorMsg;
      }
      toast.error(message);
    }
    setIsEnrolling(false);
  };

  const disableBtn = role === 'instructor' || isEnrolling;

  return (
    <>
      <section className="px-[8%] py-[5%]">
        <h1 className="text-3xl font-extrabold">{course?.name}</h1>
        <span className="text-xl text-grey-dark block mt-[5%]">Instructor</span>
        <h3 className="text-2xl text-bold">{course?.instructorName}</h3>
        <span className="text-xl text-grey-dark mt-[5%] block">
          Description
        </span>
        <p className="text-lg">{course?.description}</p>

        {/* Todo: grey out this button if user already enrolled */}
        <button
          onClick={handleEnroll}
          className="text-cyan-dark font-bold text-base bg-cyan-light rounded-full max-w-max px-[3%] py-[1%] my-[4%] hover:bg-cyan-dark hover:text-white transition-all duration-300 disabled:bg-grey-dark disabled:transition-none disabled:text-white"
          disabled={disableBtn}
        >
          Enroll Course
        </button>

        {/* Todo: Only course'instructor can view its enrolled students ? */}
        {isLoggedIn && role === 'instructor' && (
          <>
            <span className="text-xl text-grey-dark mt-[5%] block">
              Lists of Enrolled Students
            </span>
            <p className="text-lg">
              {users.map((user, index) => {
                if (user.username !== username) {
                  return (
                    <>
                      {index} : {user.username} <br />
                    </>
                  );
                }
              })}
              Total : {users.length - 1} students
            </p>
          </>
        )}
      </section>
    </>
  );
}
