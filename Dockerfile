# Use the official Node.js LTS version as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Install the 'serve' package globally to serve the app
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app using 'serve'
CMD ["serve", "-s", "build", "-l", "3000"]
