#!/bin/sh
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /root/.npmrc
npm publish
