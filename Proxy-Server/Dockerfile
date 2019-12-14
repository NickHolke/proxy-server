FROM node:8.15.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

COPY package.json /src/app/

RUN npm install

EXPOSE 3008

CMD [ "npm", "start" ]