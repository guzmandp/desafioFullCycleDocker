FROM alpine:3.19

ENV NODE_VERSION 22.6.0

#FROM node:22.6.0

WORKDIR /app


COPY . .



ENV DOCKERIZE_VERSION v0.7.0

#RUN sudo apt-get install
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

#RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "install"]

CMD [ "node", "server.js" ]