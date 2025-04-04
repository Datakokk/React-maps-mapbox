FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build-storybook

FROM nginx:alpine
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
