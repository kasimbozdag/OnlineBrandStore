# Use an official Node runtime as the base image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install the project's dependencies
RUN yarn install

# Bundle the source code inside the Docker image
COPY . .

RUN yarn build

# Expose the port the app will run on
EXPOSE 3000

# Serve the app
CMD ["yarn", "start"]

