FROM node:12.16.1-alpine3.9
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN yarn
CMD '/app/release.sh'
