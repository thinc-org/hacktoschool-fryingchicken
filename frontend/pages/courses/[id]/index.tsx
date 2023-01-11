import { useRouter } from 'next/router';
import { api } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import { CourseDetailDto } from '../../../models/Dto';

export default function courseDetail() {
  const router = useRouter();
  const [data, setData] = useState<CourseDetailDto | null>(null);
  const id = router.query.id as string;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/course/${id}`);
        setData(res.data);
      } catch (err) {
        console.log(err);

        // Todo: Add error handlers
        // Todo: Remove below lines
        setData({
          id: 1,
          name: 'General Philosophy',
          instructorId: 313,
          instructorName: 'Nac Nacho',
          description: 'You will learn the meaning of life from this course',
        });
      }
    };
    getData();
  }, []);

  return (
    <>
      <section className="px-[8%] py-[5%]">
        <h1 className="text-3xl font-extrabold">{data?.name}</h1>
        <span className="text-xl text-grey-dark block mt-[5%]">Instructor</span>
        <h3 className="text-2xl text-bold">{data?.instructorName}</h3>
        <span className="text-xl text-grey-dark mt-[5%] block">
          Description
        </span>
        <p className="text-lg">{data?.description}</p>
      </section>
    </>
  );
}
