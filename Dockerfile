FROM node:12-alpine
WORKDIR /client
COPY package.json /client/package.json
RUN npm install
COPY . /client
#CMD ["npm", "start"]