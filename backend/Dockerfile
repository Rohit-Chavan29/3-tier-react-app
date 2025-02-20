FROM node:23.8.0-alpine
WORKDIR /app
COPY . .
RUN npm ci
CMD ["node", "server.js"]