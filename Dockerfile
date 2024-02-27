FROM node:21-alpine3.18

WORKDIR app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

EXPOSE $PORT
CMD ["pnpm", "start"]
