FROM    centos:centos7

RUN     yum install -y epel-release
RUN     yum install -y nodejs npm

COPY package.json /src/package.json
RUN cd /src; npm install

COPY . /src

EXPOSE  3000

CMD ["node", "NODE_ENV=development TWITTER_CONSUMER_KEY=IjMaLz1zrDakEzIuXyUtSfxXT TWITTER_CONSUMER_SECRET=kwmbmoTI2jbJEyAIPbqKcFc6WM0ocVTZeqKEfY4QMGnvYWApFb TWITTER_ACCESS_TOKEN=3773959992-m6DQgt8YoF10PbMoPCXN1Ru30WDE3HfMBiwR9M8 ACCESS_TOKEN_SECRET=V7Z80Go9PFFMzEJT4uQMRxdkqHOYSFpjXdQ9TLZiX4UJ2 node server.js"]
