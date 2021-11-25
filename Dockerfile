FROM node:8.0.0-alpine as builder

WORKDIR /code
ENV SASS_BINARY_SITE https://npm.taobao.org/mirrors/node-sass/
RUN yarn config set registry https://registry.npm.taobao.org/ && yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
COPY package.json /code
RUN yarn

COPY . /code
RUN npm run build

FROM nginx:alpine
COPY --from=builder /code/dist /usr/share/nginx/html
COPY --from=builder /code/default.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80