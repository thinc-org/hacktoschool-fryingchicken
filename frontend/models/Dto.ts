import { ListenOptions } from 'net';

// Todo: Change these attribute to madatory
export interface CourseDetailDto {
  id: number;
  name: string;
  instructorName: string;
  description: string;
  updatedAt?: Date;
  createdAt?: Date;
  studentCount: number;
}

export interface EnrollDetailDto {
  id: number;
  courseId: number;
  username: string;
  course: CourseDetailDto;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AnnouncementDetailDto {
  id: number;
  //announcementId: number;
  title: string;
  description: string;
  courseName: string;
  readList: string[];
  createdAt?: Date;
  // updatedAt?: Date;
}
