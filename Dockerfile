# Specify the base image
FROM node:alpine
# Set the working directory
WORKDIR /geolocation-front-service
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Set the environment variable for Node.js
ENV NODE_OPTIONS="--openssl-legacy-provider"
# Copy the app files
COPY . .
# Build the app
RUN npm run build
# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "start"]