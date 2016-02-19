FROM    centos:centos7

RUN     yum install -y epel-release
RUN     yum install -y nodejs npm

COPY package.json /src/package.json
RUN cd /src; npm install

COPY . /src

EXPOSE  3000

CMD ["node", "server.js"]
