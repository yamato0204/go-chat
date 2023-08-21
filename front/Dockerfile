FROM node:18.7.0

WORKDIR /front

COPY package.json .
COPY package-lock.json .

COPY . .

RUN rm -rf ./front/node_modules
RUN npm i

EXPOSE 5173

CMD ["npm", "run", "dev"]