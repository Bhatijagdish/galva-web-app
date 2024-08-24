FROM node:20-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
CMD ["nginx", "-g", "daemon off;"]