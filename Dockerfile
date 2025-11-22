FROM node:22-alpine AS builder
WORKDIR /app

# Build arguments - змінні мають бути доступні під час npm run build
ARG VITE_API_BASE_URL
ARG VITE_APP_ENV

# Встановлюємо як ENV, щоб Vite міг їх бачити під час build
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_APP_ENV=$VITE_APP_ENV

COPY package.json package-lock.json ./
RUN npm ci --silent || npm install --silent

COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
