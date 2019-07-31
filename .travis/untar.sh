#!/usr/bin/env sh
set -x

export NODE_ENV=production
#export NVM_BIN=$HOME/.nvm/versions/node/v6.9.0/bin

cd /var/www/upword.ly && \
tar zxvf package.tgz -C . && \
mv build/package.json . && \
npm install && \
npm run start