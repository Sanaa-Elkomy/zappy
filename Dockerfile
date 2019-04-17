FROM node:10.15.3-slim
# Create app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
CMD node index.js
EXPOSE 3000

