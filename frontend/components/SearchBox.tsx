import { Dispatch, SetStateAction } from 'react';
import { CourseDetailDto } from '../models/Dto';

interface props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  showData: CourseDetailDto[];
  setShowData: Dispatch<SetStateAction<CourseDetailDto[]>>;
  searchBy: boolean;
  setSearchBy: Dispatch<SetStateAction<boolean>>;
  data: CourseDetailDto[];
}

export default function SearchBox({
  name,
  setName,
  showData,
  setShowData,
  searchBy,
  setSearchBy,
  data,
}: props) {
  return (
    <>
      <div className="items-center relative p-6 flex flex-row gap-5">
        <label
          htmlFor="about"
          className="w-60 block text-xl font-medium text-gray-700"
        >
          Search by :
        </label>

        <input
          // id="about"
          // name="about"
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl bg-gray-200"
          placeholder=""
          value={name}
          onChange={(e) => {
            let len = e.target.value.length;
            if (e.target.value === '') {
              setShowData(data);
            } else {
              if (!searchBy) {
                setShowData(
                  data.filter(
                    (prop) => prop.name.slice(0, len) === e.target.value
                  )
                );
              } else {
                setShowData(
                  data.filter(
                    (prop) =>
                      prop.instructorName.slice(0, len) === e.target.value
                  )
                );
              }
            }
            setName(e.target.value);
          }}
        />

        <select
          className="form-control mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          id="searchBy"
          onChange={(e) => {
            if (e.target.value === 'course-name') {
              setSearchBy(false);
            } else {
              setSearchBy(true);
            }
          }}
          name="searchBy"
        >
          <option value="course-name">Course Name</option>
          <option value="instructor-name">Instructor Name</option>
        </select>
      </div>
    </>
  );
}
