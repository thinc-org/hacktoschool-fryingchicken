// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  // const post1 = await prisma.users.update({
  //   where: { username: 'user1' },
  //   data: { description: 'the best student' },
  // });
  // const post2 = await prisma.users.upsert({
  //   where: { username: 'user1' },
  //   update: {},
  //   create: {
  //     username: 'user1',
  //     password: 'password1',
  //     role: 'instructor',
  //     active: true,
  //   },
  // });
  // const post3 = await prisma.courses.create({
  //   data: {
  //     name: 'Course 2',
  //     description: 'Desc...',
  //     instructor: {
  //       connect: {
  //         username: 'user1',
  //       },
  //     },
  //     active: true,
  //   },
  // });
  // const post4 = await prisma.enrolls.create({
  //   data: {
  //     course: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //     user: {
  //       connect: {
  //         username: 'user1',
  //       },
  //     },
  //   },
  // });
  const post5 = await prisma.users.create({
    data: {
      username: 'admin101',
      password: 'p@ssw0rd404',
      role: 'admin',
      active: true,
    },
  });
  console.log({ post5 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
