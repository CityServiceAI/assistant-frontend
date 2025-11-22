FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --silent || npm install --silent

COPY . .
RUN npm run build

FROM nginx:alpine
RUN apk add --no-cache gettext

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

# ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]
# CMD ["nginx", "-g", "daemon off;"]

ENTRYPOINT ["/entrypoint.sh"]
CMD []


