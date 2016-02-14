FROM node:argon

RUN npm install -g typescript gulp tsd bower

RUN mkdir /src

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

ADD app /src/app
WORKDIR /src/app
RUN gulp copy_angular

EXPOSE 3000 35729

WORKDIR /src

CMD ["npm", "start"]