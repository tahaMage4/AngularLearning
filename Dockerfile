# Use an official Node.js runtime as the base image
ARG NODE_VERSION=16

# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Remove existing node_modules (if any)
RUN rm -rf node_modules

RUN rm -rf package-lock.json

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./  &&  package.json package-lock.json\* ./
COPY  package*.json ./



# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app for production
# RUN npm run build
RUN npm run build


# Expose the port your Angular app will run on (default is 80)
EXPOSE 4200

# Define the command to start the Angular app
CMD [ "npm", "start", "--host" ]

