# Get image
FROM node:alpine

# Set default working directory
WORKDIR /usr/app

# Copy files to WD
COPY ./package.json ./

# Running init scripts
RUN npm install

COPY ./ ./
RUN npm run build

# Run app
CMD ["npm", "start"]