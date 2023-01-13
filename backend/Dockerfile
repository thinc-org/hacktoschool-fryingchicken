FROM node:18 AS builder

WORKDIR /app

RUN npm install -g pnpm


COPY package*.json ./
COPY prisma ./prisma/

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:18

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist


EXPOSE 3333
CMD [ "node", "dist/src/main.js" ]