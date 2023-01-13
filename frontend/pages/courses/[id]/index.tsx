import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import {
  CourseDetailDto,
  AnnouncementReadDetailDto,
} from '../../../models/Dto';
import { useAuth } from '../../../providers/AuthProvider';
import { ErrorDto } from '../../../types/dto';
import { api } from '../../../utils/axios';

import AnnouncementModal from '../../../components/AnnouncementModal';
import { AnnouncementDetailDto } from '../../../models/Dto';
import CreateAnnouncementModal from '../../../components/CreateAnnouncementModal';

export default function courseDetail() {
  const { isLoggedIn, username, role } = useAuth();
  const router = useRouter();
  const [course, setCourse] = useState<CourseDetailDto | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [isEnrolling, setIsEnrolling] = useState<boolean>(false);
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const { isReady } = router;
  const [anDetail, setAnDetail] = useState<AnnouncementDetailDto>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [announcements, setAnnouncements] = useState<AnnouncementDetailDto[]>(
    []
  );
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  // const Tannouncement: AnnouncementDetailDto[] = [
  //   {
  //     id: '1',
  //     title: 'Tomorrow, we will have a quiz.',
  //     description: 'Chapter 1-2',
  //     courseName: 'Zhong gua language',
  //     readList: ['Ton', 'Nac', 'Jo', 'Jom'],
  //     createdAt: new Date(),
  //   },
  //   {
  //     id: '2',
  //     title: 'Yesterday, we will have a quiz.',
  //     description: 'Chapter 6-9',
  //     courseName: 'Nihonjin language',
  //     readList: ['TonTOnTONTONTOOTN', 'Nac', 'Jo', 'Jom'],
  //     createdAt: new Date(),
  //   },
  // ];

  const getAnnouncement = async () => {
    const res = await api.get(`announcement/byCourse/${course?.id}`);
    const data = await res.data;

    setAnnouncements(data);
  };

  const handleSubmitNewAnn = async () => {
    const res = await api.post('/announcement', {
      title,
      content: description,
      courseId: course?.id,
      courseName: course?.name,
    });
    await getAnnouncement();
    setTitle('');
    setDescription('');
  };

  const disableBtn =
    role === 'admin' || role === 'instructor' || isEnrolling || isEnrolled;

  useEffect(() => {
    getAnnouncement();
    if (!isReady) return;

    const id = parseInt(router.query.id as string);

    const getData = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);

        // Check if user is already enrolled
        const isEnrolled = await api.get(
          `/enrolls/isEnrolled/${id}?username=${username}`
        );
        setIsEnrolled(isEnrolled.data);

        // Get students list for instructor
        if (role === 'instructor' || role === 'admin') {
          const res1 = await api.get(`/enrolls/courseId/${id}`);
          setUsers(res1.data);
        }
      } catch (err) {
        // Todo: Add error handlers
        toast.error('Unknown Error');
      }
    };
    getData();
  }, [isReady]);

  const handleEnroll = async () => {
    if (!isLoggedIn) return router.push('/login');

    // Enroll user to course
    try {
      setIsEnrolling(true);
      const id = parseInt(router.query.id as string);
      const res = await api.post('/enrolls', {
        username: username,
        courseId: id,
      });
    } catch (err) {
      let message = 'Unknown Error';
      console.log('Enroll Error');
      if (err instanceof AxiosError) {
        const { response } = err as AxiosError<ErrorDto>;
        const errorMsg = response?.data.message;
        if (errorMsg) message = errorMsg;
      }
      toast.error(message);
    }
    setIsEnrolling(false);
  };

  return (
    <div className="flex flex-row">
      <section className="px-[8%] py-[5%] basis-1/2">
        <h1 className="text-3xl font-extrabold">{course?.name}</h1>
        <span className="text-xl text-grey-dark block mt-[5%]">Instructor</span>
        <h3 className="text-2xl text-bold">{course?.instructorName}</h3>
        <span className="text-xl text-grey-dark mt-[5%] block">
          Description
        </span>
        <p className="text-lg">{course?.description}</p>

        <div className=" my-[4%]">
          {role === 'student' && isEnrolled && (
            <label className="block">
              You have already enrolled this course.
            </label>
          )}
          <button
            onClick={handleEnroll}
            className="text-cyan-dark font-bold text-base bg-cyan-light rounded-full max-w-max px-[3%] py-[1%] hover:bg-cyan-dark hover:text-white transition-all duration-300 disabled:bg-grey-dark disabled:transition-none disabled:text-white"
            disabled={disableBtn}
          >
            Enroll Course
          </button>
        </div>

        {isLoggedIn &&
          ((role === 'instructor' && course?.instructorName === username) ||
            role === 'admin') && (
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
      <section className="flex flex-col basis-1/2">
        {(role === 'instructor' || role === 'admin') && (
          <div className="flex justify-end w-3/4 mx-auto pb-10">
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowAnnouncementModal(true)}
            >
              Create an announcement
            </button>
          </div>
        )}
        {showAnnouncementModal && (
          <CreateAnnouncementModal
            setShowAnnouncementModal={setShowAnnouncementModal}
            setTitle={setTitle}
            title={title}
            setDescription={setDescription}
            description={description}
            handleSubmit={handleSubmitNewAnn}
          />
        )}
        <div className=" flex flex-col basis-1/3 border-2 rounded card w-100 shadow-l h-2/4 overflow-auto">
          <div className="card-body">
            {announcements.map((announcement: AnnouncementDetailDto) => {
              return (
                <div
                  className="border-2 my-3 rounded p-3 hover:text-blue-600 focus:text-blue-600 hover:cursor-pointer"
                  // key={index}
                  onClick={() => {
                    setAnDetail(announcement);
                  }}
                >
                  <h3>{announcement.title}</h3>
                  <p>{announcement.course.name}</p>
                </div>
              );
            })}
            {!!anDetail && (
              <AnnouncementModal data={anDetail} setAnDetail={setAnDetail} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
