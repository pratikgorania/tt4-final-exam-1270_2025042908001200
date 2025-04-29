# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy custom NGINX config if needed (optional)
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy build output to NGINX public folder
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
