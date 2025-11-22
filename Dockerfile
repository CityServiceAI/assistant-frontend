FROM node:22-alpine AS builder
WORKDIR /app

ARG VITE_APP_ENV

ENV VITE_APP_ENV=$VITE_APP_ENV

COPY package.json package-lock.json ./
RUN npm ci --silent || npm install --silent

COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN apk add --no-cache gettext

COPY nginx.conf /etc/nginx/templates/default.conf.template

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

ENV BACKEND_URL=http://host.docker.internal:8000

ENTRYPOINT ["/docker-entrypoint.sh"]
