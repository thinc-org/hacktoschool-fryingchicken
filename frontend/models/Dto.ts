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
  title: string;
  content: string;
  courseId: number;
  courseName: string;
  createdAt?: Date;
  updatedAt?: Date;
  announcementRead: AnnouncementReadDetailDto[];
}

export interface AnnouncementReadDetailDto {
  id: number;
  announcementId: number;
  announcement: AnnouncementDetailDto;
  isRead: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
