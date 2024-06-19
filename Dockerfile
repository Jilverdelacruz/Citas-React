FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]