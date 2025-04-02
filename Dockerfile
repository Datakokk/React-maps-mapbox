# Etapa de construcción
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# ⚠️ Copiamos nuestra configuración personalizada de nginx
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
