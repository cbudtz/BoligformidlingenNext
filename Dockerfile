FROM node:14-alpine

WORKDIR /my-path

COPY ./web/package.json ./
COPY ./web/yarn.lock ./

RUN yarn install

COPY ./web/ .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]