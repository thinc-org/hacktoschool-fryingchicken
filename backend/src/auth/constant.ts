// PUT THIS SECRET IN THE ENVIRONMENTS WHEN DEPLOYING
export const jwtConstants = {
  secret: process.env.JWT_SECRET || '0987654321',
};
