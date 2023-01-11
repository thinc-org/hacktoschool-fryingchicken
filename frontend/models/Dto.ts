// Todo: Change these attribute to madatory
export interface CourseDetailDto {
  id: number;
  name: string;
  instructorName: string;
  description: string;
  updatedDate?: Date;
  createdDate?: Date;
  enrolledStudent: number;
}
