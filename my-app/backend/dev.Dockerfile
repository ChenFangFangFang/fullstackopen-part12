FROM node:18

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json

RUN npm install
RUN npm rebuild bcrypt --build-from-source

# 
COPY . .

EXPOSE 3003

# 使用 nodemon 启动开发服务器
CMD ["npm", "run", "dev"]