# use an official Node.js runtime as the base image
FROM node:14

# set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ["package.json", "package-lock.json"]

# Copy the remaining application code to the working directory
COPY . .
# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]