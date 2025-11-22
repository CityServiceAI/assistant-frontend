#!/usr/bin/env sh
set -e

###############################################################################
# Verbosity helper
###############################################################################
log() {
  [ "$VERBOSE" = "1" ] && echo "[entrypoint] $*"
}

###############################################################################
# Environment handling
###############################################################################
export VITE_API_BASE_URL="${VITE_API_BASE_URL:-${API_BASE_URL}}"

log "VITE_API_BASE_URL = ${VITE_API_BASE_URL}"

if [ -z "$VITE_API_BASE_URL" ]; then
  echo "[entrypoint] Error: VITE_API_BASE_URL or API_BASE_URL must be set" >&2
  exit 1
fi

###############################################################################
# Template generation
###############################################################################
log "Rendering nginx config..."
envsubst '${VITE_API_BASE_URL}' \
  < /etc/nginx/conf.d/nginx.conf.template \
  > /etc/nginx/conf.d/default.conf

###############################################################################
# Main process: always exec nginx unless overridden
###############################################################################
if [ "$#" -eq 0 ]; then
  log "No CMD provided. Starting nginx in foreground..."
  exec nginx -g "daemon off;"
else
  log "Executing custom command: $*"
  exec "$@"
fi
 