FROM node:20.16.0 

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy tsconfig.json and tsconfig.build.json
COPY tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src/ ./src

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE ${APP_PORT}

# Start the application
CMD ["npm","start"]

