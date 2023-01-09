interface Props {
  docsName: string;
}

const SingleCourses = ({ docsName }: Props) => {
  return (
    <a
      href="../component/singleCourses.tsx"
      target="_blank"
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">Title {docsName}&rarr;</h3>
      <h3 className="text-2xl font-bold">Instructor Name&rarr;</h3>
      <p className="mt-4 text-xl">Description</p>
    </a>
  );
};

export default SingleCourses;
