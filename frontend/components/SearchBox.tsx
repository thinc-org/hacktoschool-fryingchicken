import { Dispatch, SetStateAction, useState } from 'react';
import { CourseDetailDto } from '../models/Dto';

interface props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  showData: CourseDetailDto[];
  setShowData: Dispatch<SetStateAction<CourseDetailDto[]>>;
  searchBy: string;
  setSearchBy: Dispatch<SetStateAction<string>>;
  isAdvanced: boolean;
  setIsAdvanced: Dispatch<SetStateAction<boolean>>;
  data: CourseDetailDto[];
}

export default function SearchBox({
  name,
  setName,
  showData,
  setShowData,
  searchBy,
  setSearchBy,
  isAdvanced,
  setIsAdvanced,
  data,
}: props) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  const handleSubmit = (e: any) => {
    let newCourse: CourseDetailDto[] = [];
    if (e.target.id === 'button1') {
      const texts = text1.split(' ');
      newCourse = data;
      for (const text of texts) {
        newCourse = newCourse.filter(
          (prop) =>
            prop.name.includes(text) ||
            prop.instructorName.includes(text) ||
            prop.description.includes(text)
        );
      }
    } else if (e.target.id === 'button2') {
      const texts = text2.split(' ');
      newCourse = data.filter((prop) => {
        for (const text of texts) {
          if (
            prop.name.includes(text) ||
            prop.instructorName.includes(text) ||
            prop.description.includes(text)
          )
            return true;
        }
        return false;
      });
    } else if (e.target.id === 'button3') {
      newCourse = data.filter(
        (prop) =>
          prop.name === text3 ||
          prop.instructorName === text3 ||
          prop.description === text3
      );
    } else if (e.target.id === 'button4') {
      const texts = text4.split(' ');
      newCourse = data.filter((prop) => {
        for (const text of texts) {
          if (
            prop.name.includes(text) ||
            prop.instructorName.includes(text) ||
            prop.description.includes(text)
          )
            return false;
        }
        return true;
      });
    }
    setShowData(newCourse);
  };

  return isAdvanced ? (
    <>
      <div className="items-center relative p-6 flex flex-row gap-4">
        <label htmlFor="about" className="w-56 block font-medium text-gray-700">
          Search by :
        </label>

        <input
          // id="about"
          // name="about"
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
          value={name}
          onChange={(e) => {
            if (e.target.value === '') {
              setShowData(data);
            } else {
              if (searchBy === 'Course Name') {
                setShowData(
                  data.filter((prop) => prop.name.includes(e.target.value))
                );
              } else if (searchBy === 'Instructor Name') {
                setShowData(
                  data.filter((prop) =>
                    prop.instructorName.includes(e.target.value)
                  )
                );
              } else if (searchBy === 'Description') {
                setShowData(
                  data.filter((prop) =>
                    prop.description.includes(e.target.value)
                  )
                );
              }
            }
            setName(e.target.value);
          }}
        />

        <select
          className="form-control text-sm mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          id="searchBy"
          onChange={(e) => setSearchBy(e.target.value)}
          name="searchBy"
        >
          <option value="">Please Select</option>
          <option value="Course Name">Course Name</option>
          <option value="Instructor Name">Instructor Name</option>
          <option value="Description">Description</option>
        </select>

        <h1
          className="text-sm w-80 hover:scale-[1.05]"
          onClick={(e) =>
            setIsAdvanced((prev) => {
              return !prev;
            })
          }
        >
          Use advance search
        </h1>
      </div>
    </>
  ) : (
    <>
      <div className="flex-col">
        <div className="p-3"></div>
        <div className="items-center relative p-2 flex flex-row gap-4">
          <label
            htmlFor="about"
            className="text-sm w-60 block font-medium text-gray-700"
          >
            All these words :
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            onChange={(e) => setText1(e.target.value)}
          />
          <button
            className="text-sm hover:scale-[1.05]"
            id="button1"
            onClick={handleSubmit}
          >
            Go
          </button>
        </div>

        <div className="items-center relative p-2 flex flex-row gap-4">
          <label
            htmlFor="about"
            className="text-sm w-60 block font-medium text-gray-700"
          >
            Any of these words :
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            onChange={(e) => setText2(e.target.value)}
          />
          <button
            className="text-sm hover:scale-[1.05]"
            id="button2"
            onClick={handleSubmit}
          >
            Go
          </button>
        </div>

        <div className="items-center relative p-2 flex flex-row gap-4">
          <label
            htmlFor="about"
            className="text-sm w-60 block font-medium text-gray-700"
          >
            This exact word or phrase :
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            onChange={(e) => setText3(e.target.value)}
          />
          <button
            className="text-sm hover:scale-[1.05]"
            id="button3"
            onClick={handleSubmit}
          >
            Go
          </button>
        </div>

        <div className="items-center relative p-2 flex flex-row gap-4">
          <label
            htmlFor="about"
            className="text-sm w-60 block font-medium text-gray-700"
          >
            None of these words :
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            onChange={(e) => setText4(e.target.value)}
          />
          <button
            className="text-sm hover:scale-[1.05]"
            id="button4"
            onClick={handleSubmit}
          >
            Go
          </button>
        </div>

        <div className="p-2">
          <h1
            className="text-sm w-50 hover:scale-[1.05]"
            onClick={(e) =>
              setIsAdvanced((prev) => {
                return !prev;
              })
            }
          >
            Use basic search
          </h1>
        </div>
      </div>
    </>
  );
}
