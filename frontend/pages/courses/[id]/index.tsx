import { useRouter } from 'next/router';
export default function courseDetail() {
  const router = useRouter();
  const id = router.query.id as string;

  return <h1>Course id is {id}</h1>;
}
