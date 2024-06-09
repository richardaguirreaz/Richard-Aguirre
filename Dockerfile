FROM node:16-bullseye
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npm","run","dev"]
