import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SingleCourses from '../component/singleCourses'

const MyCourses: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          My Courses
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <SingleCourses />
          <SingleCourses />
          <SingleCourses />
          <SingleCourses />
        </div>
      </main>
    </div>
  )
}

export default MyCourses
