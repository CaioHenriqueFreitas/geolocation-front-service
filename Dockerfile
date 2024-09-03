FROM caddy:latest
# Set the working directory
WORKDIR /geolocation-front-service
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Set the environment variable for Node.js
ENV NODE_OPTIONS="--openssl-legacy-provider"
COPY Caddyfile /etc/caddy/Caddyfile
COPY dist /srv
EXPOSE 80