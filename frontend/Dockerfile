FROM node:23.8.0-alpine as BUILD
WORKDIR /app
COPY . .
RUN npm ci && npm run build
FROM nginx:1.27.4
COPY --from=BUILD /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]