# STAGE 1 - Regular dockerize
# Use an official Node.js runtime as the base imag
FROM node:18

# Set working directory in container
WORKDIR /app

# copy package.json and package-lock.json to container directory ./
COPY package*.json ./

# run scripts
# install angular
RUN npm install -g @angular/cli

# install app modules
RUN npm install 

# copy files to container
COPY . .

# build the application prod
RUN ng build

EXPOSE 4200

CMD ["ng", "serve", "--open", "--host", "0.0.0.0"]

######################################
# TERMINAL CMDS

# build image 
# docker build -t angular-app .

# Run image
# docker run -p 4200:4200 angular-app

