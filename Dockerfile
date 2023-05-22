FROM node:14

WORKDIR /myapp

COPY ./package.json ./

RUN npm cache clean --force

RUN npm install -g npm@7.24.0

COPY . .

CMD ["npm", "start"]