FROM node:22

WORKDIR /usr/app

RUN npm install pm2@latest -g

COPY /dist/portfolio/ ./

CMD ["pm2-runtime", "node server/server.mjs"]

EXPOSE 4100
