FROM node:16.10.0-buster-slim

WORKDIR /src

ADD . /src

#RUN npm install -g npm@7.24.2
RUN npm install
RUN npm run build
RUN yarn global add serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]
