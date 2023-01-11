// Todo: Change these attribute to madatory
export interface CourseDetailDto {
  id: number;
  name: string;
  instructorId: number;
  instructorName: string;
  description: string;
  updatedDate?: Date;
  createdDate?: Date;
}
