FROM node:12.16.1-alpine3.9
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN rm /app/.npmrc
RUN yarn
COPY .npmrc .
