FROM node:18-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production
RUN npm rebuild bcrypt --build-from-source

COPY . .

ENV NODE_ENV=production

EXPOSE 3003

CMD ["node", "index.js"]