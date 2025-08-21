FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

COPY . .
EXPOSE 5173
# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]