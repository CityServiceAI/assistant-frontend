#!/usr/bin/env sh
set -e

export VITE_API_BASE_URL="${VITE_API_BASE_URL:-${API_BASE_URL}}"

if [ -z "$VITE_API_BASE_URL" ]; then
  echo "Error: VITE_API_BASE_URL or API_BASE_URL must be set"
  exit 1
fi

envsubst '${VITE_API_BASE_URL}' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"
