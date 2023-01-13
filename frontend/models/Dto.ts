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
