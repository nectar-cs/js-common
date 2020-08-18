FROM node:12.16.1-alpine3.9
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN yarn
RUN npm set registry https://registry.npmjs.org/
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /root/.npmrc
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /app/.npmrc
