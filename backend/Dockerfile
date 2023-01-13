FROM node:16-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm


COPY package*.json ./
COPY prisma ./prisma/

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:16-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist


EXPOSE 3333
CMD [ "node", "dist/src/main.js" ]