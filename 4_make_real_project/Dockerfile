# Get image
FROM node:alpine

# Set default working directory
WORKDIR /usr/app

# Copy files to WD
COPY ./ ./

# Running init scripts
RUN npm install
RUN npm run build

# Run app
CMD ["npm", "start"]