FROM node:10-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]