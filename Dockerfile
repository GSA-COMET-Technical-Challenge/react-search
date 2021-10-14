FROM node:16.10.0-buster-slim

WORKDIR /src

ADD . /src

RUN npm install -g npm@7.24.2
RUN npm install

CMD [ "npm", "start" ]
