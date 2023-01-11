// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.users.update({
    where: { username: 'user1' },
    data: { description: 'the best student' },
  });
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
  console.log({ post1 });
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
