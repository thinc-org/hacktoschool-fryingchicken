import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string): Promise<string> {
  //   const SALT = '10';
  const SALT = bcrypt.genSaltSync();
  console.log(SALT);
  return await bcrypt.hash(rawPassword, SALT);
}

export function comparePassword(rawPassword: string, hash: string): boolean {
  return bcrypt.compareSync(rawPassword, hash);
}
