FROM node:18

WORKDIR /usr/app

COPY /dist/portfolio/ ./

CMD node server/server.mjs

EXPOSE 4100
