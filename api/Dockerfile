FROM node:18

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY nodemon.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
