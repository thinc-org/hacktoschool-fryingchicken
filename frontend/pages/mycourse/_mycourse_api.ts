import { api } from '../../utils/axios';
import { CourseDetailDto } from '../../models/Dto';

export async function createCourse(data: {
  courseName: string;
  courseDescription: string;
  courseInstructor: string | null;
}) {
  const res = await api.post('/courses', {
    name: data.courseName,
    description: data.courseDescription,
    instructorName: data.courseInstructor,
  });

  const courseId = res.data.id;
  await api.post('/enrolls', {
    courseId,
    username: data.courseInstructor,
  });
}

export async function enrolls() {
  const res = await api(`/enrolls/username`);
  const data = await res.data;
  const tmp: CourseDetailDto[] = data.map((enroll: any) => {
    return { ...enroll.course, studentCount: enroll.studentCount };
  });
  return tmp;
}
