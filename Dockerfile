FROM node:21-alpine3.18

WORKDIR app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

EXPOSE $PORT

CMD ["pnpm", "start"]
