import { useRouter } from 'next/router';
import { api } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import { CourseDetailDto } from '../../../models/Dto';
import { useAuth } from '../../../providers/AuthProvider';

export default function courseDetail() {
  const { isLoggedIn, username, role } = useAuth();
  const router = useRouter();
  const [course, setCourse] = useState<CourseDetailDto | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const { isReady } = router;

  useEffect(() => {
    if (!isReady) return;

    const id = parseInt(router.query.id as string);
    console.log(id);

    const getData = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
        const res1 = await api.get(`/enrolls/courseId/${id}`);
        setUsers(res1.data);
        // console.log(res.data.name, res.data.instructorName);
      } catch (err) {
        console.log(err);

        // Todo: Add error handlers
        // Todo: Remove below lines
        // setData({
        //   id: id,
        //   name: 'General Philosophy',
        //   instructorName: 'Nac Nacho',
        //   description: 'You will learn the meaning of life from this course',
        // });
      }
    };
    getData();
  }, [isReady]);

  console.log(isLoggedIn, role, users);

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
        {isLoggedIn && role === 'instructor' ? (
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
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
