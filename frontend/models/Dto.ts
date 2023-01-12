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
  createdAt?: Date;
  updatedAt?: Date;
}
