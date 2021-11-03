FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY docker/prod_nginx.conf /etc/nginx/nginx.conf
COPY docker/ssl /etc/nginx/ssl
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]