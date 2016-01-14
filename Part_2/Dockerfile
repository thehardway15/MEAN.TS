FROM node:argon

RUN npm install -g typescript gulp tsd

RUN mkdir /src

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

EXPOSE 3000 35729

CMD ["npm", "start"]