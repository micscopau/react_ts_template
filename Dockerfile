FROM node:alpine AS basefrontend
# EXPOSE 5280

WORKDIR /app

COPY package.json ./

# force the production installation. could remove this if NODE_ENV is being set, and we want the container to potentially include dev dependencies
RUN yarn install --production

COPY . .
RUN yarn build:prod

FROM nginx:alpine AS frontend
COPY --from=basefrontend /app/dist /usr/share/nginx/html
COPY --from=basefrontend /app/index.html /usr/share/nginx/html
EXPOSE 80
EXPOSE 5280

CMD ["nginx", "-g", "daemon off;"]